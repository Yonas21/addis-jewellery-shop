import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

function Add() {
	const [itemName, setItemName] = useState("");
	const [itemPrice, setItemPrice] = useState("");
	const [color, setColor] = useState("");
	const [itemDescription, setItemDescription] = useState("");
	const [discount, setDiscount] = useState("");
	const [itemsInStock, setItemsInStock] = useState("");
	const [itemImage, setItemImage] = useState(null);
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
						discount: discount,
						color: color,
						itemsLeft: itemsInStock,
						imageUrl: downloadURL,
					});
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

	return (
		<>
			<form>
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
				</div>

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
						Submit
					</button>
				</div>
			</form>
		</>
	);
}

export default Add;
