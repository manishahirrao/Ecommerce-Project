import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import { ToastContainer, toast } from "react-toastify";

import PlaceOrder from "./Pages/PlaceOrder";
import Order from "./Pages/Order";
import Login from "./Pages/Login";

function App() {
  return (
    <div className=" px-4 sm:px-[5vw] lg:px-[7vw] md:px-[9vw]  ">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
