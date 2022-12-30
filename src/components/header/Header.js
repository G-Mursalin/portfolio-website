// React
import React, { useState } from "react";
// React Router
import { Link } from "react-router-dom";
// CSS
import "./Header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 560) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Golam Mursalin
        </Link>

        <div className={`nav__menu ${toggle ? "show-menu" : ""}`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="home"
                className="nav__link active-link"
                onClick={() => setToggle(!toggle)}
              >
                Home
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="about"
                className="nav__link"
                onClick={() => setToggle(!toggle)}
              >
                About
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="skills"
                className="nav__link"
                onClick={() => setToggle(!toggle)}
              >
                Skills
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="services"
                className="nav__link"
                onClick={() => setToggle(!toggle)}
              >
                Services
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="projects"
                className="nav__link"
                onClick={() => setToggle(!toggle)}
              >
                Projects
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="contact"
                className="nav__link"
                onClick={() => setToggle(!toggle)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
