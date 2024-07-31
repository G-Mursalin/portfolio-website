// CSS
import "./project.css";
// Utils
import { projectsData, TImages } from "@/utils/projectsData";
// NextJS
import Image from "next/image";
// Icons
import { AiOutlineArrowRight } from "react-icons/ai";

type PropTypes = {
  params: {
    projectId: string;
  };
};

export default function ProjectDetailPage({ params }: PropTypes) {
  const project = projectsData.find((val) => val.id === params.projectId);

  return (
    <section className="section">
      <h2 className="section__title">{project?.name}</h2>
      <span className="section__subtitle">{project?.description}</span>
      <div className="work-details__container container grid">
        <div>
          {project?.images.map((val: TImages) => (
            <div key={val.id} className="work-details-image__container">
              <h3>{val.title}:</h3>
              <Image src={val.image} alt={val.title} />
            </div>
          ))}
        </div>
        <div className="work-details__data">
          <div className="work-details__live-preview">
            <a href={project?.link} target="_blank" rel="noreferrer">
              Live Preview
              <AiOutlineArrowRight className="work__button-icon" />
            </a>
          </div>
          <div className="work-details__description">
            <h4>Project Overview:</h4>
            <ul>
              {project?.overView.map((val: string) => (
                <li key={val}>{val}</li>
              ))}
            </ul>
          </div>
          <div className="work-details__technology">
            <h4>Technology Used:</h4>
            {project?.technology.map((val: string) => (
              <span key={val}>{val}</span>
            ))}
          </div>
          <div className="work-details__github">
            {project?.gitHubFrontEnd && (
              <div className="github__link-btn work-details__github-frontend">
                <a
                  href={project?.gitHubFrontEnd}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Frontend
                  <AiOutlineArrowRight className="work__button-icon" />
                </a>
              </div>
            )}
            {project?.gitHubBackEnd && (
              <div className="github__link-btn work-details__github-frontend">
                <a
                  href={project?.gitHubBackEnd}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Backend
                  <AiOutlineArrowRight className="work__button-icon" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
