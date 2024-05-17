import React from "react";
import PublishPost from "./PublishPost";
import Posts from "./Posts";
import postdata from "./postData";
const HomeMain = () => {
  return (
    <div className="scrollbar-hide w-auto">
      <h1 className="text-lg font-bold mb-2 ">Homepage</h1>
      <hr />
      <PublishPost />
      <hr />
      <h2 className="text-lg font-bold mb-2 mt-1 ">Latest Posts</h2>
      <Posts postdata={postdata} />
    </div>
  );
};

export default HomeMain;
