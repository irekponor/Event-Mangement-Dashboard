import { MdKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <div className="xl:flex items-center font-title">
      <button className="xl:m-2 p-2 bg-slate-300 rounded-sm outline outline-1 outline-outline-color bg-foreground-color text-black flex items-start">
        <i className="text-custom-color1">
          <MdKeyboardArrowDown className="-rotate-[270deg]" />
        </i>
      </button>
      <button className="xl:m-2 w-7 h-7 rounded-full bg-blue-400 text-black flex items-start">
        <span className="pl-[9.4px] pt-[2px] text-custom-color1">1</span>
      </button>
      <button className="xl:m-2 p-2 text-black flex items-start">
        <span className="text-custom-color1">2</span>
      </button>
      <button className="xl:m-2 p-2 text-black flex items-start">
        <span className="text-custom-color1">3</span>
      </button>
      <button className="xl:m-2 p-2 rounded-sm outline outline-1 outline-outline-color bg-foreground-color text-black flex items-start">
        <i className="text-custom-color1">
          <MdKeyboardArrowDown className="-rotate-[90deg]" />
        </i>
      </button>
      <p className="font-normal xl:pl-96 pt-3 text-custom-color1 text-[15px]">
        Show:
      </p>
      <button
        className="xl:ml-2 ml-44 p-2 outline outline-1 outline-outline-color bg-foreground-color text-black flex 
        items-start xl:-translate-y-0 -translate-y-11"
      >
        <span className="pl-2 text-[#777] text-custom-color6 text-[15px]">
          10 Rows
        </span>
        <i className="pl-3 pt-1 text-custom-color1">
          <MdKeyboardArrowDown />
        </i>
      </button>
    </div>
  );
};

export default Footer;
