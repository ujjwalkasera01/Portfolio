import React from "react";
import "./project.css";
import krishak from "../../assets/KrishakImage.jpg";
import healthhelp from "../../assets/HealthelpImage.jpg";
import happyplace from "../../assets/HappyPlaceImage.png";
import fitgo from "../../assets/FitGoImage.png";

export const Project = () => {
  return (
    <section className="card section" id="card">
      <div className="card--container container">
        <h2 className="section--title">Projects</h2>

        <div className="cards--container container">

          <article className="card--item">
            <div className="card--item-image">
              <img src={krishak} alt="" srcset="" />
            </div>
            <h3>Krishak Toolkit</h3>
            <div className="btnn">
              <div className="btn">Arduino</div>
              <div className="btn">IoT</div>
              <div className="btn">ML</div>
              <div className="btn">Flask</div>
              <div className="btn">Rest Api</div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={happyplace} alt="" srcset="" />
            </div>
            <h3>Happy Places</h3>
            <div className="btnn">
              <div className="btn">Kotlin</div>
              <div className="btn">Google Map Api</div>
              <div className="btn">Room Database</div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={healthhelp} alt="" srcset="" />
            </div>
            <h3>Health Help</h3>
            <div className="btnn">
              <div className="btn">HTML</div>
              <div className="btn">CSS</div>
              <div className="btn">React JS</div>
              <div className="btn">PHP</div>
              <div className="btn">MySql</div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={fitgo} alt="" srcset="" />
            </div>
            <h3>Fit Go</h3>
            <div className="btnn">
              <div className="btn">Kotlin</div>
              <div className="btn">Firebase</div>
              <div className="btn">Room Database</div>
            </div>
          </article>

          {/* ADD MORE PROJECTS */}

        </div>
      </div>
    </section>
  );
};
