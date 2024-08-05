import { useState } from "react";
import {  ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { LoadingIcon } from "../../components/LoadingIcon";
import { useNavigate } from "react-router-dom";

function Add() {
	const navigate = useNavigate();
	const [itemName, setItemName] = useState("");
	const [itemPrice, setItemPrice] = useState("");
	const [color, setColor] = useState("");
	const [itemDescription, setItemDescription] = useState("");
	const [discount, setDiscount] = useState("");
	const [itemsInStock, setItemsInStock] = useState("");
	const [itemImage, setItemImage] = useState(null);
	const [category, setCategory] = useState("")
	const [uploadProgress, setUploadProgress] = useState(0);
	const [isLoading, setIsLoading] = useState(false)

	const handleImageChange = (e) => {
		if (e.target.files[0]) {
			setItemImage(e.target.files[0]);
		}
	};

	const handleUpload = async (e) => {
		setIsLoading(true)
		e.preventDefault();
		if (!itemImage) {
			alert("Please select an image");
			return;
		}

		const storageRef = ref(storage, `items/${itemImage.name}`);
		const uploadTask = uploadBytesResumable(storageRef, itemImage);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// Observe state change events such as progress, pause, and resume
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setUploadProgress(progress);
				console.log("Upload is " + progress + "% done");
			},
			(error) => {
				console.error("Error uploading image: ", error);
			},
			async () => {
				// Handle successful uploads on complete
				const downloadURL = await getDownloadURL(storageRef);
				console.log("File available at", downloadURL);

				try {
					const docRef = await addDoc(collection(db, "products"), {
						name: itemName,
						price: itemPrice,
						description: itemDescription,
						discount: category ==="discount" ? discount : null,
						color: color,
						itemsLeft: itemsInStock,
						category: category,
						imageUrl: downloadURL,
					});
					navigate("/admin/products");
					setIsLoading(false)
					console.log("Document written with ID: ", docRef.id);
					setItemName("");
					setItemPrice("");
					setItemDescription("");
					setItemImage(null);
					setUploadProgress(0);
				} catch (e) {
					console.error("Error adding document: ", e);
				}
			}
		);
	};

	console.log("category=========>", category)

	return (
		<>
				<div className="form-group col-lg-12">
					<h6 className="text-heading">Add Product</h6>
				</div>
				<div className="form-group">
					<label htmlFor="name" className="col-form-label">
						name
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						value={itemName}
						onChange={(event) => setItemName(event.target.value)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="name" className="col-form-label">
						Description
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						value={itemDescription}
						onChange={(event) =>
							setItemDescription(event.target.value)
						}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="color" className="col-form-label">
						Color
					</label>
					<input
						type="text"
						className="form-control"
						id="color"
						name="color"
						value={color}
						onChange={(event) => setColor(event.target.value)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="price" className="col-form-label">
						Price
					</label>
					<input
						type="text"
						className="form-control"
						id="price"
						name="price"
						value={itemPrice}
						onChange={(event) => setItemPrice(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="price" className="col-form-label">
						Category
					</label>
					<select className="form-control show" value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="featured" >featured</option>
                    <option value="hot" >hot</option>
                    <option value="discount">discount</option>
                    <option value="advert">advert</option>
                </select>
				</div>
				{category === "discount" && <div className="form-group">
					<label htmlFor="price" className="col-form-label">
						Discount %
					</label>
					<input
						type="text"
						className="form-control"
						id="discount"
						name="discount"
						value={discount}
						onChange={(event) => setDiscount(event.target.value)}
					/>
				</div>}

				<div className="form-group">
					<label htmlFor="price" className="col-form-label">
						Number of Items In Stock
					</label>
					<input
						type="text"
						className="form-control"
						id="discount"
						name="discount"
						value={itemsInStock}
						onChange={(event) =>
							setItemsInStock(event.target.value)
						}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="photo" className="col-form-label">
						Enter Image
					</label>
					<input
						type="file"
						className="form-control"
						id="photo"
						name="productImage"
						onChange={handleImageChange}
					/>
					{uploadProgress > 0 && (
						<p>Upload Progress: {uploadProgress}%</p>
					)}
				</div>

				<div className="form-group">
					<button
						className="btn btn-primary"
						type="button"
						onClick={handleUpload}
					>
						{isLoading ? <LoadingIcon size={20} className= "" /> :`Submit`}
					</button>
				</div>
		</>
	);
}

export default Add;
