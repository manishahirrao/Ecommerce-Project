import React, { useState } from "react";

const Login = () => {
  const [currstate, setcurrstate] = useState("Sign Up");
  const onsubmithandler = async (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={onsubmithandler}
        className="flex items-center justify-center mt-20"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold">{currstate}</p>
            <hr className="border-none h-1 bg-black" />
          </div>
          <div className="flex flex-col gap-4  items-center">
            {currstate === "Login" ? (
              ""
            ) : (
              <input
                className="w-3/2 border px-2 py-1 rounded border-black"
                type="text "
                required
                placeholder="Name"
              />
            )}
            <input
              className="w-3/2 border px-2 py-1 rounded border-black"
              type="email "
              required
              placeholder="Email"
            />
            <input
              className="w-3/2 border px-2 py-1 rounded border-black"
              type="password"
              required
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between font-semibold ">
            <p className="cursor-pointer">Forget Password?</p>

            {currstate === "Login" ? (
              <p
                onClick={() => setcurrstate("Sign Up")}
                className="cursor-pointer"
              >
                Create Account
              </p>
            ) : (
              <p
                onClick={() => setcurrstate("Login")}
                className="cursor-pointer"
              >
                Login
              </p>
            )}
          </div>
          <button className="bg-black text-white px-3 py-1.5 cursor-pointer hover:bg-gray-700 ">
            {currstate === "Login" ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
