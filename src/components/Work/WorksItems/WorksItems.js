// React
import React from "react";
// React Dom
import { Link } from "react-router-dom";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.mainImage} alt="" className="work__img" />
      <h3 className="work__title">{item.name}</h3>
      <div className="work__cart__button-container">
        <a
          href={item.link}
          target="_blank"
          className="work__button"
          rel="noreferrer"
        >
          View Live <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <Link to={`/projects/${item.id}`} className="work__button">
          View Details
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </Link>
      </div>
    </div>
  );
};

export default WorksItems;
