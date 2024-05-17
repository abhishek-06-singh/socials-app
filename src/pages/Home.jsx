import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { GoHash, GoMail } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { PiSignOutBold } from "react-icons/pi";
import { FaRegCircleXmark } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import Explore from "../components/Explore";
import Notification from "../components/notifcation/Notification";
import HomeMain from "../components/homepage/HomeMain";
import ExploreMain from "../components/ExplorePage/ExploreMain";
import MessageMain from "../components/messagePage/MessageMain";
import logo from "../assets/newlogo.png";
import BookmarkMain from "../components/bookmark/BookmarkMain";
import SubscriptionMain from "../components/Subscription/SubscriptionMain";
import ProfileMain from "../profile/ProfileMain";
import { MdNotificationsActive } from "react-icons/md";
import SettingsMain from "../components/settings/SettingsMain";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notioficationSideBar, setNotificationSideBar] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Home");
  console.log(activeComponent, "activeComponent");
  const navigation = [
    {
      name: "Home",
      href: "#",
      icon: GoHome,
      component: HomeMain,
      current: activeComponent === "Home",
    },
    {
      name: "Explore",
      href: "#",
      icon: GoHash,
      component: ExploreMain,
      current: activeComponent === "Explore",
    },
    {
      name: "Messages",
      href: "#",
      icon: GoMail,
      component: MessageMain,
      current: activeComponent === "Messages",
    },
    {
      name: "Bookmarks",
      href: "#",
      icon: CiBookmark,
      component: null,
      current: activeComponent === "Bookmarks",
    },
    {
      name: "Subscription",
      href: "#",
      icon: IoCheckmarkCircleOutline,
      component: null,
      current: activeComponent === "Subscription",
    },
    {
      name: "Profile",
      href: "#",
      icon: FaRegUser,
      component: null,
      current: activeComponent === "Profile",
    },
    {
      name: "Settings",
      href: "#",
      icon: CiSettings,
      component: null,
      current: activeComponent === "Settings",
    },
    {
      name: "Sign Out",
      href: "#",
      icon: PiSignOutBold,
      component: null,
      current: activeComponent === "Sign Out",
    },
  ];
  const handleNavigationClick = (name) => {
    setActiveComponent(name);
    setSidebarOpen(false); // Close the sidebar after navigation
  };
  const toggleNotificationSideBar = () => {
    setNotificationSideBar((prevState) => !prevState);
  };

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <FaRegCircleXmark
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-5 mt-10 ">
                            {navigation.map((item, index) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  onClick={() =>
                                    handleNavigationClick(item.name)
                                  }
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-50 -text-[#E7831D]"
                                      : "text-gray-700 hover:text-[#E7831D] hover:bg-gray-50",
                                    "group flex gap-x-3 rounded-md p-2 text-md leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-[#E7831D]"
                                        : "text-gray-800 group-hover:text-[#E7831D]",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7 mt-10">
                <li>
                  <ul role="list" className="-mx-2 space-y-5 font-bold ">
                    {navigation.map((item, index) => (
                      <li
                        key={item.name}
                        className={classNames(
                          item.current ? "bg-gray-200" : "",
                          "rounded-md"
                        )}
                      >
                        <a
                          href={item.href}
                          onClick={() => handleNavigationClick(item.name)}
                          className={classNames(
                            item.current
                              ? "bg-gray-50 text-[#E7831D] font-bold"
                              : "text-gray-700 hover:text-[#E7831D] hover:bg-gray-50",
                            "group flex gap-x-3 rounded-md p-2 text-lg leading-6 font-semibold"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-[#E7831D]"
                                : "text-gray-800 group-hover:text-[#E7831D]",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MdNavigateNext className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
            Dashboard
          </div>
          <a href="#" className="flex text-center ">
            <span className="sr-only">Your profile</span>

            <RxAvatar
              className="h-8 w-8 rounded-full bg-gray-50"
              onClick={() => setActiveComponent("Profile")}
            />
            <MdNotificationsActive
              className="h-8 w-8 text-orange-500 ml-2 hover:scale-110"
              aria-hidden="true"
              onClick={toggleNotificationSideBar}
            />
          </a>
        </div>

        <main className="lg:pl-72 scrollbar-hide w-auto">
          <div className="xl:pr-96">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
              <div className=" flex justify-center items-center text-center mb-3 ">
                <img src={logo} alt="logo" />
              </div>
              {activeComponent == "Home" && <HomeMain />}
              {activeComponent == "Explore" && <ExploreMain />}{" "}
              {activeComponent == "Messages" && <MessageMain />}{" "}
              {activeComponent == "Bookmarks" && <BookmarkMain />}{" "}
              {activeComponent == "Subscription" && <SubscriptionMain />}{" "}
              {activeComponent == "Profile" && <ProfileMain />}{" "}
              {activeComponent == "Settings" && <SettingsMain />}
              {activeComponent == "Sign Out" && <HomeMain />}
              {/* <Routes>
                <Route path="/explore" element={<ExploreMain />} />
                <Route path="/messages" element={<MessageMain />} />
                <Route path="/bookmarks" element={<BookmarkMain />} />
                <Route path="/subscription" element={<SubscriptionMain />} />
                <Route path="/profile" element={<ProfileMain />} />
                <Route path="/settings" element={<SettingsMain />} />
                <Route path="/signout" element={<HomeMain />} />

                <Route path="/Home" element={<HomeMain />} />
              </Routes> */}
            </div>
          </div>
        </main>
        {notioficationSideBar && (
          <aside className="fixed inset-y-0 right-0 w-96 overflow-y-auto border-l border-gray-200 px-1 py-6 sm:px-6 lg:px-3 xl:block bg-white">
            <div className="sticky">
              <Explore />
            </div>
            <div className="overflow-y-auto max-h-screen scrollbar-hide">
              <Notification />
            </div>
          </aside>
        )}
        <aside className="fixed inset-y-0 right-0 w-96 overflow-y-auto border-l border-gray-200 px-1 py-6 sm:px-6 lg:px-3 bg-white hidden md:hidden lg:block xl:block scrollbar-hide">
          <div className="sticky">
            <Explore />
          </div>
          <div className="overflow-y-auto max-h-screen scrollbar-hide">
            <Notification />
          </div>
        </aside>
      </div>{" "}
    </>
  );
};

export default Home;
