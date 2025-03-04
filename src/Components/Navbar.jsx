import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext.jsx";
import { assets } from "../assets/frontend_assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import Searchbar from "./Searchbar.jsx";

function Navbar() {
  const [visible, setvisible] = useState(false);

  const { showsearch, setshowsearch, getcartcount, updatequantity } =
    useContext(ShopContext);

  return (
    <>
      <div className=" flex justify-between items-center py-2 font-medium ">
        <Link to={"./"}>
          <div className="flex  items-center justify-center">
            <img
              src={assets.l}
              className="md:w-22 md:h-20 w-12 h-12"
              alt="logo"
            />
            <img
              src={assets.k}
              className="md:w-22 md:h-20 w-16 h-12"
              alt="logo"
            />
          </div>
        </Link>
        <ul className="sm:flex  items-center  lg:gap-8 font-semibold  hidden text-xl md:text-2xl ">
          <NavLink to={"/"} className="flex flex-col items-center gap-1 ">
            <p>Home</p>
            <hr className="w-full border-none h-[3px] bg-black hidden " />
          </NavLink>

          <NavLink
            to={"/Collection"}
            className="flex flex-col items-center gap-1"
          >
            <p>Collection</p>
            <hr className="w-full border-none h-[3px] bg-black hidden " />
          </NavLink>

          <NavLink to={"/About"} className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className="w-full border-none h-[3px] bg-black hidden " />
          </NavLink>

          <NavLink to={"/Contact"} className="flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className="w-full border-none h-[3px] bg-black hidden " />
          </NavLink>
        </ul>

        <div className="flex items-center justify-between gap-2 pl-6 lg:gap-5">
          <IoSearch
            onClick={() => {
              setshowsearch(!showsearch);
            }}
            className="text-3xl cursor-pointer hover:text-gray-600"
          />
          <div className="group relative">
            <Link to={"/login"}>
              <MdAccountCircle className="text-3xl cursor-pointer hover:text-gray-600 " />
            </Link>
            <div className="group-hover:block hidden absolute dropdown-menu left-0 pt-2">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-gray-500 rounded">
                <p className="cursor-pointer  hover:text-black text-xl">
                  My Profile
                </p>
                <p className="cursor-pointer  hover:text-black text-xl">
                  Orders
                </p>
                <p className="cursor-pointer  hover:text-black text-xl">
                  Log Out
                </p>
              </div>
            </div>
          </div>
          <Link className="flex items-baseline relative" to={"./Cart"}>
            <div>
              <FaShoppingCart className="text-3xl cursor-pointer  hover:text-gray-600" />
            </div>
            <div className="    ">
              <sup className="ml-[-10px] absolute bg-black h-[22px] flex items-center justify-center rounded-full w-[22px] mt-[2px] text-white font-extrabold ">
                {getcartcount()}
              </sup>
            </div>
          </Link>
        </div>

        {/* mobile view */}
        <div
          onClick={() => {
            setvisible(!visible);
          }}
          className="text-3xl  md:hidden pr-2"
        >
          <BsFillMenuButtonWideFill />
        </div>
      </div>

      <Searchbar />
      <hr className="bg-gray-500 h-0.5 mt-2 shadow-sm shadow-gray-500" />

      {/* sidebar */}
      <div
        className={`fixed h-screen  bg-white transition-all top-0 z-20 text-black bottom-0 right-0 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex items-center gap-1 p-2">
          <div
            onClick={() => {
              setvisible(!visible);
            }}
            className="bg-gray-400 rounded-full flex justify-center items-center "
          >
            <FaArrowLeft className="text-2xl text-black m-2" />
          </div>
          <p className="text-black text-3xl font-semibold">Back</p>
        </div>

        <hr className="h-0.5 bg-gray-500 mt-2" />

        <div className="flex flex-col justify-between text-3xl mt-2 gap-1 ">
          <NavLink
            onClick={() => {
              visible ? <Home /> : "";
            }}
            className="shadow shadow-gray-400 pl-2  "
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              visible ? <About /> : "";
            }}
            className="shadow shadow-gray-400 pl-2  "
            to="/About"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => {
              visible ? <Collection /> : "";
            }}
            className="shadow shadow-gray-400 pl-2  "
            to="/Collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => {
              visible ? <Contact /> : "";
            }}
            className="shadow shadow-gray-400 pl-2  "
            to="/Contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
