import React from "react";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const Searchbar = () => {
  const { search, setsearch, showsearch, setshowsearch } =
    useContext(ShopContext);
  const [show, setshow] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("Collection")) {
      setshow(true);
    } else {
      setshow(false);
    }
  }, [location]);
  return showsearch && show ? (
    <div className="   text-center rounded-full">
      <div className="inline-flex items-center justify-center border border-gray-700 px-5 py-2 my-5 mx-3 rounded-full md:w-1/2 w-3/4">
        <input
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          className=" flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search items"
        />
        <img
          onClick={() => {
            setshowsearch(!showsearch);
            setsearch("");
          }}
          className="text-xl cursor-pointer"
          src={assets.cross_icon}
        />{" "}
      </div>
    </div>
  ) : null;
};

export default Searchbar;
