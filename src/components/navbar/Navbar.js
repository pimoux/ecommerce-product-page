import React from "react";
import menu from "../../assets/images/icon-menu.svg";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={menu} alt="menu" className="navbar-menu" />
      <img src={logo} alt="logo" className="navbar-logo" />
      <img src={cart} alt="cart" className="navbar-cart" />
      <img src={avatar} alt="avatar" className="navbar-avatar" />
    </div>
  );
};

export default Navbar;
