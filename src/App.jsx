import './App.css'
import HomePage from './HomePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './ErrorPage';
import LoginPage from './Auth/LoginPage';
import RegisterPage from './Auth/RegisterPage';
import ContactUs from './ContactUs';
import Cart from './Cart';
import Wishlist from './Wishlist';
// import Contact from './Contact';
// import Cart from './Cart';
// import Checkout from './Checkout';
// import Shop from './Shop';
// import ShopDetails from './ShopDetails';
// import Testimonial from './Testimonial';
// import ErrorPage from './Error';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route index element = {<HomePage />} />
        {/* <Route path='/contact' element = {<Contact />}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/testimonial' element={<Testimonial />} />*/}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/signup' element={<RegisterPage />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path="/*" element={<ErrorPage />} /> 
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App