import { BsSearch } from "react-icons/bs";
import { LuDownload } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";

const History = () => {
  return (
    <div>
      <div className="relative w-full max-w-[1280px] top-5 xl:flex items-center xl:left-20 left-4">
        <input
          className="text-[#eeeeee] outline outline-1 outline-outline-color border-none px-10 py-2 w-[260px] h-8"
          type="text"
          placeholder="Search..."
        />
        <BsSearch
          className="top-0 absolute xl:right-[1000px] xl:ml-0 ml-3 xl:mt-[30px] mt-[10px] mr-[250px] text-gray-500 font-semibold"
          size={14}
        />
        <button className="xl:m-3 mt-2 p-2 outline outline-1 outline-outline-color xl:w-[90px] w-[260px] text-black flex items-start">
          <span className="xl:pl-2 pl-[83px] text-[#777]">Date</span>
          <i className="pl-3 pt-1">
            <MdKeyboardArrowDown />
          </i>
        </button>
        <button className="xl:m-2 mt-2 p-2 outline outline-1 outline-outline-color xl:w-[90px] w-[260px]  text-black flex items-start">
          <span className="xl:pl-2 pl-20 text-[#777]">Status</span>
          <i className="pl-3 pt-1">
            <MdKeyboardArrowDown />
          </i>
        </button>
        <button className="xl:m-2 mt-2 p-2 outline outline-1 outline-outline-color xl:w-[90px] w-[260px]  text-black flex items-start">
          <span className="xl:pl-2 pl-20 text-[#777]">Name</span>
          <i className="pl-3 pt-1">
            <MdKeyboardArrowDown />
          </i>
        </button>
        <p className="font-medium pt-3">Displaying 100 results</p>
        <p className="font-normal xl:pl-32 pt-3">Sort:</p>
        <button
          className="xl:ml-2 ml-28 p-2 outline outline-1 outline-outline-color text-black flex 
        items-start xl:-translate-y-0 -translate-y-11"
        >
          <span className="pl-2 text-[#777]">Most Recent</span>
          <i className="pl-3 pt-1">
            <MdKeyboardArrowDown />
          </i>
        </button>
        <button className="ml-2 p-2 outline outline-1 outline-outline-color text-black flex items-start">
          <span className="text-[#777]">:</span>
        </button>
        <button
          className="xl:ml-2 ml-[156px] p-2 outline outline-1 outline-outline-color text-black
         flex items-start xl:-translate-y-0 -translate-y-11"
        >
          <i className="pt-1">
            <LuDownload />
          </i>
          <span className="xl:pl-2 pl-4 text-[#777]">Export</span>
        </button>
      </div>
    </div>
  );
};

export default History;
