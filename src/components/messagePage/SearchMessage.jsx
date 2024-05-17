import React from "react";
import { CiSearch } from "react-icons/ci";
const SearchMessage = () => {
  return (
    <div className="p-2 flex flex-col justify-start items-start  mb-3 bg-white ">
      <div className="flex space-x-2 w-full mt-3 h-12 rounded-full border-2 border-gray-400 outline-none px-5 items-center">
        <CiSearch className="text-2xl text-gray-600" />
        <input type="text" className="outline-none" placeholder="search" />
      </div>
    </div>
  );
};

export default SearchMessage;
