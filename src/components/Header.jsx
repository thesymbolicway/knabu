import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import hero from "../assets/hero.png";



const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () =>
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);

  return (
    <>
      <div className="header-container">
      <div className="logo">
  <img src={hero} alt="Knabu logo" />
  KNABU
</div>
        <div className="menu">
          <div className="menu-links">
            <a href="/">Vision</a>
            <a href="/">What We Do</a>
            <a href="/">Team</a>
            <a href="/">Contact Us</a>
          </div>
        </div>
        <div className="wallet-btn">
          <button className="primary">Enter App</button>
        </div>
        <button className="hamburger" onClick={toggleExpanded}>
          <MenuIcon />
        </button>
      </div>
      {isExpanded && (
        <div className="menu-overlay">
          <div className="menu-links">
            <a href="/">App</a>
            <a href="/">Products</a>
            <a href="/">Build</a>
            <a href="/">Careers</a>
            <a href="/">About</a>
            <a href="/">Enter App</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
