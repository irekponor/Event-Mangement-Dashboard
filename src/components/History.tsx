import { BsSearch } from "react-icons/bs";

const History = () => {
  return (
    <div>
      <div className="relative w-full max-w-[200px] top-5 flex">
        <div>
          <input
            className="text-[#eeeeee] outline outline-1 outline-outline-color border-none px-10 py-2 w-52 h-8"
            type="text"
            placeholder="Search..."
          />
          <BsSearch
            className="top-0 absolute right-0 mt-[11px] mr-[169px] text-gray-500 font-semibold"
            size={14}
          />
        </div>
        <div>
          <button className="m-3 p-2  outline outline-1 outline-outline-color text-black">
            Date
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;
