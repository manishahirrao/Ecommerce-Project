import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="md:text-4xl text-3xl font-light">{text1}</span>
      <p className="md:text-4xl text-3xl font-semibold">{text2}</p>
      <p className="md:w-12 w-6 md:h-1 h-0.5 bg-gray-800"></p>
    </div>
  );
};

export default Title;
