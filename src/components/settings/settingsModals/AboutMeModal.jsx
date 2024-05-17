import React from "react";
import { Modal, Input } from "antd";

const { TextArea } = Input;

const AboutMeModal = ({ closeModal }) => {
  return (
    <Modal visible={true} onCancel={closeModal} footer={null}>
      <div className="w-full h-auto py-5 px-10 flex flex-col space-y-4">
        <h1 className="text-lg text-gray-700 font-bold ">About Me</h1>
        <TextArea
          rows={6}
          className="border-gray-500 rounded-2xl"
          placeholder="Write something about yourself..."
        />
        <span className="text-md text-gray-400 ml-auto">400/1000</span>

        <button className="w-full p-3 text-white font-bold bg-[#404041] hover:scale-95 rounded-full">
          Save
        </button>
      </div>
    </Modal>
  );
};

export default AboutMeModal;
