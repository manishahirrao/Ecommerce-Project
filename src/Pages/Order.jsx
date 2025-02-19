import React, { useContext } from "react";
import Title from "../Components/Title";
import { ShopContext } from "../Context/ShopContext";

const Order = () => {
  const { products, currency } = useContext(ShopContext);
  const product = products.slice(1, 5);
  return (
    <div className="mt-16 ">
      <Title text1={"MY"} text2={"ORDERS"} />
      <div className="mt-4">
        {product.map((item, index) => (
          <div className="flex items-center gap-1 w-full  " key={index}>
            <img className="h-15 " src={item.image[0]} />

            <div className="flex items-center justify-end gap-10 ">
              <div className="flex flex-col items-start ">
                <p>{item.name}</p>
                <div className="flex items-center gap-2">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity:1</p>
                  <p>Size:M</p>
                </div>
                <p className="text-sm font-light">DATE:25</p>
              </div>
              <div className="flex items-center gap-0.5">
                <p className="w-2 h-2 rounded-full bg-green-700"></p>
                <p>Ready to ship</p>
              </div>
              <button>Track</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
