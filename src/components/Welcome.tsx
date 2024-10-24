import { BsArrowUpLeft } from "react-icons/bs";

import { GoInfo } from "react-icons/go";

const Welcome = () => {
  return (
    <div>
      <div className="absolute xl:top-0 top-6 xl:left-[300px] left-[20px] font-title">
        <h3 className="font-semibold xl:text-[24px] text-[18px] mt-11 text-custom-color1">
          Welcome! here's your summary
        </h3>
        <div className="xl:flex items-center">
          <div className="inline-block rounded-sm mt-6 outline outline-1 outline-outline-color bg-foreground-color xl:w-[241px] w-[300px] ml-5">
            <div className="flex items-center pl-3">
              <h5 className="font-medium text-custom-color6 pr-3 mb-0 pt-1">
                Total Events
              </h5>
              <GoInfo className="text-custom-color6" size={17} />
            </div>
            <div className="flex items-center mt-0 pl-3">
              <p className="font-semibold text-custom-color1 text-[20px] pt-3 pr-2">
                100,000
              </p>
              <BsArrowUpLeft className="text-[#49db49] rotate-90" size={17} />
              <span className="text-[#49db49] text-[10px] pl-2">+5.0%</span>
            </div>
          </div>
          <div className="inline-block mt-6 rounded-sm outline outline-1 outline-outline-color bg-foreground-color xl:w-[241px] w-[300px] ml-4">
            <div className="flex items-center  pl-3 m-0">
              <h5 className="font-medium text-custom-color6 pr-3 mb-0 pt-1">
                Active Speakers
              </h5>
              <GoInfo className="text-custom-color6" size={17} />
            </div>
            <div className="flex items-center  pl-3 mt-0">
              <p className="font-semibold text-custom-color1 text-[20px] pt-3 pr-2">
                25
              </p>
              <BsArrowUpLeft className="text-[red] -rotate-180" size={17} />
              <span className="text-[red] text-[10px] pl-2">-5.0%</span>
            </div>
          </div>
          <div className="inline-block rounded-sm mt-6 outline outline-1 outline-outline-color bg-foreground-color xl:w-[241px] w-[300px] ml-4">
            <div className="flex items-center  pl-3 m-0">
              <h5 className="font-medium text-custom-color6 pr-3 mb-0 pt-1">
                Total Registration
              </h5>
              <GoInfo className="text-custom-color6" size={17} />
            </div>
            <div className="flex items-center  pl-3 mt-0">
              <p className="font-semibold text-custom-color1 text-[20px] pt-3 pr-2">
                300
              </p>
              <BsArrowUpLeft className="text-[#49db49] rotate-90" size={17} />
              <span className="text-[#49db49] text-[10px] pl-2">+5.0%</span>
            </div>
          </div>
          <div className="inline-block rounded-sm mt-6 outline outline-1 outline-outline-color bg-foreground-color xl:w-[241px] w-[300px] ml-4">
            <div className="flex items-center  pl-3 m-0">
              <h5 className="font-medium text-custom-color6 pr-3 mb-0 pt-1">
                Total Revenue
              </h5>
              <GoInfo className="text-custom-color6" size={17} />
            </div>
            <div className="flex items-center  pl-3 mt-0">
              <p className="font-semibold text-custom-color1 text-[20px] pt-3 pr-2">
                $500,000
              </p>
              <BsArrowUpLeft className="text-[#49db49] rotate-90" size={17} />
              <span className="text-[#49db49] text-[10px] pl-2">+5.0%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
