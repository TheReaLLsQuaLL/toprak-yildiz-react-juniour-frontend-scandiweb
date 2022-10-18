import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-navbar">
        <div className="header-navbar-left">
          <button className="header-navbar-left-button-woman">Women</button>
          <button className="header-navbar-left-button-men">Men</button>
          <button className="header-navbar-left-button-kids">Kids</button>
        </div>
        <img className="header-navbar-logo"></img>
        <div className="header-navbar-right">
          <button className="header-navbar-right-money"></button>
          <button className="header-navbar-right-card"></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
