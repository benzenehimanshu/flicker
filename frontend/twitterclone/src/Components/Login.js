import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const loginSignUpHandler = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[80%]">
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"></img>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-7xl mb-5">Happening now</h1>
          </div>
          <h1 className="font-bold text-4xl ">Join today.</h1>
          <h1 className="font-bold text-2xl ">
            {isLogin ? "Login" : "Sign up"}
          </h1>
          <form className="flex flex-col w-[50%]">
            {!isLogin && (
              <>
                <input
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1"
                  type="text"
                  placeholder="Name"
                ></input>
                <input
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1"
                  type="text"
                  placeholder="Username"
                ></input>
              </>
            )}

            <input
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1"
              type="text"
              placeholder="Email"
            ></input>
            <input
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1"
              type="text"
              placeholder="Password"
            ></input>
            <button className="border-none bg-[#1DA1F2] py-2 rounded-full text-white my-3 ">
              {isLogin ? "Login" : "Create Account"}
            </button>
            <h1>
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span
                className="text-blue-600 font-bold"
                onClick={loginSignUpHandler}
              >
                {isLogin ? "Register" : "Login"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
