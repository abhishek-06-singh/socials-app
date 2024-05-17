import React, { useState } from "react";
import moment from "moment";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { IoCameraOutline } from "react-icons/io5";
import { ImAttachment } from "react-icons/im";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { MdOutlineModeComment } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import SearchMessage from "./SearchMessage";
import SingleChat from "./SingleChat";
import { IoIosSend } from "react-icons/io";

const ChatComponent = (props) => {
  const { chatData } = props;
  return (
    <div className="w-full">
      <div>
        <SearchMessage />
        <hr />
        {chatData.map((post, index) => (
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
                <span
                  className={`text-sm flex items-center ${
                    post.type === "job_seeker"
                      ? "text-black"
                      : "text-orange-500"
                  }`}
                >
                  {post.type} <IoIosCheckmarkCircle className="ml-1" />
                </span>
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
                {moment(post.time).format("h:mm:ss a")}
              </div>
            </div>

            <div className="mt-3 ml-14 mb-3">{post.message}</div>

            <hr />
          </div>
        ))}
      </div>
      <SingleChat />
      <div className="w-[30rem] flex ">
        <div class="fixed bottom-0 left-0  lg:w-full md:w-full w-full bg-white border-t-2 p-4  justify-center items-center space-x-5  flex lg:mx-0 mx-0 md:mx-0 z-50 ">
          <IoCameraOutline class="text-2xl" />
          <ImAttachment class="text-2xl" />
          <div class="w-10/12 h-10 rounded-full bg-gray-100 ml-auto flex">
            <input
              type="text"
              placeholder="type here."
              class="p-2 w-10/12 bg-transparent outline-none"
            />
            <div class="bg-orange-500 p-2 rounded-full ml-auto hover:scale-95 hover:bg-orange-400 cursor-pointer">
              <IoIosSend class="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
