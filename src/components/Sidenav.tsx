import { useState } from "react";
import useLocalStorage from "use-local-storage";
import Toggle from "./Toggle";
import Badge from "./Badge";
import { AiOutlineHome } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { GiSpeaker } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import {
  MdOutlineEventNote,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
import { TbReport } from "react-icons/tb";
import Welcome from "./Welcome";
import Chart from "./Chart";
import Mobnav from "./Mobnav";

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
        className={`xl:block hidden fixed top-0 shadow-lg bg-x transition-all duration-300 ${
          isCollapsed ? "w-[70px]" : "w-[280px]"
        }`}
      >
        <div className="flex flex-col font-title">
          {!isCollapsed && (
            <button className="font-medium bg-[#87ceeb] mr-24 ml-10 mb-4 p-2 mt-8 text-[#4169e1]">
              Full Logo
            </button>
          )}
          <div className="flex items-center ml-4 bg-custom-color3 rounded-sm">
            <a className="text-custom-color m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
              <AiOutlineHome size={20} />
            </a>
            {!isCollapsed && (
              <h6 className="text-custom-color font-normal">Home</h6>
            )}
          </div>
          <div className="flex items-center ml-3">
            <a
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
            <a className="text-[#777] m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
              <GiSpeaker size={20} />
            </a>
            {!isCollapsed && (
              <h6 className="font-normal text-custom-color1">Speaker</h6>
            )}
          </div>
          <div className="flex items-center ml-3">
            <a className="text-[#777] m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
              <TbReport size={20} />
            </a>
            {!isCollapsed && (
              <h6 className="font-normal text-custom-color1">Report</h6>
            )}
          </div>
          <div className="flex items-center ml-3">
            <a className="text-[#777] m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
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
            <a className="text-[#777] m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
              <IoChatbubblesOutline size={20} />
            </a>
            {!isCollapsed && (
              <h6 className="font-normal text-custom-color1">Messages</h6>
            )}
          </div>
          <div className="flex items-center ml-3">
            <a className="text-[#777] m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
              <CiSettings size={20} />
            </a>
            {!isCollapsed && (
              <h6 className="font-normal text-custom-color1">Settings</h6>
            )}
          </div>
          <div className="flex items-center ml-3">
            <a
              onClick={toggleCollapse}
              className="text-[#777] m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
            >
              <MdOutlineKeyboardDoubleArrowUp
                className={`transition-all duration-300 ${
                  isCollapsed ? "rotate-90" : "-rotate-90"
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
            <a className="text-[#777] m-0 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
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
        <div className="fixed top-16 left-64 bg-custom-color2 p-0 shadow-lg rounded-lg z-50 font-title">
          <div className="pr-7 pt-3">
            <button
              onClick={togglePopup}
              className="ml-[470px] p-1 bg-custom-color5 shadow-lg rounded-full text-black"
            >
              <LiaTimesSolid />
            </button>
          </div>
          <h3 className="text-custom-color1 pl-4 text-[18px]">Event Name</h3>
          <p className="font-light text-custom-color1 pl-4 text-[14px]">
            Event Date
          </p>
          <p className="font-light text-custom-color1 pl-4 text-[14px] pt-2 mb-20">
            Event Description
          </p>
          <p className="font-light text-custom-color1 pl-4 text-[14px]">
            3 Guest Speakers: Speaker name A, Speaker name B,
            <p> Speaker name C.</p> <p>300 Attendees</p>
          </p>
          <div className="flex mt-10 bg-custom-color4">
            <button className="m-3 p-2 bg-white shadow-lg outline outline-1 outline-gray-200 text-black">
              Edit
            </button>
            <div className="ml-36">
              <button className="m-3 p-2 bg-red-500 shadow-lg text-white">
                Delete
              </button>
              <button className="m-3 p-2 ml-4 bg-[#6382dd] shadow-lg text-white">
                Mark as completed
              </button>
            </div>
          </div>
        </div>
      )}
      <Welcome />
      <Chart />
      <Mobnav />
    </div>
  );
};

export default Sidenav;
