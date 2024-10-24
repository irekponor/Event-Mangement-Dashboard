import React from "react";

interface propsType {
  size: string;
}
const Badge: React.FC<propsType> = ({ size }) => {
  return (
    <div
      className={`bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid 
      place-items-center`}
    >
      {3}
    </div>
  );
};

export default Badge;
