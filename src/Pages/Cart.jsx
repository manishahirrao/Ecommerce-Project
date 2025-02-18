import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import Product_Items from "../Components/Product_Items";
import { assets } from "../assets/frontend_assets/assets.js";
import Carttotal from "../Components/Carttotal.jsx";

function Cart() {
  const { products, currency, cartitem, updatequantity, navigate } =
    useContext(ShopContext);
  const [cartdata, setcartdata] = useState([]);

  useEffect(() => {
    const tempdata = [];
    for (const items in cartitem) {
      for (const item in cartitem[items]) {
        if (cartitem[items][item] > 0) {
          tempdata.push({
            _id: items,
            size: item,
            quantity: cartitem[items][item],
          });
        }
      }
    }

    setcartdata(tempdata);
  }, [cartitem]);

  return (
    <div className="md:pt-22 pt-4">
      <div>
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div className="">
        {cartdata.map((item, index) => {
          const productdata = products.find(
            (products) => products._id === item._id
          );
          return (
            <div
              className="flex items-start  mt-3 shadow-sm shadow-gray-500  "
              key={index}
            >
              <div>
                <img
                  className="md:w-[100px] w-[80px]"
                  src={productdata.image[0]}
                />
              </div>
              <div className=" md:p-2  md:gap-3 w-full ">
                <div className="md:font-semibold  md:text-xl text-md flex items-center justify-start  ">
                  <p>{productdata.name}</p>
                </div>
                <div className="flex md:gap-[300px] gap-10 py-4  items-center ">
                  <p className="">
                    {currency}
                    {productdata.price}
                  </p>
                  <p className=""> {item.size}</p>
                  <input
                    className="md:w-[50px] w-[40px] border-1  border-gray-400"
                    type="number"
                    min={1}
                    onChange={(e) =>
                      e.target.value === " " || e.target.value === "0"
                        ? null
                        : updatequantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }
                    defaultValue={item.quantity}
                  />
                  <img
                    onClick={() => {
                      updatequantity(item._id, item.size, 0);
                    }}
                    className="w-[20px] cursor-pointer md:ml-15 ml-12"
                    src={assets.bin_icon}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CART TOTAL */}
      <div className="flex  md:justify-end mt-6 ">
        <div>
          <Carttotal />

          <div className="bg-black text-white mt-4 text-center py-2 hover:bg-gray-500 hover:text-black w-[300px] rounded">
            <button
              onClick={() => navigate("/place-order")}
              className="text-2xl font-bold cursor-pointer "
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
