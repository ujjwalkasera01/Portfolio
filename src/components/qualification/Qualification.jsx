import React from "react";
import "./qualification.css";

export const Qualification = () => {
  const [toggleState, setToggleState] = React.useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="educa section" id="educa">
      <h2 className="section--title">Qualifications</h2>
      <div className="educa--container container">
        <div className="educa--tabs">

          <div
            className={
              toggleState === 1
                ? "educa--button educa--active button--flex"
                : "educa--button button--flex"
            }
            onClick={() => toggleTab(1)}
            >
            <i className="uil uil-briefcase-alt educa--icon"></i>Experience
          </div>

          <div
            className={
              toggleState === 2
                ? "educa--button educa--active button--flex"
                : "educa--button button--flex"
            }
            onClick={() => toggleTab(2)}
            >
            <i className="uil uil-graduation-cap educa--icon"></i>Education
          </div>

        </div>

        <div className="educa--sections">

          <div
            className={
              toggleState === 1
                ? "educa--content educa--content-active"
                : "educa--content"
            }
            >
            <div className="educa--data">
              <div>
                <h3 className="educa--title">Co-founder</h3>
                <span className="educa--subtitle">
                  Krishak Enterprises
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> April 2023 - Present
                </div>
              </div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
            </div>

            <div className="educa--data">         
              <div></div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
              <div>
                <h3 className="educa--title">Head Coordinator</h3>
                <span className="educa--subtitle">
                  Society of Automotive Engineers-AKGEC
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> May 2022 - Present
                </div>
              </div>         
            </div> 

            <div className="educa--data">
              <div>
                <h3 className="educa--title">Python Intern</h3>
                <span className="educa--subtitle">
                  ShapeMySkills Pvt Ltd.
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> Sep 2021 - Oct 2021
                </div>
              </div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
            </div>

            <div className="educa--data">         
              <div></div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
              <div>
                <h3 className="educa--title">Open Source Contributor</h3>
                <span className="educa--subtitle">
                Hactoberfest
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> Oct 2023
                </div>
              </div>         
            </div> 

          </div>

          <div
            className={
              toggleState === 2
                ? "educa--content educa--content-active"
                : "educa--content"
            }
          >
            <div className="educa--data">
              <div>
                <h3 className="educa--title">Under Graduation</h3>
                <span className="educa--subtitle">
                  Ajay Kumar Garg Engineering School, Ghaziabad <br></br>(CGPA- 7.57)
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2024
                </div>
              </div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
            </div>

            <div className="educa--data">
              <div></div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
              <div>
                <h3 className="educa--title">Senior Secondary Education (CBSE)</h3>
                <span className="educa--subtitle">
                  Lions School, Mirzapur (Percentage- 92.50%)
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2019
                </div>
              </div>
            </div>

            <div className="educa--data">
              <div>
                <h3 className="educa--title">High School Education (CBSE)</h3>
                <span className="educa--subtitle">
                  Lions School, Mirzapur (Percentage- 91.60%)
                </span>
                <div className="educa--calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div>
              <div>
                <span className="educa--rounder"></span>
                <span className="educa--line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
