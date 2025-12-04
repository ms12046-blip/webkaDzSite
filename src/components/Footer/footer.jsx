import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__column">
        <h3 className="footer__title">Полезные ссылки</h3>
        <a className="footer__link" href="#">Инструкция по CPR</a>
        <a className="footer__link" href="#">Техника остановки кровотечений</a>
        <a className="footer__link" href="#">Курс первой помощи</a>
      </div>

      <div className="footer__column">
        <h3 className="footer__title">Соцсети</h3>
        <a className="footer__social" href="#">Instagram</a>
        <a className="footer__social" href="#">YouTube</a>
        <a className="footer__social" href="#">Telegram</a>
      </div>
    </footer>
  );
};

export default Footer;
