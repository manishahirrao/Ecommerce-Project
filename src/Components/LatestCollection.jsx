import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import Product_Items from "./Product_Items";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestproducts, setlatestproducts] = useState([]);

  useEffect(() => {
    setlatestproducts(products.slice(0, 10));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 md:mt-12 mt-6">
      <Title text1={"LATEST"} text2={"COLLECTION"} />
      <p className="md:w-3/4 w-full md:p-0 px-1 md:font-extralight font-light md:text-[20px] text-[10px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
        maiores quia modi quo distinctio officiis exercitationem quis ratione
      </p>

      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5 ">
        {latestproducts.map((item, index) => (
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

export default LatestCollection;
