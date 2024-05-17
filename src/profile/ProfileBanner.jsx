import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { LuShare } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import lady from "../assets/lady.jpg";
const profile = {
  name: "Rihanna Cooper",
  email: "ricardo.cooper@example.com",
  avatar:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  backgroundImage:
    "https://images.pexels.com/photos/133633/pexels-photo-133633.jpeg?auto=compress&cs=tinysrgb&w=600",
  fields: [
    ["Phone", "(555) 123-4567"],
    ["Email", "ricardocooper@example.com"],
    ["Title", "Senior Front-End Developer"],
    ["Team", "Product Development"],
    ["Location", "San Francisco"],
    ["Sits", "Oasis, 4th floor"],
    ["Salary", "$145,000"],
    ["Birthday", "June 8, 1990"],
  ],
};

const ProfileBanner = () => {
  return (
    <div className="mb-2">
      <div className="relative">
        <img
          className="h-32 w-full object-cover lg:h-48"
          src={profile.backgroundImage}
          alt=""
        />
        <div className="absolute bg-gray-500 p-2 rounded-full bottom-5 right-10 shadow-md cursor-pointer hover:scale-105 hover:bg-orange-400">
          <FaRegEdit className="text-xl text-gray-50" />
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex relative">
            <img
              className=" rounded-full ring-4 ring-white h-32 w-32 object-cover "
              src={lady}
              alt=""
            />
            <div className="absolute bg-white p-2 rounded-full bottom-0 right-0 shadow-md cursor-pointer hover:scale-105 hover:bg-gray-100 hidden lg:block">
              <FaRegEdit className="text-xl text-orange-500" />
            </div>
          </div>
        </div>
        <div className="mt-3  min-w-0 flex-1 ">
          <h1 className="truncate text-2xl font-bold text-gray-900">
            {profile.name}
          </h1>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-600">@gman.george....</span>
          <span className="text-sm text-gray-900 font-bold flex items-center ml-2">
            Job Seeker <FaCheckCircle className="ml-2" />
          </span>

          <div className="ml-auto">
            <LuShare className="text-3xl " />
          </div>
        </div>
        <div className="flex flex-col space-y-3 mt-3">
          <div className="flex font-bold ">14 Posts 2 Bookmarks</div>
          <div className="flex ">
            <CiLocationOn className="text-xl mr-2" />
            City, State, Country
          </div>
          <div className="flex ">
            <IoPersonOutline className="text-xl mr-2" />
            About Me
          </div>
          <p className="mx-7">
            I am a Designer based in New york with an experience of 2 years
            .....
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
