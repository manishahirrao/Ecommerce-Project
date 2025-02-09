import React from "react";
import { assets } from "../assets/frontend_assets/assets";

function OurPolicy() {
  return (
    <div className="flex items-center justify-between md:px-16  md:pt-32 pt-8 gap-7 flex-col md:flex-row ">
      <div className="flex flex-col justify-evenly items-center ">
        <img className="md:pb-3 pb-1 w-12" src={assets.exchange_icon} />
        <span className="font-bold md:text-xl">Easy Exchange Policy</span>
        <p className="md:text-xl  font-light">
          We offer hassle free exchange policy
        </p>
      </div>

      <div className="flex flex-col justify-evenly items-center">
        <img className="md:pb-3 pb-1 w-12" src={assets.quality_icon} />
        <span className="font-bold md:text-xl">7 Days Return Policy</span>
        <p className="md:text-xl  font-light">
          We provide 7 days free return policy
        </p>
      </div>

      <div className="flex flex-col justify-evenly items-center">
        <img className="md:pb-3 pb-1 w-12" src={assets.support_img} />
        <span className="font-bold md:text-xl">Best cutomer support</span>
        <p className="md:text-xl  font-light">
          We provide 24/7 customer support
        </p>
      </div>
    </div>
  );
}

export default OurPolicy;
