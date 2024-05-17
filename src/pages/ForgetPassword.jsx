import React from "react";

import AuthFormHeading from "../components/mini-components/AuthFormHeading";
import RememberMeCheckbox from "../components/mini-components/RememberMeCheckbox";
import WelcomeBack from "../components/mini-components/WelcomeBack";
import SocialLogin from "../components/mini-components/SocialLogin";
import RadioRole from "../components/mini-components/RadioRole";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import LeftAlignedAuthFormHeading from "../components/mini-components/LeftAlignedAuthFormHeading";
import { useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen overflow-y-auto bg-[#f9f6f6]">
      <div className="bg-white lg:w-4/12 md:w-8/12 w-11/12 rounded-[2rem] p-10 shadow-xl flex text-center flex-col mt-10 overflow-y-auto scrollbar-hide max-h-[90%]">
        <div className="flex w-full">
          <IoArrowBackCircleOutline
            className="text-3xl text-black  justify-start items-start text-left cursor-pointer hover:scale-110"
            onClick={() => navigate("/login")}
          />
        </div>
        <div className="">
          <LeftAlignedAuthFormHeading text={"Forget Password"} />
        </div>

        <input
          type="text"
          className="bg-[#F2F2F2] p-3 rounded-full mb-2 border-2 border-[#818181] outline-none mt-5 "
          placeholder="Email, Phone Number, Or User Name"
        />

        <button className="bg-[#404041] p-3 rounded-full mb-2 mt-3 text-white">
          Continue
        </button>
        <p className="p-5 text-center text-xs text-orange-500">
          Please check the email or phone number associated with your account. A
          link to reset your password was sent.
        </p>

        <p className="px-10 text-center text-xs text-orange-500">
          The email or phone number you entered does not have a valid user
          account. Please return to the login screen to create an account.
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
