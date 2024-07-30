"use client";
// NextJS
import { useState } from "react";
// Icons
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";
// Utils
import { courseLinks } from "@/utils/courseLinks";
import { educationLinks } from "@/utils/educationLinks";

export default function QualificationTabs() {
  const [toggleState, setToggleState] = useState(1);

  return (
    <>
      {/* Buttons */}
      <div className="qualification__tabs">
        <div
          className={
            toggleState === 1
              ? "qualification__button qualification__active button--flex"
              : "qualification__button button--flex"
          }
          onClick={() => setToggleState(1)}
        >
          <FaGraduationCap className="qualification__icon" />
          Education
        </div>
        <div
          className={
            toggleState === 2
              ? "qualification__button qualification__active button--flex"
              : "qualification__button button--flex"
          }
          onClick={() => setToggleState(2)}
        >
          <FaBriefcase className="qualification__icon" />
          Courses
        </div>
      </div>
      {/*Education / Courses */}
      <div className="qualification__sections">
        {/* Education Content */}
        <div
          className={
            toggleState === 1
              ? "qualification__content qualification__content-active"
              : "qualification__content"
          }
        >
          {educationLinks
            .slice()
            .reverse()
            .map((link) => {
              if (link.id % 2 !== 0) {
                return (
                  <div key={link.id} className="qualification__data">
                    <div>
                      <h3 className="qualification__title">{link.name}</h3>
                      <span className="qualification__subtitle">
                        {link.subject}
                      </span>
                      <div className="qualification__calender">
                        <i className="uil uil-calendar-alt"></i>
                        {link.year}
                      </div>
                    </div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={link.id} className="qualification__data">
                    <div></div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>
                    <div>
                      <h3 className="qualification__title">{link.name}</h3>
                      <span className="qualification__subtitle">
                        {link.subject}
                      </span>
                      <div className="qualification__calender">
                        <i className="uil uil-calendar-alt"></i> {link.year}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
        {/* Courses Content */}
        <div
          className={
            toggleState === 2
              ? "qualification__content qualification__content-active"
              : "qualification__content"
          }
        >
          {courseLinks
            .slice()
            .reverse()
            .map((link) => {
              if (link.id % 2 !== 0) {
                return (
                  <div key={link.id} className="qualification__data">
                    <div>
                      <h3 className="qualification__title">
                        <a href={link.link} target="_blank" rel="noreferrer">
                          {link.name}
                        </a>
                      </h3>
                      <span className="qualification__subtitle">
                        {link.organization}
                      </span>
                      <div className="qualification__calender">
                        <i className="uil uil-calendar-alt"></i>
                        {link.year}
                      </div>
                    </div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={link.id} className="qualification__data">
                    <div></div>
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>
                    <div>
                      <h3 className="qualification__title">
                        <a href={link.link} target="_blank" rel="noreferrer">
                          {link.name}
                        </a>
                      </h3>
                      <span className="qualification__subtitle">
                        {link.organization}
                      </span>
                      <div className="qualification__calender">
                        <i className="uil uil-calendar-alt"></i>
                        {link.year}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
}
