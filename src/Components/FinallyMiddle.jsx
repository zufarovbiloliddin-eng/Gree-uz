import React from "react";
import { IoKey } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import { HiCurrencyDollar } from "react-icons/hi2";
const FinallyMiddle = () => {
  return (
    <div>
      <div className="hover-3d ">
        {/* content */}
        <figure className=" w-60 h-[300px] rounded-2xl flex items-center gap-10 flex-col p-10">
          <IoKey size={80} />
          <h1>18 заводов по всему миру</h1>
          <div className="w-[60px] h-[2px] rounded-2xl bg-sky-700"></div>
        </figure>
      </div>

      <div className="hover-3d">
        {/* content */}
        <figure className="w-60 h-[300px] rounded-2xl flex items-center gap-10 flex-col p-10">
          <LuFileSpreadsheet size={80} />
          <h1>18 заводов по всему миру</h1>
          <div className="w-[60px] h-[2px] rounded-2xl bg-sky-700"></div>
        </figure>
      </div>

      <div className="hover-3d">
        {/* content */}
        <figure className="w-60 h-[300px] rounded-2xl flex items-center gap-10 flex-col p-10">
          <HiCurrencyDollar size={80} />
          <h1>18 заводов по всему миру</h1>

          <div className="w-[60px] h-[2px] rounded-2xl bg-sky-700"></div>
        </figure>
      </div>
    </div>
  );
};

export default FinallyMiddle;
