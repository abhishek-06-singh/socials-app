import React from "react";
import ReceiveingMessage from "./chatbox/ReceiveingMessage";
import SendingMessage from "./chatbox/SendingMessage";
import chatDatas from "./chatDatas";

const SingleChat = () => {
  return (
    <div className="max-h-auto overflow-y-auto scrollbar-hide">
      {chatDatas.map((chat, index) => (
        <ReceiveingMessage key={index} chat={chat} />
      ))}
      <SendingMessage />
    </div>
  );
};

export default SingleChat;
