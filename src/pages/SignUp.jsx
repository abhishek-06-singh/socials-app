import React from "react";

import AuthFormHeading from "../components/mini-components/AuthFormHeading";
import RememberMeCheckbox from "../components/mini-components/RememberMeCheckbox";
import WelcomeBack from "../components/mini-components/WelcomeBack";
import SocialLogin from "../components/mini-components/SocialLogin";
import RadioRole from "../components/mini-components/RadioRole";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import LeftAlignedAuthFormHeading from "../components/mini-components/LeftAlignedAuthFormHeading";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-full h-screen overflow-hidden bg-[#f9f6f6]">
      <div className="bg-white lg:w-4/12 md:w-8/12 w-11/12 rounded-[2rem] p-10 shadow-xl flex text-center flex-col mt-10 overflow-y-auto scrollbar-hide max-h-[90%]">
        <div className="flex w-full">
          <IoArrowBackCircleOutline
            className="text-3xl text-black  justify-start items-start text-left cursor-pointer hover:scale-110"
            onClick={() => navigate("/login")}
          />
        </div>
        <LeftAlignedAuthFormHeading text={"Welcome Back"} />
        <div className="flex lg:flex-row md:flex-col space-x-3 w-full">
          <input
            type="text"
            className="bg-[#F2F2F2] p-3 rounded-full mb-2 border-2 border-[#818181] outline-none mt-2 w-full"
            placeholder="First Name"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-[#F2F2F2] p-3 rounded-full mb-2 border-2 border-[#818181] outline-none mt-2 w-full"
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          className="bg-[#F2F2F2] p-3 rounded-full mb-2 border-2 border-[#818181] outline-none mt-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-[#F2F2F2] p-3 rounded-full mb-2 border-2 border-[#818181] outline-none mt-2 w-full"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="bg-[#F2F2F2] p-3 rounded-full mb-2 border-2 border-[#818181] outline-none mt-2 w-full"
        />
        <RadioRole />
        <button className="bg-[#404041] p-3 rounded-full mb-2 mt-3 text-white">
          Signup
        </button>
        <p className="p-5 text-center text-xs">
          Your First 6 Months Of Boca En Boca Is Free. After The Free Trial,
          Your Subscription To Boca En Boca Is Only $6.99 Per Year.
        </p>
        <WelcomeBack />
        <SocialLogin />
      </div>
    </div>
  );
};

export default SignUp;
