import React from "react";
import WelcomeBack from "./WelcomeBack";
import logo from "../../assets/newlogo.png";
const AuthFormHeading = () => {
  return (
    <div>
      <h1 className="text-[#818181] text-2xl "> Welcome to</h1>
      <img
        src={logo}
        alt="logo"
        className="lg:w-3/5 md:w-1/2 sm:w-full mx-auto mt-5"
      />
      <div className="flex space-x-2 mt-2 justify-center items-center">
        <div className="h-[0.05rem] w-1/3 bg-[#818181]"></div>
        <div className="text-[#818181] text-sm">Welcome Back</div>
        <div className="h-[0.05rem] w-1/3 bg-[#818181]"></div>
      </div>
    </div>
  );
};

export default AuthFormHeading;
