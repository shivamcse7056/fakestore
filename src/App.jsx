// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BannerCarousel from "./components/BannerCarousel";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import Cart from "./components/Cart"; 
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <BannerCarousel />
            <ProductList />

          </>
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
