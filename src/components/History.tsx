import { BsSearch } from "react-icons/bs";
import { LuDownload } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";

const History = () => {
  return (
    <div className="absolute xl:top-[630px] top-[1030px] xl:left-[290px] left-6">
      <h3 className="font-semibold text-[18px] text-custom-color1 mt-14 xl:ml-8">
        Events History
      </h3>
      <div className="w-full max-w-[1060px] xl:flex items-center left-4 font-title">
        <input
          className="text-[#eeeeee] outline outline-1 outline-outline-color bg-foreground-color border-none px-10 py-2 xl:w-[200px] w-[320px] h-8"
          type="text"
          placeholder="Search..."
        />
        <BsSearch
          className="top-0 absolute xl:right-[770px] xl:ml-0 ml-3 xl:mt-[110px] mt-[95px] mr-[250px] text-gray-500 font-semibold"
          size={14}
        />
        <button
          className="xl:m-3 mt-2 p-2 outline outline-1 outline-outline-color bg-foreground-color xl:w-[90px] w-[320px]
         text-black flex items-start"
        >
          <span className="xl:pl-2 pl-[117px] text-[#777] text-custom-color6">
            Date
          </span>
          <i className="pl-3 pt-1">
            <MdKeyboardArrowDown />
          </i>
        </button>
        <button className="xl:m-2 mt-2 p-2 outline outline-1 outline-outline-color bg-foreground-color xl:w-[90px] w-[320px]  text-black flex items-start">
          <span className="xl:pl-2 pl-28 text-[#777] text-custom-color6">
            Status
          </span>
          <i className="pl-3 pt-1">
            <MdKeyboardArrowDown />
          </i>
        </button>
        <button className="xl:m-2 mt-2 p-2 outline outline-1 outline-outline-color bg-foreground-color xl:w-[90px] w-[320px]  text-black flex items-start">
          <span className="xl:pl-2 pl-28 text-[#777] text-custom-color6">
            Name
          </span>
          <i className="pl-3 pt-1">
            <MdKeyboardArrowDown />
          </i>
        </button>
        <p className="font-medium pt-3 text-custom-color1">
          Displaying 100 results
        </p>
        <p className="font-normal xl:pl-9 pt-3 text-custom-color1">Sort:</p>
        <button
          className="xl:ml-2 ml-44 p-2 outline outline-1 outline-outline-color bg-foreground-color text-black flex 
        items-start xl:-translate-y-0 -translate-y-11"
        >
          <span className="pl-2 text-[#777] text-custom-color6">
            Most Recent
          </span>
          <i className="pl-3 pt-1">
            <MdKeyboardArrowDown />
          </i>
        </button>
        <button className="ml-2 p-2 outline outline-1 outline-outline-color bg-foreground-color text-black flex items-start">
          <span className="text-[#777]">:</span>
        </button>
        <button
          className="xl:ml-2 ml-[220px] p-2 outline outline-1 outline-outline-color bg-foreground-color text-black
         flex items-start xl:-translate-y-0 -translate-y-11"
        >
          <i className="pt-1">
            <LuDownload />
          </i>
          <span className="xl:pl-2 pl-4 text-[#777] text-custom-color6">
            Export
          </span>
        </button>
      </div>
    </div>
  );
};

export default History;
