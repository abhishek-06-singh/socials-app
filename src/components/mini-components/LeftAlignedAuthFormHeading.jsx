import React from "react";
import logo from "../../assets/newlogo.png";

const LeftAlignedAuthFormHeading = ({ text }) => {
  return (
    <div className="text-left">
      <h1 className="text-[#818181] text-2xl ml-2 mt-1">Welcome to</h1>
      <div className="flex items-center mt-2">
        <img
          src={logo}
          alt="logo"
          className="lg:w-3/5 md:w-1/2 sm:w-1/2 w-1/2 ml-2"
        />
      </div>
      <div className="flex space-x-2 mt-4 items-center">
        <div className="h-[0.05rem] w-1/3 bg-[#818181]"></div>
        <div className="text-[#818181] text-sm">{text}</div>
        <div className="h-[0.05rem] w-1/3 bg-[#818181]"></div>
      </div>
    </div>
  );
};

export default LeftAlignedAuthFormHeading;
