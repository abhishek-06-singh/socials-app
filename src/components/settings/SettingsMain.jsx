import React from "react";
import SettingsListOne from "./SettingsListOne";
import SettingsListTwo from "./SettingsListTwo";
import SettingsListThree from "./SettingsListThree";

const SettingsMain = () => {
  return (
    <div className="scrollbar-hide w-auto">
      <h1 className="text-lg font-bold mb-2 ">Settings</h1>
      <hr />
      <SettingsListOne />
      <div className="w-full h-2 bg-gray-100"></div>
      <SettingsListTwo />
      <div className="w-full h-2 bg-gray-100"></div>
      <SettingsListThree />
    </div>
  );
};

export default SettingsMain;
