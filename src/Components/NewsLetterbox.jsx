import React from "react";

function NewsLetterbox() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col  items-center mt-24 ">
      <p className="md:text-3xl font-semibold md:pl-26 ">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-600 mt-2 sm:pl-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem atque
        voluptas m,njkcdbcj njkdvnjk
      </p>
      <form
        onSubmit={() => {
          submitHandler;
        }}
        className="flex items-center gap-0.5 md:w-[500px] md:mt-12 mt-8 md:pl-20"
      >
        <input
          className="border-1 border-b-black p-2 md:w-[900px] "
          type="email"
          placeholder="Enter your email"
          required
        />
        <button className="bg-red-600 rounded p-2 md:text-xl cursor-pointer ">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLetterbox;
