import { useState } from "react";
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaTrophy,
} from "react-icons/fa";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const {
    data,
    achievements,
    setAchievements,
    changeLanguage,
    achievementAlert,
  } = props;
  const NavBarData = data.NavBar;

  const handleChangeLanguage = () => {
    changeLanguage();
    if (achievements.changeLanguage === false) {
      setAchievements({
        ...achievements,
        changeLanguage: true,
      });
      // second params if because if user change language data.App dont change.
      achievementAlert(
        data.App.unlock_achievement_changeLanguage,
        "Logro desbloqueado"
      );
    }
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img
          data-aos="fade-in"
          src={Logo}
          alt="Logo"
          style={{ width: "50px" }}
        />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:bg-pink-600 hover:transition ease-in-out delay-50">
          <Link to="home" smooth={true} duration={500}>
            {NavBarData.link_1}
          </Link>
        </li>
        <li className="hover:bg-pink-600 hover:transition ease-in-out delay-50">
          <Link to="about" smooth={true} duration={500}>
            {NavBarData.link_2}
          </Link>
        </li>
        <li className="hover:bg-pink-600 hover:transition ease-in-out delay-50">
          <Link to="skills" smooth={true} duration={500}>
            {NavBarData.link_3}
          </Link>
        </li>
        <li className="hover:bg-pink-600 hover:transition ease-in-out delay-50">
          <Link to="work" smooth={true} duration={500}>
            {NavBarData.link_4}
          </Link>
        </li>
        <li className="hover:bg-pink-600 hover:transition ease-in-out delay-50">
          <Link to="contact" smooth={true} duration={500}>
            {NavBarData.link_5}
          </Link>
        </li>
        <li className="hover:bg-pink-600 hover:transition ease-in-out delay-50">
          <button onClick={handleChangeLanguage}>
            {NavBarData.text_language}
          </button>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            {NavBarData.link_1}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            {NavBarData.link_2}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            {NavBarData.link_3}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            {NavBarData.link_4}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            {NavBarData.link_5}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <button onClick={changeLanguage}>{NavBarData.text_language}</button>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href={NavBarData.refLinkedin}
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href={NavBarData.refGithub}
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              {NavBarData.cv} <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-amber-500">
            <p
              className="flex justify-between items-center w-full text-gray-300"
              onClick={() => console.log("OPEN LOGROS")}
            >
              {NavBarData.text_achievements} <FaTrophy size={30} />
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
