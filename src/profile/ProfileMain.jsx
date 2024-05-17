import React from "react";
import { BsThreeDots } from "react-icons/bs";
import ProfileBanner from "./ProfileBanner";
import Posts from "../components/homepage/Posts";
import postdata from "./postData";
const ProfileMain = () => {
  return (
    <div className="scrollbar-hide w-full">
      <div className="flex ">
        <h1 className="text-lg font-bold mb-2 ">My Profile</h1>
        <BsThreeDots className="ml-auto text-3xl" />
      </div>

      <hr />
      <ProfileBanner />
      <hr />
      <Posts postdata={postdata} />
    </div>
  );
};

export default ProfileMain;
