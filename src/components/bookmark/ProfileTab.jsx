import React, { useState } from "react";
import moment from "moment";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { MdOutlineModeComment } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa6";

const ProfileTab = (props) => {
  const { ProfileTabData } = props;
  return (
    <div className="w-full">
      <div>
        <hr />
        {ProfileTabData.map((post, index) => (
          <div
            key={index}
            className="p-3 bg-white rounded-xl mb-3 w-full scrollbar-hide "
          >
            <div className="flex">
              <img
                className="w-12 h-12 rounded-full p-0 object-cover text-orange-500"
                src={post.img_url}
                alt="User Avatar"
              />
              <div className="flex flex-col ml-2">
                <span className="text-lg font-bold text-gray-600">
                  {post.name}
                </span>
                <div className="flex space-x-3">
                  @{post.username}
                  <span
                    className={`text-sm flex items-center ml-2 ${
                      post.type === "job_seeker"
                        ? "text-black"
                        : "text-orange-500"
                    }`}
                  >
                    {post.type} <IoIosCheckmarkCircle className="ml-1" />
                  </span>
                </div>
              </div>
              <div className="flex justify-end text-xs flex-col ml-auto relative">
                <Menu>
                  <MenuButton>
                    <BsThreeDots className="text-3xl ml-auto cursor-pointer" />
                  </MenuButton>
                  <Transition
                    enter="transition ease-out duration-75"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <MenuItems
                      anchor="bottom end"
                      className="w-auto origin-top-right rounded-xl border border-black/30 bg-white p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none shadow-md"
                    >
                      <MenuItem>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-black/30 text-white"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            Pin to the Top
                          </button>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-black/30 text-white"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            Block User
                          </button>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-black/30 text-white"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            Report User
                          </button>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-black/30 text-white"
                                : "text-gray-900"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            Delete Chat
                          </button>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
                {/* {moment(post.time).format("h:mm:ss a")} */}
              </div>
            </div>

            <div className="flex px-3 w-full mt-3 ml-3  ">
              <FaBookmark className=" text-2xl ml-auto flex mb-3 " />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileTab;
