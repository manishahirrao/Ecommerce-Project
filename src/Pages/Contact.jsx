import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/frontend_assets/assets";

function Contact() {
  return (
    <>
      <div className="flex flex-col items-center mt-12">
        <Title text1={"CONTACT"} text2={"US"} />
        <div className="mt-6 flex items-center justify-between gap-10">
          <img className="w-[400px]" src={assets.contact_img} />
          <div className="flex  gap-5 flex-col">
            <p className="text-2xl font-bold">Our Store</p>
            <div>
              <p>54709 William Station </p>
              <p>Suite 350,Washington,USA</p>
            </div>
            <div>
              <p>Tel:(415)555-0132</p>
              <p>Email: admin@forever.com</p>
            </div>
            <p className="text-2xl font-bold">Careers at Forever</p>
            <p>Learn more about our teams and job opening.</p>
            <div>
              <button className="text-xl px-5 py-2 border-2 border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-500 rounded">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
