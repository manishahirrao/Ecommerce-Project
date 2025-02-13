import React, { useContext, useEffect, useState } from "react";
import Title from "./Title.jsx";
import { products } from "../assets/frontend_assets/assets";
import Product_Item from "./Product_Items.jsx";

const RelatedProducts = ({ category, subcategory }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productscopy = products.slice();
      productscopy = productscopy.filter((item) => category === item.category);
      productscopy = productscopy.filter(
        (item) => subcategory === item.subcategory
      );
      setRelated(productscopy.slice(0, 5));
    }
  }, [products]);

  return (
    <>
      <div className="flex items-center justify-center flex-col py-12 ">
        <Title text1={"Related"} text2={"Products"} />
        <div className="flex items-center justify-between my-5 gap-4 ">
          {related.map((item, index) => (
            <Product_Item
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
