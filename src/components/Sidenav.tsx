import { useState } from "react";
import useLocalStorage from "use-local-storage";
import Toggle from "./Toggle";
import Badge from "./Badge";
import { AiOutlineHome } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { GiSpeaker } from "react-icons/gi";
import { IoIosArrowBack, IoMdNotificationsOutline } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineEventNote } from "react-icons/md";
import { TbReport } from "react-icons/tb";

const Sidenav = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Toggle the popup when Events icon is clicked
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  // Toggle sidebar collapse
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <div
        className={`md:block hidden fixed top-0 shadow-lg bg-x transition-all duration-300 ${
          isCollapsed ? "w-[70px]" : "w-[280px]"
        }`}
      >
        <div className="flex flex-col">
          {!isCollapsed && (
            <button className="font-medium bg-[#87ceeb] mr-24 ml-10 mb-4 p-2 mt-8 text-[#4169e1]">
              Full Logo
            </button>
          )}
          <div className="flex items-center ml-4 bg-custom-color3 rounded-sm">
            <a
              href="#main"
              className="text-custom-color m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
            >
              <AiOutlineHome size={20} />
            </a>
            {!isCollapsed && (
              <h6 className="text-custom-color font-normal">Home</h6>
            )}
          </div>
          <div className="flex items-center ml-3">
            <a
              href="#work"
              onClick={togglePopup}
              className="text-[#777] m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
            >
              <MdOutlineEventNote size={20} />
            </a>
            {!isCollapsed && (
              <h6 className="font-normal text-custom-color1">Events</h6>
            )}
          </div>
          <div className="flex items-center ml-3">
            <a
              href="#projects"
              className="text-[#777] m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
            >
              <GiSpeaker size={20} />
            </a>
            {!isCollapsed && (
              <h6 className="font-normal text-custom-color1">Speaker</h6>
            )}
          </div>
          <div className="flex items-center ml-3">
            <a
              href="#main"
              className="text-[#777] m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
            >
              <TbReport size={20} />
            </a>
            {!isCollapsed && (
              <h6 className="font-normal text-custom-color1">Report</h6>
            )}
          </div>
          <div className="flex items-center ml-3">
            <a
              href="#contact"
              className="text-[#777] m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
            >
              <IoMdNotificationsOutline size={20} />
            </a>
            {!isCollapsed && (
              <>
                <h6 className="font-normal text-custom-color1">
                  Notifications
                </h6>
                <Badge size="w-[25px] h-[25px] ml-7" />
              </>
            )}
          </div>
          <div className="flex items-center ml-3">
            <a
              href="#contact"
              className="text-[#777] m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
            >
              <IoChatbubblesOutline size={20} />
            </a>
            {!isCollapsed && (
              <h6 className="font-normal text-custom-color1">Messages</h6>
            )}
          </div>
          <div className="flex items-center ml-3">
            <a
              href="#contact"
              className="text-[#777] m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
            >
              <CiSettings size={20} />
            </a>
            {!isCollapsed && (
              <h6 className="font-normal text-custom-color1">Settings</h6>
            )}
          </div>
          <div className="flex items-center ml-3">
            <a
              href="#contact"
              onClick={toggleCollapse}
              className="text-[#777] m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
            >
              <IoIosArrowBack
                className={`transition-all duration-300 ${
                  isCollapsed ? "-rotate-180" : "-rotate-0"
                }`}
                size={20}
              />
            </a>
            {!isCollapsed && (
              <h6 className="font-normal text-custom-color1">Collapse</h6>
            )}
          </div>
          {!isCollapsed && (
            <Toggle
              isChecked={isDark}
              handleChange={() => setIsDark(!isDark)}
            />
          )}
          <div className="flex items-center ml-3 pt-12">
            <a
              href="#contact"
              className="text-[#777] m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
            >
              <FaCircleUser size={20} />
            </a>
            {!isCollapsed && (
              <div className="inline-block">
                <h6 className="font-normal text-custom-color1">Rudra Devi</h6>
                <h6 className="font-normal text-[#777]">
                  rudra.devi@gmail.com
                </h6>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Popup Component */}
      {isPopupVisible && (
        <div className="fixed top-16 left-64 bg-custom-color2 p-4 shadow-lg rounded-lg z-50">
          <button
            onClick={togglePopup}
            className="ml-[600px] p-2 bg-white shadow-lg rounded-full text-black"
          >
            <LiaTimesSolid />
          </button>
          <h3 className="font-normal text-custom-color1">Event Name</h3>
          <p className="font-normal text-custom-color1">Event date.</p>
          <p className="font-normal text-custom-color1">
            3 Guest Speakers: Speaker name A, Speaker name B, Speaker name C.
            300 Attendees
          </p>
          <button
            onClick={togglePopup}
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            <LiaTimesSolid />
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidenav;
