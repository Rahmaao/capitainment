// @ts-nocheck
import React from "react";

interface CategoriesProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const Categories: React.FC<CategoriesProps> = ({ text, isActive, onClick }) => {
  return (
    <a
      href="#"
      onClick={onClick}
      className={`min-w-[65px] h-[35px] lg:min-w-[75px] lg:h-[35px] px-2 rounded-full flex items-center justify-center font-normal text-xs transition duration-300 cursor-pointer ${
        isActive ? 'bg-[#3B3B3B] text-white border border-[#6C6C6C]' : 'bg-[#ECECEC] text-black border border-[#CECECE]'
      }`}
    >
      {text}
    </a>
  );
};

export default Categories;
