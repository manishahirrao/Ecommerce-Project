import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../Components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addtocart } = useContext(ShopContext);
  const [productdata, setproductdata] = useState(false);
  const [image, setimage] = useState("");
  const [size, setsize] = useState("");

  const fetchproductdata = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setproductdata(item);
        setimage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchproductdata();
  }, [products]);

  return productdata ? (
    <>
      <div className="mt-20 flex gap-12 ">
        {/* Products image */}
        <div className="flex flex-col items-start gap-2 w-[120px]">
          {productdata.image.map((item, index) => (
            <img onClick={() => setimage(item)} src={item} key={index} />
          ))}
        </div>

        {/* prduct big image */}
        <div className="w-[40%]">
          <img className="h-auto w-full" src={image} />{" "}
        </div>

        {/* Product info */}
        <div className="flex gap-2 flex-col">
          <h1 className="text-2xl font-extrabold ">{productdata.name}</h1>
          <div className="flex gap-0.5">
            <img className="w-[30px]" src={assets.star_icon} />
            <img className="w-[30px]" src={assets.star_icon} />
            <img className="w-[30px]" src={assets.star_icon} />
            <img className="w-[30px]" src={assets.star_icon} />
            <img className="w-[30px]" src={assets.star_dull_icon} />
            <p className="font-sm pl-2 text-xl">(127)</p>
          </div>
          <p className="text-3xl font-bold mt-4">{currency}200</p>
          <p className="w-1/2">{productdata.description}</p>
          <p className="mt-2 font-semibold text-xl  mb-2">Select Size</p>
          <div className="flex gap-2  font-medium  ">
            {productdata.sizes.map((item, index) => (
              <button
                onClick={() => setsize(item)}
                className={`bg-gray-200 cursor-pointer px-4 py-2 ${
                  item === size ? "border-gray-400 border" : ""
                }`}
                key={index}
              >
                {item}
              </button>
            ))}
          </div>
          <div>
            <button
              onClick={() => {
                addtocart(productdata._id, size);
              }}
              className=" font-semibold mt-4 bg-black px-6 py-2  hover:bg-gray-700 cursor-pointer text-white"
            >
              ADD TO CART
            </button>
          </div>
          <hr className="bg-gray-300 mt-2" />
          <div className="flex flex-col">
            <p>100% Original product</p>
            <p>Cash on Delivery Available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      <div className=" mt-8 pl-20  shadow shadow-gray-300 ">
        <div className="flex items-center  text-2xl  cursor-pointer gap-6 border-b border-b-black">
          <b className="border-b-black border-b ">Description</b>
          <p>Reviews (122)</p>
        </div>
        <div className="mt-4 font-medium ">
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            perferendis delectus nesciunt, ab autem dolorem velit, doloremque
            labore iste consectetur iure repellendus. Ut, asperiores. Quos magni
            reiciendis autem officia nam.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            at odio tempora in nesciunt animi aspernatur placeat fugiat ea
            accusantium alias minima, temporibus voluptatum cum fuga modi,
            consequuntur maxime maiores.
          </p>
        </div>
      </div>

      {/* related products */}
      <RelatedProducts
        category={productdata.category}
        subcategory={productdata.subcategory}
      />
    </>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
