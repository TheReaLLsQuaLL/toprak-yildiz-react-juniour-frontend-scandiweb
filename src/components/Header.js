import React from "react";
import "./Header.css";
import logo from "../img/a-logo.svg";
import card from "../img/Vector.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-navbar">
        <div className="header-navbar-left">
          <button className="header-navbar-left-button-women">women</button>
          <button className="header-navbar-left-button-men">men</button>
          <button className="header-navbar-left-button-kids">kids</button>
        </div>
        <img src={logo} className="header-navbar-logo"></img>
        <div className="header-navbar-right">
          <button className="header-navbar-right-money">$</button>
          <button className="header-navbar-right-card">
            <img src={card}></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
