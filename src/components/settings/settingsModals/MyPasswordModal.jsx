import React, { useState } from "react";
import { Modal, Input, Button, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const MyPasswordModal = ({ closeModal }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const handleSave = () => {
    // Your save password logic here
    console.log("Saving Password...");
  };

  return (
    <Modal visible={true} onCancel={closeModal} footer={null}>
      <div className="w-full h-auto py-5 px-10 flex flex-col space-y-4">
        <h1 className="text-lg text-gray-700 font-bold">Change Password</h1>
        <Input.Password
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Current Password"
          iconRender={(visible) =>
            visible ? (
              <EyeTwoTone className="bg-gray-500" />
            ) : (
              <EyeInvisibleOutlined />
            )
          }
          onPressEnter={handleSave}
          visibilityToggle
          className="rounded-full p-3 outline-none "
        />
        <Input.Password
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          onPressEnter={handleSave}
          visibilityToggle
          className="rounded-full p-3 outline-none "
        />
        <Input.Password
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          placeholder="Confirm New Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          onPressEnter={handleSave}
          visibilityToggle
          className="rounded-full p-3 outline-none "
        />

        <span className="text-sm text-orange-500 ml-auto">Forget Password</span>

        <button
          onClick={handleSave}
          className="w-full p-3 text-white font-bold bg-[#404041] hover:scale-95 rounded-full"
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default MyPasswordModal;
