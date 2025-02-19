import React, { useContext } from "react";
import Title from "../Components/Title.jsx";
import Carttotal from "../Components/Carttotal.jsx";
import { assets } from "../assets/frontend_assets/assets.js";
import { ShopContext } from "../Context/ShopContext.jsx";

const PlaceOrder = () => {
  const { navigate } = useContext(ShopContext);
  return (
    <div className="mt-16 flex items-center justify-between">
      {/* left part */}
      <div className="">
        <Title text1={"Delivery"} text2={"Information"} />
        <div className="py-4 flex items-center gap-4">
          <input
            className="border rounded p-2 w-[250px]"
            type="text"
            placeholder="Firstname"
          />
          <input
            className="border rounded p-2 w-[250px] "
            type="text"
            placeholder="Lastname"
          />
        </div>
        <div className="">
          <input
            className=" border rounded p-2  w-full"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="pt-4">
          <input
            className=" border rounded p-2 w-full"
            type="text"
            placeholder="Street"
          />
        </div>
        <div className="pt-4 flex items-center gap-4">
          <input
            className=" border rounded p-2 w-[250px]"
            type="text"
            placeholder="City"
          />
          <input
            className=" border rounded p-2 w-[250px]"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="pt-4 flex items-center gap-4">
          <input
            className=" border rounded p-2 w-[250px]"
            type="number"
            placeholder="Zipcode"
          />
          <input
            className=" border rounded p-2 w-[250px]"
            type="text"
            placeholder="Country"
          />
        </div>
        <div className="pt-4 ">
          <input
            className=" border rounded p-2 w-full"
            type="number"
            placeholder="Phone"
          />
        </div>
      </div>
      {/* right part */}
      <div className="flex flex-col items-start ">
        <Carttotal />
        <div className="my-5">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2  px-6 py-1">
            <p className="rounded-full border w-3 h-3 "></p>
            <img className="w-[60px]" src={assets.stripe_logo} />
          </div>
          <div className="flex items-center gap-2  px-6 py-1">
            <p className="rounded-full border w-3 h-3 "></p>
            <img className="w-[80px]" src={assets.razorpay_logo} />
          </div>
          <div className="flex items-center gap-2  px-6 py-1">
            <p className="rounded-full border w-3 h-3 "></p>
            <p>CASH ON DELIVERY</p>
          </div>
        </div>
        <div className=" hover:bg-gray-700 rounded-sm mt-4 bg-black text-white px-5 py-2">
          <button
            onClick={() => navigate("./Order")}
            className=" cursor-pointer "
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
