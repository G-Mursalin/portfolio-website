// Components
import HandIcon from "./HandIcon";
import FilesIcon from "./FilesIcon";

export default function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title button--flex">
        Golam Mursalin
        <HandIcon />
      </h1>
      <h3 className="home__subtitle">Web Developer</h3>
      <p className="home__description">
        I thrive on solving complex problems and bringing ideas to life through
        code. Whether it&apos;s building a sleek, responsive website or creating
        a custom application, I&apos;m always up for a challenge and driven to
        exceed expectations.
      </p>
      <a
        download=""
        href="/assets/golam_mursalin.pdf"
        className="button button--flex"
      >
        Download Resume
        <FilesIcon />
      </a>
    </div>
  );
}
