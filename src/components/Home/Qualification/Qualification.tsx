// CSS
import "./Qualification.css";
// Components
import QualificationTabs from "./QualificationTabs";

export default function Qualification() {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <QualificationTabs />
      </div>
    </section>
  );
}
