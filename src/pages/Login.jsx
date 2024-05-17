import React from "react";
import { Link } from "react-router-dom";
import AuthFormHeading from "../components/mini-components/AuthFormHeading";
import RememberMeCheckbox from "../components/mini-components/RememberMeCheckbox";
import WelcomeBack from "../components/mini-components/WelcomeBack";
import SocialLogin from "../components/mini-components/SocialLogin";
const Login = () => {
  return (
    <div className=" flex justify-center items-center w-full h-screen  overflow-y-auto bg-[#f9f6f6]">
      <div className="bg-white lg:h-[40rem] md:h-screen h-screen lg:w-4/12 md:w-full w-full rounded-[2rem] p-10 lg:p-10 md:p-20 shadow-xl flex  text-center flex-col ">
        <AuthFormHeading />

        <input
          type="text"
          className="bg-[#F2F2F2] p-3 rounded-full mb-2 border-2 border-[#818181] outline-none mt-3 "
          placeholder="Email, Phone Number, Or User Name"
        />
        <input
          type="text"
          placeholder="Enter Password"
          className="bg-[#F2F2F2] p-3 rounded-full mb-2 border-2 border-[#818181] outline-none mt-3 "
        />
        <div className="flex w-full">
          <RememberMeCheckbox />
          <div className="text-sm text-orange-500 ml-auto items-center text-center p-2 mt-1">
            Forget Password
          </div>
        </div>

        <button className="bg-[#404041] p-3 rounded-full mb-2  mt-3 text-white ">
          Login
        </button>
        <WelcomeBack />
        <SocialLogin />
        <span className="flex mx-auto text-[#818181] text-sm mt-2">
          {" "}
          Don’t Have An Account?
        </span>

        <Link
          className="bg-[#404041] p-3 rounded-full mb-2  mt-3 text-white  "
          to={"/signup"}
        >
          Sign Up for Free
        </Link>
      </div>
    </div>
  );
};

export default Login;
