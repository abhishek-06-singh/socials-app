import React from "react";
import avatar from "../../assets/Ellipse 26.png";

const PublishPost = () => {
  return (
    <div className="flex flex-col mt-3 w-full mb-3">
      <div className="flex flex-col sm:flex-row items-start">
        <img
          className="w-12 h-12 rounded-full p-0 object-cover text-orange-500 mb-3 sm:mb-0"
          src={avatar}
          alt="Avatar"
        />
        <textarea
          type="text"
          placeholder="Hello, I am looking for work as a #cook in #Houston #Texas ..."
          className="border-0 outline-none p-5 w-full"
        />
      </div>
      <div className="flex w-full h-auto mt-5">
        <button className="flex ml-auto bg-[#404041] p-3 text-center text-white font-bold rounded-full px-10">
          Publish
        </button>
      </div>
    </div>
  );
};

export default PublishPost;
