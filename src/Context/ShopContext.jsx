import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import React from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setsearch] = useState("");
  const [showsearch, setshowsearch] = useState(false);
  const [cartitem, setcartitem] = useState([]);

  const addtocart = async (itemId, size) => {
    if (!size) {
      toast.error("Selct Product Size");
      return;
    }
    let cartdata = structuredClone(cartitem);
    if (cartdata[itemId]) {
      if (cartdata[itemId][size]) {
        cartdata[itemId][size] += 1;
      } else {
        cartdata[itemId][size] = 1;
      }
    } else {
      cartdata[itemId] = {};
      cartdata[itemId][size] = 1;
    }
    setcartitem(cartdata);
  };

  const updatequantity = async (itemId, size, quantity) => {
    let cartdata = structuredClone(cartitem);
    cartdata[itemId][size] = quantity;
    setcartitem(cartdata);
  };

  const getcartcount = () => {
    let totalcount = 0;
    for (const items in cartitem) {
      for (const item in cartitem[items]) {
        try {
          if (cartitem[items][item] > 0) {
            totalcount += cartitem[items][item];
          }
        } catch (error) {}
      }
    }
    return totalcount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setsearch,
    showsearch,
    setshowsearch,
    cartitem,
    addtocart,
    getcartcount,
    updatequantity,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
