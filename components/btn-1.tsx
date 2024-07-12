import React from "react";

interface Btn1Props {
  text: string;
}

const Btn1: React.FC<Btn1Props> = ({ text }) => {
  return (
    <a
      href=""
      className="w-[131px] h-[40px] bg-[#BC1823] rounded-xl flex items-center justify-center text-white font-medium text-sm hover:bg-[#f9858d] transition duration-300"
    >
      {text}
    </a>
  );
};

export default Btn1;
