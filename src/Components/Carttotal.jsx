import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import { products } from "../assets/frontend_assets/assets";

const Carttotal = () => {
  const { currency, delivery_fee, getcartamount } = useContext(ShopContext);

  return (
    <>
      <div className="flex flex-col md:w-[500px] w-full ">
        <Title text1={"CART"} text2={"TOTALS"} />

        <div className="">
          <div className="flex  items-center justify-between p-2 ">
            <p>Subtotal</p>
            <p>
              {currency}
              {getcartamount()}.00
            </p>
          </div>
          <hr className="bg-gray-500 h-0.5" />

          <div className="flex  items-center justify-between p-2">
            <p>Shipping Fee</p>
            <p>
              {currency}
              {delivery_fee}.00
            </p>
          </div>
          <hr className="bg-gray-500 h-0.5" />

          <div className="flex  items-center justify-between p-2">
            <p className="font-bold">Total</p>
            <p>
              {currency}
              {getcartamount() === 0 ? 0 : getcartamount() + delivery_fee}.00
            </p>
          </div>
          <hr className="bg-gray-500 h-0.5" />
        </div>
      </div>
    </>
  );
};

export default Carttotal;
