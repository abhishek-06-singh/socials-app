import React from "react";
import TabsNavigation from "./TabsNavigation";

const BookmarkMain = () => {
  return (
    <div className="scrollbar-hide w-auto">
      <h1 className="text-lg font-bold mb-2 ">Bookmarks</h1>
      <hr />
      <TabsNavigation />
    </div>
  );
};

export default BookmarkMain;
