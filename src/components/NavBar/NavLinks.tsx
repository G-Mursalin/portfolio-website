"use client";
// Icons
import { GrAppsRounded } from "react-icons/gr";
// NextJS
import { useEffect, useState } from "react";
import Link from "next/link";
// Utils
import { navLinks } from "@/utils/navLinks";

export default function NavLinks() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 400) header!.classList.add("scroll-header");
      else header!.classList.remove("scroll-header");
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`nav__menu ${toggle ? "show-menu" : ""}`}>
        <ul className="nav__list grid">
          {navLinks.map((link) => {
            console.log(link);
            return (
              <li key={link.id} className="nav__item">
                <Link
                  href={link.href}
                  className="nav__link active-link"
                  onClick={() => setToggle(!toggle)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <i
          className="uil uil-times nav__close"
          onClick={() => setToggle(!toggle)}
        ></i>
      </div>
      <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
        <GrAppsRounded />
      </div>
    </>
  );
}
