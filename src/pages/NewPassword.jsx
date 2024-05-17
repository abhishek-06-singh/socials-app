import React from "react";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import LeftAlignedAuthFormHeading from "../components/mini-components/LeftAlignedAuthFormHeading";
import { useNavigate } from "react-router-dom";
const NewPassword = () => {
  const navigate = useNavigate();
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
          placeholder="Enter new password"
        />
        <input
          type="text"
          className="bg-[#F2F2F2] p-3 rounded-full mb-2 border-2 border-[#818181] outline-none mt-5 "
          placeholder="Confirm new password"
        />
        <button className="bg-[#404041] p-3 rounded-full mb-2 mt-3 text-white">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default NewPassword;
