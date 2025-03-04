import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { ShopContext } from "../Context/ShopContext.jsx";
import Title from "../Components/Title.jsx";
import Product_Items from "../Components/Product_Items.jsx";

const ProductFilter = () => {
  const { products, search, showsearch } = useContext(ShopContext);
  const [filter, setfilter] = useState(false);
  const [filterProduct, setfilterProduct] = useState([]);
  const [category, setcategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [sorttype, setsorttype] = useState("relevant");
  const [num, setnum] = useState();

  const toggle = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setcategory((prev) => [...prev, e.target.value]);
    }
  };

  const subtoggle = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setsubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyfilter = () => {
    let productcopy = products.slice();
    if (search && showsearch) {
      productcopy = productcopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productcopy = productcopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productcopy = productcopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setfilterProduct(productcopy);
  };

  const sortproduct = () => {
    let fpcopy = filterProduct.slice();
    switch (sorttype) {
      case "low-high":
        setfilterProduct(fpcopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setfilterProduct(fpcopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyfilter();
        break;
    }
  };

  const number = () => {
    setnum(num + 1);
  };

  const dropdown = () => {
    setfilter(!filter);
  };

  useEffect(() => {
    sortproduct();
  }, [sorttype]);

  useEffect(() => {
    applyfilter();
  }, [category, subCategory, search, showsearch]);

  return (
    <div className="md:mt-12 mt-2 flex flex-col md:flex-row md:gap-16 gap-3">
      <div>
        <p className="md:text-2xl md:font-bold font-semibold  md:py-8 text-xl flex items-center">
          FILTERS
          <img
            onClick={dropdown}
            className={`h-[16px] ml-1  sm:hidden ${filter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="Dropdown icon"
          />
        </p>

        {/* Categories */}
        <div
          className={`flex flex-col items-start border border-gray-700 md:w-[250px] w-full md:px-5 px-1 py-2 gap-1 ${
            filter ? "" : "hidden"
          } sm:block`}
        >
          <p className="md:text-xl font-semibold">Categories</p>
          <p>
            <input type="checkbox" onChange={toggle} value={"Men"} /> Men
          </p>
          <p>
            <input type="checkbox" onChange={toggle} value={"Women"} /> Women
          </p>
          <p>
            <input type="checkbox" onChange={toggle} value={"Kids"} /> Kid
          </p>
        </div>

        {/* Type */}
        <div
          className={`flex flex-col items-start border border-gray-700 md:w-[250px] w-full md:px-5 px-1 py-2 gap-1 md:mt-6 mt-2 ${
            filter ? "" : "hidden"
          } sm:block`}
        >
          <p className="md:text-xl font-semibold">Type</p>
          <p>
            <input type="checkbox" onChange={subtoggle} value={"Topwear"} />{" "}
            Topwear
          </p>
          <p>
            <input type="checkbox" onChange={subtoggle} value={"Bottomwear"} />{" "}
            Bottomwear
          </p>
          <p>
            <input type="checkbox" onChange={subtoggle} value={"Winterwear"} />{" "}
            Winterwear
          </p>
        </div>

        {/* Sorting */}
        <div
          className={`flex flex-col items-start border border-gray-700 md:w-[250px] w-full md:px-5 px-1 py-2 gap-1 md:mt-6 mt-2 ${
            filter ? "" : "hidden"
          } sm:hidden`}
        >
          <p className="md:text-xl font-semibold">Sort By</p>
          <select
            onChange={(e) => {
              setsorttype(e.target.value);
            }}
            className="border border-black md:p-2 w-1/2 md:w-auto md:text-xl"
          >
            <option value="relevant">Relevent</option>
            <option value="low-high">low to high</option>
            <option value="high-low">high to low</option>
          </select>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1">
        <div className="flex md:flex-row flex-col items-start justify-between md:mt-8 ">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product sort */}
          <select
            onChange={(e) => {
              setsorttype(e.target.value);
            }}
            className="border border-black p-2 w-full md:w-auto md:text-sm text-sm hidden sm:block"
          >
            <option value="relevant">Sort By : Relevent</option>
            <option value="low-high">Sort By : low to high</option>
            <option value="high-low">Sort By : high to low</option>
          </select>
        </div>

        {/* Map product */}
        <div
          onClick={() => {
            number();
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-4 py-6"
        >
          {filterProduct.map((item, index) => (
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
    </div>
  );
};

export default ProductFilter;
