// CSS
import "./skills.css";
// Components
import Frontend from "@/components/Skills/Frontend/Frontend";
import Backend from "@/components/Skills/Backend/Backend";

export default function SkillsPage() {
  return (
    <section className="skill section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Top Skills</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}
