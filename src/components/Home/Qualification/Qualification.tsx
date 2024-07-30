"use client";
// React
import React, { useState } from "react";
// CSS
import "./Qualification.css";

export default function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => setToggleState(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
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
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Courses
          </div>
        </div>

        <div className="qualification__sections">
          {/* 1 */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bangladesh Army University of Science and Technology
                </h3>
                <span className="qualification__subtitle">
                  Computer Science and Engineering
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2019 - 2021(Left the
                  university)
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Dinajpur Government City College
                </h3>
                <span className="qualification__subtitle">
                  Higher School Certificate (Science)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>Passing Year - 2018
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Dinajpur High School</h3>
                <span className="qualification__subtitle">
                  Secondary School Certificate (Science)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>Passing Year - 2016
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  <a
                    href="https://web.programming-hero.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Complete Web Development Course With Jhankar Mahbub
                  </a>
                </h3>
                <span className="qualification__subtitle">
                  Programming Hero
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  <a
                    href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    React - The Complete Guide (incl Hooks, React Router, Redux)
                  </a>
                </h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2022
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  <a
                    href="https://www.udemy.com/course/the-complete-javascript-course/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Complete JavaScript Course 2021: From Zero to Expert!
                  </a>
                </h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  <a
                    href="https://www.udemy.com/course/advanced-css-and-sass/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Advanced CSS and Sass: Flexbox, Grid, Animations and More!
                  </a>
                </h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  <a
                    href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Build Responsive Real-World Websites with HTML and CSS
                  </a>
                </h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
