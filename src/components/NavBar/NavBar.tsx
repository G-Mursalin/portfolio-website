// CSS
import "./NavBar.css";
// NextJS
import Link from "next/link";
// Components
import NavLinks from "./NavLinks";

export default function NavBar() {
  return (
    <header className="header">
      <nav className="nav container">
        <Link href="/" className="nav__logo">
          Golam Mursalin
        </Link>
        <NavLinks />
      </nav>
    </header>
  );
}
