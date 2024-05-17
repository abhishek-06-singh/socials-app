import React, { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import OtpInput from "react-otp-input";
import LeftAlignedAuthFormHeading from "../components/mini-components/LeftAlignedAuthFormHeading";
import { useNavigate } from "react-router-dom";

const OtpScreen = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center w-full h-screen overflow-y-auto bg-[#f9f6f6]">
      <div className="bg-white lg:w-4/12 md:w-8/12 w-11/12 rounded-[2rem] p-10 shadow-xl flex text-center flex-col mt-10 overflow-y-auto scrollbar-hide max-h-[90%]">
        <div className="flex w-full">
          <IoArrowBackCircleOutline
            className="text-3xl text-black justify-start items-start text-left cursor-pointer hover:scale-110"
            onClick={() => navigate("/login")}
          />
        </div>
        <LeftAlignedAuthFormHeading text={"Verification Code"} />

        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span></span>}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                width: "4rem",
                height: "4rem",
                margin: "0 1.5rem",
                fontSize: "1.5rem",
                borderRadius: "0.5rem",
                border: "1px solid #ccc",
                textAlign: "center",
              }}
            />
          )}
          containerStyle="p-5 flex justify-center"
        />

        <button className="bg-[#404041] p-3 rounded-full mb-2 mt-3 text-white ">
          Verify
        </button>

        <span className="rounded-full mb-2 mt-3 text-orange-500 cursor-pointer">
          Resend Code
        </span>
      </div>
    </div>
  );
};

export default OtpScreen;
