import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegBuilding } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import { GrAchievement } from "react-icons/gr";
const Middle = () => {
  return (
    <div>
      <div className="hover-3d">
        {/* content */}
        <figure className="w-60 h-[300px] rounded-2xl flex items-center gap-10 flex-col p-10">
          <FaRegBuilding size={50} />
          <h1>18 заводов по всему миру</h1>
          <div className="w-[60px] h-[2px] rounded-2xl bg-sky-700"></div>
        </figure>
      </div>

      <div className="hover-3d">
        {/* content */}
        <figure className="w-60 h-[300px] rounded-2xl flex items-center gap-10 flex-col p-10">
          <SlChemistry size={50} />
          <h1>1411 лабораторий</h1>
          <div className="w-[60px] h-[2px] rounded-2xl bg-sky-700"></div>
        </figure>
        {/* 8 empty divs needed for the 3D effect */}
      </div>

      <div className="hover-3d">
        {/* content */}
        <figure className="w-60 h-[300px] rounded-2xl flex items-center gap-10 flex-col p-10 ">
          <GrAchievement size={50} />
          <h1>500 млн+ покупателей</h1>
          <div className="w-[60px] h-[2px] rounded-2xl bg-sky-700"></div>
        </figure>
        {/* 8 empty divs needed for the 3D effect */}
      </div>
    </div>
  );
};

export default Middle;
