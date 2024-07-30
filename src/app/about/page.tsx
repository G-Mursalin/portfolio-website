// CSS
import "./about.css";
// Components
import Info from "@/components/About/Info/Info";
import SendIcon from "@/components/About/SendIcon";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <Image
          src="/assets/golam-mursalin.jpg"
          width={350}
          height={300}
          alt="my-image"
          className="about__img"
        />
        <div className="about__data">
          <Info />
          <p className="about__description">
            I&apos;m always looking for new challenges and opportunities to grow
            my skills. I have a strong foundation in HTML, CSS, JavaScript,
            ReactJS, ExpressJS and MongoDB, and I&apos;m always looking to learn
            more about emerging technologies. In my spare time, I enjoy
            designing and building personal projects. I believe that the key to
            success in this field is a willingness to constantly learn and
            adapt, and that&apos;s a mindset that I bring to every project I
            work on.
          </p>
          <Link href="/contact" className="button button--flex home__btn">
            Say Hello
            <SendIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
