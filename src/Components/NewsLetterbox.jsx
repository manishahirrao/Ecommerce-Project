import React from "react";

function NewsLetterbox() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col gap-3 items-center mt-20 ">
      <p className="text-3xl font-semibold pl-26">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-600 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem atque
        voluptas m,njkcdbcj njkdvnjk
      </p>
      <form
        onSubmit={() => {
          submitHandler;
        }}
        className="flex items-center  w-[500px] mt-2 pl-20"
      >
        <input
          className="border-1 border-b-black p-2 w-[900px] "
          type="email"
          placeholder="Enter your email"
          required
        />
        <button className="bg-red-800 rounded p-2  cursor-pointer">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLetterbox;
