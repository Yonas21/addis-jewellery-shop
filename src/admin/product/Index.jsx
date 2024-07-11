import  { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { LoadingIcon } from "../../components/LoadingIcon";
function Index() {
  const navigate = useNavigate()
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, "products"));
				const items = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setProducts(items);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching products: ", error);
			}
		};
		fetchProducts();
	}, []);


    const handleDelete = async (id) => {
      try {
        await deleteDoc(doc(db, 'products', id));
        setProducts(products.filter(product => product.id !== id));
      } catch (error) {
        console.error('Error deleting product: ', error);
      }
    };


	console.log("products============>", products);

	if (loading) {
		return <LoadingIcon size={50} />;
	}
	return (
		<>
    <div className="form-group">
        <h6 className="text-heading">List Of Products</h6>
    </div>
			<table className="table table-striped" style={{ width: "100%" }}>
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">name</th>
						<th scope="col">price</th>
						<th scope="col">discount</th>
						<th scope="col">Description</th>
						<th scope="col">Item Left</th>
						<th scope="col">Image</th>
						<th scope="col">Update</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>
					{products?.length > 0 ? products?.map((product, _id) => (
						<tr
							key={product.id}
						>
							<th scope="row">{_id}</th>
							<td>{product.name}</td>
							<td>{product.price}</td>
							<td>{product.discount}</td>
							<td>{product.description}</td>
							<td>{product.itemsLeft}</td>
							<td> <img width={50} height={50} src={product.imageUrl} /> </td>
							<td>
								<button className="btn btn-primary" onClick={()=>navigate("/admin/update-product", {state:product})}>
									Update
								</button>
							</td>
							<td>
								<button className="btn btn-danger" onClick={() => {
                    Swal.fire({
                                      title: `Do you want to delete ${product.name}?`,
                                      text: "You won't be able to revert this!",
                                      icon: "warning",
                                      showCancelButton: true,
                                      confirmButtonColor: "#144284",
                                      cancelButtonColor: "#C2C5C7",
                                      cancelButtonText: "cancel",
                                      confirmButtonText: "Yes, delete",
                                    }).then((result) => {
                                      if (result.isConfirmed) {
                                        handleDelete(product.id);
                                      }
                                    });
                }}>
									Delete
								</button>
							</td>
						</tr>
					)): <tr><td>No Items Created For Now</td></tr>}
				</tbody>
			</table>
		</>
	);
}

export default Index;
