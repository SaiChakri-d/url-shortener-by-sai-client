import React from "react";
import { FaBars } from "react-icons/fa";
// import {GiStairsGoal} from "react-icons/gi"
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./navBar.css";

const data = [
  {
    label: "Home",
    to: "/application",
  },
  {
    label: "Create URL",
    to: "/createurl",
  },
  {
    label: "Show Table",
    to: "/showtable",
  },
  {
    label: "Logout",
    to: "/login",
  },
];
export const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/application"} className="navbar__container__logo">
            {/* <GiStairsGoal size={40} /> */}
            {"URL Shortner"}
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};
