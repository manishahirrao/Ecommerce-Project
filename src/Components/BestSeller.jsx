import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useEffect } from "react";
import Title from "./Title";
import Product_Items from "./Product_Items";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);

    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 md:mt-12 mt-6">
      <Title text1={"BEST"} text2={"SELLERS"} />
      <p className="md:w-3/4 w-full md:p-0 px-1 md:font-extralight font-light md:text-[20px] text-[10px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
        maiores quia modi quo distinctio officiis exercitationem quis ratione
      </p>

      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5">
        {bestSeller.map((item, index) => (
          <Product_Items
            key={index}
            image={item.image}
            id={item._id}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
