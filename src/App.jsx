import "./App.css";
import HomePage from "./HomePage";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Auth/LoginPage";
import RegisterPage from "./Auth/RegisterPage";
import ContactUs from "./ContactUs";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Admin from "./admin/Index";
import SpecialOrder from './SpecialOrder'
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import ErrorPage from "./ErrorPage";
import ShareWinPage from "./ShareWin";
import ProductEnquiry from "./ProductEnquiry";
import { useEffect } from "react";
import { checkValidity, handleLogout } from "./utils/auth";

function App() {
	useEffect(() => {
		const time_now = Date.now();
		const valid_time = checkValidity();

		if (time_now > valid_time) {
			handleLogout();
		}
	}, []);

	return (
		<Router>
			<Routes>
				{/* Public Routes with Main Layout */}
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="cart" element={<Cart />} />
					<Route path="wishlist" element={<Wishlist />} />
					<Route path="signup" element={<RegisterPage />} />
					<Route path="contact" element={<ContactUs />} />
					<Route path="special-order" element={<SpecialOrder />} />
					<Route path="share_win" element={<ShareWinPage />} />
					<Route path="shocases" element={<ProductEnquiry />} />
				</Route>

				{/* Admin Routes with Admin Layout */}
				<Route path="/admin" element={<AdminLayout />}>
					<Route path="*" element={<Admin />} />
				</Route>

				{/* Fallback Route */}
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;
