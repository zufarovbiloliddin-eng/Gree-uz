import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/с.png";
const Header = () => {
  return (
    <div className=" bg-base-300">
      <div className="container mx-auto w-[85%]">
        <div className="flex items-center justify-between py-10 ">
          <figure>
            <Link to={"/"}>
              <img className="w-40" src={logo} alt="" />
            </Link>
          </figure>
          <ul className="flex itmes-center gap-10">
            <li>
              <Link to={"/"}>BOSH SAHIFA</Link>
            </li>
            <li>
              <Link to={"/About"}>KOMPANIYA HAQIDA </Link>
            </li>
            <li>
              <Link to={"/Contact"}>ALOQA</Link>
            </li>
            <li>
              <Link to={"/Delivery"}>YETKAZIB BERISH</Link>
            </li>
            <li>
              <Link to={"/Partners"}>HAMKOR BOLISH</Link>
            </li>
            <li>
              <a href="tel:+998946187788">+998946187788</a>
            </li>
          </ul>

          <div>
            <select
              defaultValue="Pick a font"
              className="select select-ghost rounded-xs outline-none bg-transparent w-[100px]"
            >
              <option>Rus</option>
              <option>O'zb</option>
              <option>Eng</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
