import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div className="w-full h-auto flex justify-between items-center px-10 mt-2">
      <FaLinkedin className="text-4xl text-[#404041]" />
      <FaFacebookF className="text-4xl text-[#404041]" />
      <BsApple className="text-4xl text-[#404041]" />
      <FaGoogle className="text-4xl text-[#404041]" />
    </div>
  );
};

export default SocialLogin;
