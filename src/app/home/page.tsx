// CSS
import "./home.css";
// Components
import Data from "@/components/Home/Data/Data";
import Qualification from "@/components/Home/Qualification/Qualification";
import ScrollDown from "@/components/Home/ScrollDown/ScrollDown";
import Social from "@/components/Home/Social/Social";

export default function HomePage() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
      <Qualification />
    </section>
  );
}
