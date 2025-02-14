import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

function Cart() {
  const { products, currency, cartitem } = useContext(ShopContext);
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

  return <div>Cart</div>;
}

export default Cart;
