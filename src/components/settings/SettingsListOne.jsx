import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Modal } from "antd";
import { GoPerson } from "react-icons/go";
import { MdOutlineInsertPhoto, MdOutlineEmail } from "react-icons/md";
import { IoKeyOutline, IoIdCardOutline } from "react-icons/io5";
import AboutMeModal from "./settingsModals/AboutMeModal";
import MyPasswordModal from "./settingsModals/MyPasswordModal";
import RoleModal from "./settingsModals/RoleModal";
const settingsOne = [
  {
    name: "About Me",
    canEdit: true,
    icon: GoPerson,
    modal: AboutMeModal,
  },
  {
    name: "Username",
    canEdit: false,
    icon: MdOutlineInsertPhoto,
  },

  {
    name: "Email",
    canEdit: false,
    icon: MdOutlineEmail,
  },
  {
    name: "My Password",
    canEdit: true,
    icon: IoKeyOutline,
    modal: MyPasswordModal,
  },
  {
    name: "Role",
    canEdit: true,
    icon: IoIdCardOutline,
    modal: RoleModal,
  },
];

const SettingsListOne = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (ModalComponent) => {
    setActiveModal(<ModalComponent closeModal={closeModal} />);
  };
  const closeModal = () => {
    setActiveModal(null);
  };
  return (
    <>
      {activeModal}
      <ul
        role="list"
        className="divide-y divide-gray-100 overflow-hidden bg-white   ring-gray-900/5 sm:rounded-xl"
      >
        {settingsOne.map((item) => (
          <li
            key={item.name}
            className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
          >
            <div className="flex gap-x-4">
              <item.icon className="text-2xl" />
              <div className="min-w-0 flex-auto">
                <p className="text-md  leading-6 text-gray-700">
                  <span className="absolute inset-x-0 -top-px bottom-0 text-gray-600" />
                  {item.name}
                </p>
                <p className="mt-1 flex text-xs leading-5 text-gray-500"></p>
              </div>
            </div>
            <div className="flex items-center gap-x-4 z-50">
              {item.canEdit && (
                <FaEdit
                  className="h-5 w-5 flex-none text-gray-500 cursor-pointer hover:scale-105"
                  aria-hidden="true"
                  onClick={() => openModal(item.modal)}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SettingsListOne;
