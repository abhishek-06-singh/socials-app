import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTreeCity } from "react-icons/fa6";
import { FaRegMap } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { HiMiniLanguage } from "react-icons/hi2";
import { LuLink } from "react-icons/lu";
const settingsTwo = [
  {
    name: "Terms & Conditions",
    canEdit: false,
    href: "",
    icon: LuLink,
  },
  {
    name: "Privacy Policy",
    canEdit: false,
    icon: LuLink,
    href: "",
  },
];

const SettingsListTwo = () => {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 overflow-hidden bg-white   ring-gray-900/5 sm:rounded-xl"
    >
      {settingsTwo.map((item) => (
        <li
          key={item.name}
          className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
        >
          <a href={item.href}>
            <div className="flex gap-x-4">
              <item.icon className="text-2xl" />
              <div className="min-w-0 flex-auto">
                <p className="text-md  leading-6 text-gray-700">
                  <span className="absolute inset-x-0 -top-px bottom-0 text-gray-600" />
                  {item.name}
                </p>
                <p className="text-sm text-orange-500">Read</p>
                <p className="mt-1 flex text-xs leading-5 text-gray-500"></p>
              </div>
            </div>
            <div className="flex items-center gap-x-4 cursor-pointer hover:scale-105">
              {item.canEdit && (
                <FaEdit
                  className="h-5 w-5 flex-none text-gray-400 cursor-pointer hover:scale-105"
                  aria-hidden="true"
                />
              )}
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SettingsListTwo;
