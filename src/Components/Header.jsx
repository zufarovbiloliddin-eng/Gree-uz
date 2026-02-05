import { Link } from "react-router-dom";
import logo from "../assets/с.png";
import Orb from "./Galaxy";
import Swiper from "../Components/Swiper";
const Header = () => {
  return (
    <div>
      <div className="container mx-auto w-[85%] relative z-20">
        <div className="flex items-center justify-between py-10">
          <figure>
            <Link to={"/"}>
              <img className="w-40" src={logo} alt="" />
            </Link>
          </figure>

          <ul className="flex items-center gap-10">
            <li className="hover:text-blue-800">
              <Link to={"/"}>BOSH SAHIFA</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link to={"/About"}>KOMPANIYA HAQIDA</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link to={"/Contact"}>ALOQA</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link to={"/Delivery"}>YETKAZIB BERISH</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link to={"/Partners"}>HAMKOR BOLISH</Link>
            </li>
            <li className="hover:text-blue-800">
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
