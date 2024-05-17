import React from "react";
import NotificationCards from "./NotificationCards";
import avatar from "../../assets/Ellipse 26.png";
import notification from "./notificationsData";

const Notification = () => {
  return (
    <div className="p-3 px-5 flex flex-col justify-start items-start scrollbar-hide">
      <span className="text-lg font-bold text-black flex-1">Notifications</span>
      <NotificationCards notifications={notification} />
    </div>
  );
};

export default Notification;
