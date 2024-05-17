import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import moment from "moment";
import { IoIosCheckmarkCircle } from "react-icons/io";

const NotificationCards = (props) => {
  const [type, setType] = useState();
  const { notifications } = props;
  const [showAll, setShowAll] = useState(false);

  const limitedNotifications = showAll
    ? notifications
    : notifications.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      {limitedNotifications.map((notification, index) => (
        <div
          key={index}
          className="p-4 bg-[#F5F5F5] rounded-2xl mb-4 w-full relative hover:scale-105 hover:bg-gray-200 transition-transform ease-in-out duration-300"
        >
          <div className="flex">
            <img
              className={`w-10 h-10 rounded-full p-0 object-cover text-orange-500  ${
                notification.type === "employer"
                  ? "ring-2 ring-orange-500"
                  : "ring-2 ring-gray-700"
              }`}
              src={notification.img_url}
            />
            <div className="flex flex-col ml-2">
              <span className="text-md font-bold text-gray-600">
                {notification.name}
              </span>
              <span
                className={`text-xs  flex items-center ${
                  notification.type === "job_seeker"
                    ? "text-black"
                    : "text-orange-500"
                }`}
              >
                {notification.type} <IoIosCheckmarkCircle className="ml-1" />
              </span>
            </div>
            <div className="flex flex-grow justify-end text-xs">
              {moment(notification.time).format("h:mm:ss a")}
            </div>
          </div>
          <div className="mt-3 flex ml-14 text-sm">{notification.message}</div>
        </div>
      ))}

      {notifications.length > 3 && !showAll && (
        <div className="relative inset-0 flex justify-center items-center ">
          {/* Blurred background */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="absolute  bg-white blur-3xl h-64 w-full"></div>
          </div>

          {/* Button */}
          <button
            onClick={toggleShowAll}
            className="relative z-50 text-lg cursor-pointer text-white rounded-full px-10 bg-[#404041] p-3"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationCards;
