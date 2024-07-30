"use client";
// React
import React, { useState } from "react";
// CSS
import "./NavBar.css";
import Link from "next/link";

export default function NavBar() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 560) header!.classList.add("scroll-header");
    else header!.classList.remove("scroll-header");
  });

  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <Link href="/" className="nav__logo">
          Golam Mursalin
        </Link>

        <div className={`nav__menu ${toggle ? "show-menu" : ""}`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                href="home"
                className="nav__link active-link"
                onClick={() => setToggle(!toggle)}
              >
                Home
              </Link>
            </li>

            <li className="nav__item">
              <Link
                href="about"
                className="nav__link"
                onClick={() => setToggle(!toggle)}
              >
                About
              </Link>
            </li>

            <li className="nav__item">
              <Link
                href="skills"
                className="nav__link"
                onClick={() => setToggle(!toggle)}
              >
                Skills
              </Link>
            </li>

            <li className="nav__item">
              <Link
                href="services"
                className="nav__link"
                onClick={() => setToggle(!toggle)}
              >
                Services
              </Link>
            </li>

            <li className="nav__item">
              <Link
                href="projects"
                className="nav__link"
                onClick={() => setToggle(!toggle)}
              >
                Projects
              </Link>
            </li>

            <li className="nav__item">
              <Link
                href="contact"
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
}
