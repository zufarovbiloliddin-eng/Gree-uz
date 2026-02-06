import { Link } from "react-router-dom";
import logo from "../assets/с.png";
import Orb from "./Galaxy";
import Swiper from "../Components/Swiper";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

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
              <Link to={"/"}>{t("home")}</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link to={"/About"}>{t("about")}</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link to={"/Contact"}>{t("contact")}</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link to={"/Delivery"}>{t("delivery")}</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link to={"/Partners"}>{t("partners")}</Link>
            </li>
            <li className="hover:text-blue-800">
              <a href="tel:+998946187788">+998946187788</a>
            </li>
          </ul>

          <div>
            <select
              value={i18n.language}
              onChange={changeLanguage}
              className="select select-ghost rounded-xs outline-none bg-transparent w-[100px]"
            >
              <option value="uz">Uzb</option>
              <option value="ru">Rus</option>
              <option value="en">Eng</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
