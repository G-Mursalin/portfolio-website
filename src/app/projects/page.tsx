// CSS
import "./projects.css";
// Components
import Projects from "@/components/Projects/Projects";

export default function ProjectsPage() {
  return (
    <section className="work section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most Recent Work</span>
      <Projects />
    </section>
  );
}
