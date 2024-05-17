import React from "react";
import SearchMessage from "./SearchMessage";
import AllMessages from "./AllMessages";
import messagedata from "./messageData";
const MessageMain = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <h1 className="text-lg font-bold mb-2 ">Messages</h1>
      <hr />

      {/* <SearchMessage /> */}

      <AllMessages messagedata={messagedata} />
    </div>
  );
};

export default MessageMain;
