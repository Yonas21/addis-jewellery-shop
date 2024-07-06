import './App.css';
import HomePage from './HomePage';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Auth/LoginPage';
import RegisterPage from './Auth/RegisterPage';
import ContactUs from './ContactUs';
import Cart from './Cart';
import Wishlist from './Wishlist';
import Admin from './admin/Index';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import ErrorPage from './ErrorPage';

function App() {
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
