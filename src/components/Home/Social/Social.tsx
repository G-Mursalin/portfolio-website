// components/Social.js
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa6";

export default function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.facebook.com/golammursalin360/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.linkedin.com/in/golam-mursalin-7912871b2/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/G-Mursalin/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
}
