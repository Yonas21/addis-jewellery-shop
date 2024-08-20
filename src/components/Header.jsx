import { Link, useNavigate } from "react-router-dom";
import Item1 from "../assets/homepage/img/logo.png";
import {  handleLogout, is_loggedin } from "../utils/auth";
import { useEffect, useState } from "react";
import { getUserCartItems, getUserWishlistItems } from "../services/items";
import { getAuth } from "firebase/auth";

function Header() {
	const navigate = useNavigate()
	const is_logged_in = is_loggedin();
	const [cartItems, setCartItems] = useState(0)
	const [wishlistItems, setWishlistItems] = useState(0)

	const auth = getAuth();
	const user = auth.currentUser;


	useEffect(() => { 
	const getCartItems = async() => {
		const cartItems = await getUserCartItems(user.uid)
		setCartItems(cartItems?.length)
	}	
	
	const getWishlistItems = async() => {
		const wishlistItems = await getUserWishlistItems(user.uid)
		setWishlistItems(wishlistItems?.length)
	}
	getCartItems()
	getWishlistItems()
	
	}, [user])

	return (
		<header className="header_area">
			<div className="top_menu row m0">
				<div className="container-fluid">
					<div className="float-left">
						<p>Call Us: +251936972697</p>
					</div>
					<div className="float-right">
						<ul className="right_side">
							{!is_logged_in && <li>
								<Link to="/login">Login/Register</Link>
							</li>}
							<li>
								<Link to="/contact">Contact Us</Link>
							</li>
							<li>
								<Link to={""} onClick={handleLogout}>Logout</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="main_menu">
				<nav className="navbar navbar-expand-lg navbar-light">
					<div className="container-fluid">
						{/* <!-- Brand and toggle get grouped for better mobile display --> */}
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
						<div
							className="collapse navbar-collapse offset"
							id="navbarSupportedContent"
						>
							<div className="row w-100">
								<div className="col-lg-7 pr-0">
									<ul className="nav navbar-nav center_nav pull-right">
										<li className="nav-item active">
											<img onClick={()=>navigate("/")} src={Item1} alt=""  style={{cursor:"pointer"}}/>
										</li>
										<li className="nav-item active">
											<Link
												className="nav-link"
												to="/"
											>
												Home
											</Link>
										</li>
										<li className="nav-item submenu dropdown">
											<Link
												to="#"
												className="nav-link dropdown-toggle"
												data-toggle="dropdown"
												role="button"
												aria-haspopup="true"
												aria-expanded="false"
											>
												Shop
											</Link>
											<ul className="dropdown-menu">
												<li className="nav-item">
													<Link
														className="nav-link"
														to="/product_category"
													>
														Shop Category
													</Link>
												</li>

												<li className="nav-item">
													<Link
														className="nav-link"
														to="/product_detail"
													>
														Product Details
													</Link>
												</li>

												<li className="nav-item">
													<Link
														className="nav-link"
														to="/checkout"
													>
														Checkout
													</Link>
												</li>
												<li className="nav-item">
													<Link
														className="nav-link"
														to="/wishlist"
													>
														Wishlists
													</Link>
												</li>

												<li className="nav-item">
													<Link
														className="nav-link"
														to="/cart"
													>
														Shopping Cart
													</Link>
												</li>
												<li className="nav-item">
													<Link
														className="nav-link"
														to="/special-order"
													>
														Special Order
													</Link>
												</li>
											</ul>
										</li>

										<li className="nav-item submenu dropdown">
											<Link
												href="#"
												className="nav-link dropdown-toggle"
												data-toggle="dropdown"
												role="button"
												aria-haspopup="true"
												aria-expanded="false"
											>
												Product Enquiry
											</Link>
										</li>

										<li className="nav-item submenu dropdown">
											<Link
												href="#"
												className="nav-link dropdown-toggle"
												data-toggle="dropdown"
												role="button"
												aria-haspopup="true"
												aria-expanded="false"
											>
												Share & Win
											</Link>
											
										</li>
										<li className="nav-item">
											<Link
												className="nav-link"
												to="/contact"
											>
												Contact
											</Link>
										</li>
									</ul>
								</div>

								<div className="col-lg-5">
									<ul className="nav navbar-nav navbar-right right_nav pull-right">
										<hr />
										<li className="nav-item">
											<Link href="#" className="icons">
												<i
													className="fa fa-search"
													aria-hidden="true"
												></i>
											</Link>
										</li>

										<hr />

										<li className="nav-item">
											<Link href="#" className="icons">
												<i
													className="fa fa-user"
													aria-hidden="true"
												></i>
											</Link>
										</li>

										<hr />

										<li className="nav-item">
											<Link
												to="/wishlist"
												className="icons"
											>
												<i
													className="fa fa-heart"
													aria-hidden="true"
												>
													<span style={{color: "#1da1f2"}}>
														{wishlistItems}
													</span>
												</i>
											</Link>
										</li>

										<hr />

										<li className="nav-item">
											<Link
												to="/cart"
												className="icons"
											>
												<i className="fa fa-shopping-cart">
													<span
														style={{
															color: "#1da1f2",
														}}
													>
														{cartItems}
													</span>
												</i>
											</Link>
										</li>

										<hr />
									</ul>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Header;
