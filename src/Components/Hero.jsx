import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";

function Hero() {
  return (
    <>
      <div className="mt-8 border-[1px] border-black rounded  md:flex  justify-between items-center">
        {/* hero leftsection */}
        <div className="flex flex-col justify-center items-center md:ml-40 ml-20 md:gap-3 gap-1 ">
          <div className="flex justify-center items-center gap-2 pr-10">
            <hr className="h-[3px] bg-black md:w-18 w-10" />
            <p className="md:text-2xl  ">OUR BESTSELLERS</p>
          </div>
          <div className=" prata-regular flex justify-center items-center md:mt-2 ">
            <p className="md:text-5xl text-4xl font-semibold">
              Latest Arrivals
            </p>
          </div>
          <div className="flex justify-center items-center gap-2 md:pr-24 pr-26">
            <p className="md:text-2xl  ">SHOP NOW</p>
            <hr className="h-[3px] md:mt-2 bg-black md:w-20 w-8" />
          </div>
        </div>
        {/* hero right section */}
        <div className="">
          <img className="w-[650px] " src={assets.hero_img} />{" "}
        </div>
      </div>
    </>
  );
}

export default Hero;
