import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../pages/home";
import Shop from "../pages/shop";


const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>        
      <Route path="/" element={<Home />} />
      <Route path="/shop/:cat/:subcat/:page" element={<Shop/>} />
      <Route path="/shop/:cat/:subcat/:page" element={<Shop/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App;

