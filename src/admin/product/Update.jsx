import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db, storage } from "../../firebase";
import { LoadingIcon } from "../../components/LoadingIcon";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
function Update() {
	const navigate = useNavigate();
	const { state: id } = useLocation();
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);
	const [itemImage, setItemImage] = useState(null);
	const [uploadProgress, setUploadProgress] = useState(0);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const productDoc = await getDoc(doc(db, "products", id));
				if (productDoc.exists()) {
					setProduct(productDoc.data());
					setLoading(false);
				} else {
					console.error("No such document!");
				}
			} catch (error) {
				console.error("Error fetching product: ", error);
			}
		};

		fetchProduct();
	}, [id]);

	const handleUpdate = async (e) => {
		e.preventDefault();
		setLoading(true);
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
					const productRef = doc(db, "products", id);
					await updateDoc(productRef, {
						...product,
						imageUrl: downloadURL,
					});
					navigate("/admin/products");
				} catch (error) {
					console.error("Error updating product: ", error);
				}
			}
		);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduct((prevProduct) => ({
			...prevProduct,
			[name]: value,
		}));
	};

	const handleImageChange = (e) => {
		if (e.target.files[0]) {
			setItemImage(e.target.files[0]);
		}
	};

	if (loading) {
		return <LoadingIcon className="" size={50} />;
	}

	return (
		<>
			<form action="" aria-disabled={loading}>
				<div className="form-group">
					<h6 className="text-heading">Update Product</h6>
				</div>
				<div className="form-group">
					<label htmlFor="name" className="col-form-label">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						value={product.name}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="name" className="col-form-label">
						Description
					</label>
					<input
						type="text"
						className="form-control"
						id="description"
						name="description"
						value={product.description}
						onChange={handleChange}
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
						value={product.price}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="price" className="col-form-label">
						Discount
					</label>
					<input
						type="text"
						className="form-control"
						id="discount"
						name="discount"
						value={product.discount}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="price" className="col-form-label">
						Items Left
					</label>
					<input
						type="text"
						className="form-control"
						id="itemsLeft"
						name="itemsLeft"
						value={product.itemsLeft}
						onChange={handleChange}
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
						type="submit"
						onClick={handleUpdate}
					>
						Submit
					</button>
				</div>
			</form>
		</>
	);
}

export default Update;
