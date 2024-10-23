import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Mobnav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("state changing");
  };

  return (
    <div>
      <button className="font-medium bg-[#87ceeb] mr-24 ml-3 mb-4 p-2 mt-3 text-[#4169e1] xl:hidden">
        Full Logo
      </button>
      {nav ? (
        <div>
          <AiOutlineClose
            size={20}
            onClick={handleNav}
            className="text-black absolute right-4 top-6 z-[99] xl:hidden"
          />
        </div>
      ) : (
        <AiOutlineMenu
          size={20}
          onClick={handleNav}
          className="absolute right-4 top-6 z-[99] xl:hidden"
        />
      )}
    </div>
  );
};

export default Mobnav;
