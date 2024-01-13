import React from "react";
import "./header.css";

export default function Header() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = React.useState(false);
  const [activeNav, setActiveNav] = React.useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav--logo">Ujjwal Kasera</a>

        <div className={Toggle ? "nav--menu show--menu" : "nav--menu"}>

          <ul className="nav--list grid">
            <li className="nav--item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav--link active-link" : "nav--link"
                }
              >
                <i className="uil uil-estate nav--icon"></i> Home
              </a>
            </li>

            <li className="nav--item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav--link active-link" : "nav--link"
                }
              >
                <i className="uil uil-user nav--icon"></i> About
              </a>
            </li>

            <li className="nav--item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav--link active-link"
                    : "nav--link"
                }
              >
                <i className="uil uil-file-alt nav--icon"></i> Skills
              </a>
            </li>

            <li className="nav--item">
              <a
                href="#educa"
                onClick={() => setActiveNav("#educa")}
                className={
                  activeNav === "#educa"
                    ? "nav--link active-link"
                    : "nav--link"
                }
              >
                <i className="uil uil-briefcase-alt nav--icon"></i> Qualifications
              </a>
            </li>

            <li className="nav--item">
              <a
                href="#card"
                onClick={() => setActiveNav("#card")}
                className={
                  activeNav === "#card" ? "nav--link active-link" : "nav--link"
                }
              >
                <i className="uil uil-scenery nav--icon"></i> Projects
              </a>
            </li>

            <li className="nav--item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav--link active-link" : "nav--link"
                }
              >
                <i className="uil uil-message nav--icon"></i> Contact
              </a>
            </li>
          </ul>
          
          <i
            className="uil uil-times nav--close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav--toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
