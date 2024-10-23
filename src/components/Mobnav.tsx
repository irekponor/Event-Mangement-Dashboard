import { AiOutlineMenu } from "react-icons/ai";

const Mobnav = () => {
  return (
    <div>
      <button className="font-medium bg-[#87ceeb] mr-24 ml-3 mb-4 p-2 mt-3 text-[#4169e1] xl:hidden">
        Full Logo
      </button>
      <AiOutlineMenu
        size={20}
        className="absolute right-4 top-6 z-[99] xl:hidden"
      />
    </div>
  );
};

export default Mobnav;
