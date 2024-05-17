import React, { useState } from "react";
import messagedata from "../messagePage/messageData";
import postdata from "../homepage/postData";
import ProfileTabData from "./ProfileTabData";
import AllMessages from "../messagePage/AllMessages";
import Posts from "../homepage/Posts";
import ProfileTab from "./ProfileTab";

const tabs = [
  {
    name: "Chats",
    component: <AllMessages messagedata={messagedata} />,
    current: false,
  },
  { name: "Posts", component: <Posts postdata={postdata} />, current: false },
  {
    name: "Profiles",
    component: <ProfileTab ProfileTabData={ProfileTabData} />,
    current: true,
  },
];

const TabsNavigation = () => {
  const [activeTab, setActiveTab] = useState(
    tabs.find((tab) => tab.current).name
  );

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>

        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 p-5 outline-none bg-gray-100"
          value={activeTab}
          onChange={(e) => handleTabClick(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name} className="p-5">
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab.name)}
                className={classNames(
                  tab.name === activeTab
                    ? "border-gray-700 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700  ",
                  "w-1/3 border-b-2 py-4 px-1 text-center text-sm font-bold"
                )}
                aria-current={tab.name === activeTab ? "page" : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {tabs.find((tab) => tab.name === activeTab).component}
    </div>
  );
};

export default TabsNavigation;
