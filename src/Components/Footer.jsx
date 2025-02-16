import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function Footer() {
  return (
    <>
      <div className="flex  justify-between md:gap-24 gap-6   mt-16 md:flex-row flex-col ">
        <div className="flex flex-col ">
          <div className="flex items-center">
            <img className="md:h-8 h-6 w-8" src={assets.l} />
            <img className="md:h-10 h-6 w-18" src={assets.k} />
          </div>
          <p className="pt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eaque,
            tempora laudantium et laborum iusto cupiditate doloremque Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Harum reiciendis
            alias nostrum, culpa sequi maxime consequuntur iure ducimus dolores
            voluptates vero velit aut sit consequatur commodi eveniet? Quod, cum
            at?
          </p>
        </div>

        <div className="flex flex-col md:gap-4 gap-2">
          <span className="font-semibold md:text-2xl ">Company</span>
          <ul className="font-light ">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="flex flex-col  ">
          <span className="font-semibold md:text-xl ">GET IN TOUCH</span>
          <span className="flex flex-col md:pt-4 pt-2  ">
            <p>+1-212-456-7890</p>
            <p>contact@ecommerce.com</p>
          </span>
        </div>
      </div>

      <hr className=" bg-gray-600 w-full md:mt-12 mt-4" />
      <p className="flex flex-col items-center md:pt-2 pt-1  md:pb-1 font-light ">
        Copyright 2024 &copy; Ecommerce.com. All rights Reserved
      </p>
    </>
  );
}

export default Footer;
