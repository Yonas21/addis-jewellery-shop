// src/admin/Index.js
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard'; 
import HomePage from './HomePage'; 
import Orders from './Orders'; 
import CheckoutInfo from './CheckoutInfo'; 
import AddProduct from './product/Add'; 
import Products from './product/Index'; 
import UpdateProduct from './product/Update'; 

const Admin = () => {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route path='/dashboard' element={<HomePage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkoutInfo" element={<CheckoutInfo />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/update-product" element={<UpdateProduct />} />
      </Route>
    </Routes>
  );
};

export default Admin;
