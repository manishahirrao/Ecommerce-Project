import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className=" px-4 sm:px-[5vw] lg:px-[7vw] md:px-[9vw]  ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        {/* <Route path="/Product/Product-id" element={<Product_Items />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
