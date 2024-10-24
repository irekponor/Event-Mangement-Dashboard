import { useState } from "react";
import useLocalStorage from "use-local-storage";
import Toggle from "./Toggle";
import Badge from "./Badge";
import { AiOutlineClose, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { GiSpeaker } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineEventNote } from "react-icons/md";
import { TbReport } from "react-icons/tb";

const Mobnav = () => {
  const [nav, setNav] = useState(false);
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log("state changing");
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="absolute top-0">
      <button className="font-medium bg-[#87ceeb] ml-3 mb-4 p-2 mt-3 text-[#4169e1] block xl:hidden">
        Full Logo
      </button>
      <div>
        {nav ? (
          <div className="fixed top-0 left-0 w-full h-full bg-bg-color shadow-lg z-50 flex flex-col">
            <div className="flex justify-between items-center p-4">
              <button className="font-medium bg-[#87ceeb] p-2 mt-3 text-[#4169e1] block xl:hidden">
                Full Logo
              </button>
              <AiOutlineClose
                size={20}
                onClick={handleNav}
                className="cursor-pointer"
              />
            </div>

            <div className="flex flex-col p-4">
              <div className="flex items-center mb-8">
                <a className="text-[#777] m-0 p-1 cursor-pointer hover:scale-125 ease-in duration-300">
                  <AiOutlineHome size={20} />
                </a>
                <span className="ml-2 font-title font-normal text-[20px]">
                  Home
                </span>
              </div>
              <div className="flex items-center mb-8" onClick={togglePopup}>
                <a className="text-[#777] m-0 p-1 cursor-pointer hover:scale-125 ease-in duration-300">
                  <MdOutlineEventNote size={20} />
                </a>
                <span className="ml-2 font-title font-normal text-[20px]">
                  Events
                </span>
              </div>
              <div className="flex items-center mb-8">
                <a className="text-[#777] m-0 p-1 cursor-pointer hover:scale-125 ease-in duration-300">
                  <GiSpeaker size={20} />
                </a>
                <span className="ml-2 font-title font-normal text-[20px]">
                  Speaker
                </span>
              </div>
              <div className="flex items-center mb-8">
                <a className="text-[#777] m-0 p-1 cursor-pointer hover:scale-125 ease-in duration-300">
                  <TbReport size={20} />
                </a>
                <span className="ml-2 font-title font-normal text-[20px]">
                  Report
                </span>
              </div>
              <div className="flex items-center mb-8">
                <a className="text-[#777] m-0 p-1 cursor-pointer hover:scale-125 ease-in duration-300">
                  <IoMdNotificationsOutline size={20} />
                </a>
                <span className="ml-2 font-title font-normal text-[20px]">
                  Notifications
                </span>
                <Badge size="w-[25px] h-[25px] ml-2" />
              </div>
              <div className="flex items-center mb-8">
                <a className="text-[#777] m-0 p-1 cursor-pointer hover:scale-125 ease-in duration-300">
                  <IoChatbubblesOutline size={20} />
                </a>
                <span className="ml-2 font-title font-normal text-[20px]">
                  Messages
                </span>
              </div>
              <div className="flex items-center mb-8">
                <a className="text-[#777] m-0 p-1 cursor-pointer hover:scale-125 ease-in duration-300">
                  <CiSettings size={20} />
                </a>
                <span className="ml-2 font-title font-normal text-[20px]">
                  Settings
                </span>
              </div>
              <Toggle
                isChecked={isDark}
                handleChange={() => setIsDark(!isDark)}
              />
              <div className="flex items-center mt-4">
                <a className="text-[#777] m-0 p-1 cursor-pointer hover:scale-125 ease-in duration-300">
                  <FaCircleUser size={30} />
                </a>
                <div className="inline-block">
                  <h6 className="font-title font-normal text-[20px]">
                    Rudra Devi
                  </h6>
                  <h6 className="text-gray-500">rudra.devi@gmail.com</h6>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <AiOutlineMenu
            size={20}
            onClick={handleNav}
            className="absolute left-[330px] top-6 z-[99] xl:hidden cursor-pointer"
          />
        )}

        {/* Popup Component */}
        {isPopupVisible && (
          <div className="fixed top-16 left-1/4 w-3/4 bg-custom-color2 p-4 shadow-lg rounded-lg z-50">
            <div className="flex justify-between items-center">
              <h3 className="text-custom-color1">Event Name</h3>
              <LiaTimesSolid onClick={togglePopup} className="cursor-pointer" />
            </div>
            <p className="font-normal text-custom-color1">Event Date</p>
            <p className="font-normal text-custom-color1 mb-8">
              Event Description
            </p>
            <p className="font-normal text-custom-color1 pl-1 text-[18px]">
              3 Guest Speakers: Speaker name A, Speaker name B,
              <p> Speaker name C.</p> <p>300 Attendees</p>
            </p>
            <div className="inline-block mt-10 bg-custom-color4">
              <button className="m-3 p-2 w-full bg-white shadow-lg text-black">
                Edit
              </button>
              <button className="m-3 p-2 w-full bg-red-500 text-white">
                Delete
              </button>
              <button className="m-3 p-2 w-full bg-[#6382dd] text-white">
                Mark as completed
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobnav;
