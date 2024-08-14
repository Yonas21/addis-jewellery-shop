import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { fetchAllCarts } from "../services/items";

function CheckoutInfo() {
	const [cartItems, setCartItems] = useState([]);

	const auth = getAuth();
	const user = auth.currentUser;

	useEffect(() => {
		const getCartItems = async () => {
			const cartItems = await fetchAllCarts();
			setCartItems(cartItems);

		};
		getCartItems();
	}, [user]);



	console.log("user =======>", user);
	console.log("cart items=======>", cartItems);
	return (
		<>
			<div>
				<table className="table table-striped" style={{ width: "80%" }}>
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Product Name</th>
							<th scope="col">Email</th>
							<th scope="col">Phone Number</th>
							<th scope="col">Product Name</th>
							<th scope="col">Delete</th>
						</tr>
					</thead>
					<tbody>
						{cartItems?.map((item, key) => (
							<tr
								key={key}
							>
								<td scope="row">{key + 1}</td>
								<td>{item.name}</td>
								<td>{item.email}</td>
								<td>{item.phone}</td>
								<td>{item.productName}</td>
								<td>
									<button className="btn btn-danger">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default CheckoutInfo;
