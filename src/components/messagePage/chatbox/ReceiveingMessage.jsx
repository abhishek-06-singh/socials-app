import React from "react";
import avatar from "../../../assets/Ellipse 26.png";

const ReceiveingMessage = ({ chat }) => {
  return (
    <div className="relative">
      {chat.message.map((msg, index) => (
        <div className="p-3" key={index}>
          <img
            src={chat.img_url}
            alt="avatar"
            className="absolute top-0 w-7 h-7"
          />
          <div className="bg-[#E7831D] p-4 w-64 h-auto text-md text-white rounded-xl">
            <p>{msg}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReceiveingMessage;
