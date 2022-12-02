// React
import React from "react";
// CSS
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mursalin</h1>
        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/golam__mursalin/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/golam__mursalin/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
        <div className="footer__copy">
          Copyright &copy; {new Date().getFullYear()} - All right reserved by
          Golam Mursalin
        </div>
      </div>
    </footer>
  );
};

export default Footer;
