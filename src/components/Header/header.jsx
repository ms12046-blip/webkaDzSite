import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo" >Ambulance</div>

      <nav className="header__nav">
        <a href="#basics" className="header__link">Основы</a>
        <a href="#steps" className="header__link">Алгоритм</a>
        <a href="#contacts" className="header__link">Контакты</a>
      </nav>

      <button className="header__button">Sign in</button>
    </header>
  );
};

export default Header;
