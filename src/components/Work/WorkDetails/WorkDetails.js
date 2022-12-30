// React
import React from "react";
import { projectsData } from "../ProjectsData";
// CSS
import "./WorkDetails.css";
// React Router
import { useParams } from "react-router-dom";

const WorkDetails = () => {
  const { id } = useParams();

  const {
    name,
    images,
    link,
    description,
    overView,
    technology,
    gitHubFrontEnd,
    gitHubBackEnd,
  } = projectsData.find((val) => val.id === id);

  return (
    <section className="section">
      <h2 className="section__title">{name}</h2>
      <span className="section__subtitle">{description}</span>
      <div className="work-details__container container grid">
        <div>
          {images.map((val) => (
            <div key={val.id} className="work-details-image__container">
              <h3>{val.title}:</h3>
              <img src={val.image} alt={val.title} />
            </div>
          ))}
        </div>
        <div className="work-details__data">
          <div className="work-details__live-preview">
            <a href={link} target="_blank">
              Live Preview
              <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
          </div>
          <div className="work-details__description">
            <h4>Project Overview:</h4>
            <ul>
              {overView.map((val, i) => (
                <li key={i}>{val}</li>
              ))}
            </ul>
          </div>
          <div className="work-details__technology">
            <h4>Technology Used:</h4>
            {technology.map((val, i) => (
              <span key={i}>{val}</span>
            ))}
          </div>
          <div className="work-details__github">
            {gitHubFrontEnd && (
              <div className="github__link-btn work-details__github-frontend">
                <a href={gitHubFrontEnd} target="_blank">
                  GitHub Frontend
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
              </div>
            )}
            {gitHubBackEnd && (
              <div className="github__link-btn work-details__github-frontend">
                <a href={gitHubBackEnd} target="_blank">
                  GitHub Backend
                  <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkDetails;
