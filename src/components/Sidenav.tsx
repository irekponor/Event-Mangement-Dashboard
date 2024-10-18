import { AiOutlineHome, AiOutlineMail, AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const Sidenav = () => {
  return (
    <div>
      <div className="md:block hidden fixed top-28">
        <div className="flex flex-col">
          <a
            href="#main"
            className="text-black rounded-full shadow-lg bg-gray-300 m-2 p-4 cursor-pointer 
          hover:scale-125 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#work"
            className="text-black rounded-full shadow-lg bg-gray-300 m-2 p-4 cursor-pointer 
          hover:scale-125 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#projects"
            className="text-black rounded-full shadow-lg bg-gray-300 m-2 p-4 cursor-pointer 
          hover:scale-125 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#main"
            className="text-black rounded-full shadow-lg bg-gray-300 m-2 p-4 cursor-pointer 
          hover:scale-125 ease-in duration-300"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#contact"
            className="text-black rounded-full shadow-lg bg-gray-300 m-2 p-4 cursor-pointer 
          hover:scale-125 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
