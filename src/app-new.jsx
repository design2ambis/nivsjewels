import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Index from "../pages/index";
import About from "../pages/about";
import Contact from "../pages/contact";
import Wishlist from "../pages/wishlist";
import Checkout from "../pages/checkout";
import Product from "../pages/product";
import Productdetails from "../pages/productdetails";
import Cart from "../pages/cart";
import Login from "../pages/login";
import Forgotpass from "../pages/forgotpass";
import Myaccount from "../pages/myaccount";
import Notfound404 from "../pages/404";
import Orderdetail from "../pages/order-detail";


const Nivs = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
               
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/shop/:cat/:subcat/:page" element={<Product/>} />
        <Route path="/product/:prono" element={<Productdetails/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgot" element={<Forgotpass/>} />
        <Route path="/myaccount" element={<Myaccount/>} />       
        <Route path="/order-detail/:orderId" element={<Orderdetail/>} />       
        

        <Route path="*" element={<Notfound404 />} /> Fallback route for 404
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Nivs;
