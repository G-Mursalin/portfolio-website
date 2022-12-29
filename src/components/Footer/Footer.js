// React
import React from "react";
// CSS
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__copy">
          Copyright &copy; {new Date().getFullYear()} - All right reserved by
          <b>&nbsp;Golam Mursalin</b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
