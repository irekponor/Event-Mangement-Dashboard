import { AiOutlineHome } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { GiSpeaker } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineEventNote } from "react-icons/md";
import { TbReport } from "react-icons/tb";

const Sidenav = () => {
  return (
    <div>
      <div className="md:block hidden fixed top-8">
        <div className="flex flex-col">
          <div className="flex items-center">
            <a
              href="#main"
              className="text-[#4169e1] m-0 p-4 cursor-pointer 
          hover:scale-125 ease-in duration-300"
            >
              <AiOutlineHome size={20} />
            </a>
            <h6 className="text-[#4169e1] font-normal">Home</h6>
          </div>
          <div className="flex items-center">
            <a
              href="#work"
              className="text-black m-0 p-4 cursor-pointer 
          hover:scale-125 ease-in duration-300"
            >
              <MdOutlineEventNote size={20} />
            </a>
            <h6 className="font-normal">Events</h6>
          </div>
          <div className="flex items-center">
            <a
              href="#projects"
              className="text-black m-0 p-4 cursor-pointer 
          hover:scale-125 ease-in duration-300"
            >
              <GiSpeaker size={20} />
            </a>
            <h6 className="font-normal">Speaker</h6>
          </div>
          <div className="flex items-center">
            <a
              href="#main"
              className="text-black m-0 p-4 cursor-pointer 
          hover:scale-125 ease-in duration-300"
            >
              <TbReport size={20} />
            </a>
            <h6 className="font-normal">Report</h6>
          </div>
          <div className="flex items-center">
            <a
              href="#contact"
              className="text-black m-0 p-4 cursor-pointer 
          hover:scale-125 ease-in duration-300"
            >
              <IoMdNotificationsOutline size={20} />
            </a>
            <h6 className="font-normal">Notifications</h6>
          </div>
          <div className="flex items-center">
            <a
              href="#contact"
              className="text-black m-0 p-4 cursor-pointer 
          hover:scale-125 ease-in duration-300"
            >
              <IoChatbubblesOutline size={20} />
            </a>
            <h6 className="font-normal">Messages</h6>
          </div>
          <div className="flex items-center">
            <a
              href="#contact"
              className="text-black m-0 p-4 cursor-pointer 
          hover:scale-125 ease-in duration-300"
            >
              <CiSettings size={20} />
            </a>
            <h6 className="font-normal">Settings</h6>
          </div>
          <div className="flex items-center">
            <a
              href="#contact"
              className="text-black m-0 p-4 cursor-pointer 
          hover:scale-125 ease-in duration-300"
            >
              <FaCircleUser size={20} />
            </a>
            <div className="inline-block">
              <h6 className="font-normal">Rudra Devi</h6>
              <h6 className="font-normal">rudra.devi@gmail.com</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
