import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Footer() {
  return (
    <div className="flex  justify-between gap-16 mt-26 ">
      <div className="flex flex-col w-[500px]">
        <div className="flex items-center">
          <img className="h-8 w-8" src={assets.l} />
          <img className="h-10 w-18" src={assets.k} />
        </div>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eaque,
          tempora laudantium et laborum iusto cupiditate doloremque repudiandae
          maxime non quod labore omnis vero velit aut minus! Asperiores, ipsam
          autem?
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-semibold text-2xl">Company</span>
        <ul className="font-light ">
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>

      <div className="flex flex-col  ">
        <span className="font-semibold text-2xl ">GET IN TOUCH</span>
        <span className="flex flex-col pt-4">
          <p className="">+1-212-456-7890</p>
          <p>contact@ecommerce.com</p>
        </span>
      </div>
    </div>
  );
}

export default Footer;
