import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m45b3dl",
        "template_t4709yt",
        form.current,
        "FGiw7Vt3KDSdkbYI3"
      )
      e.target.reset()
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section--title">Get In Touch</h2>

      <div className="contact--container container grid">
        <div className="contact--content">
          <h3 className="contact--title">Talk to me</h3>

          <div className="contact--info">
            <div className="contact--card">
              <i className="bx bx-mail-send contact--card-icon"></i>

              <h3 className="contact--card-title">Email</h3>
              <span className="contact--card-data">
                itsujjwalkasera@gmail.com
              </span>

              <a href="mailto:itsujjwalkasera.com" className="contact--button">
                Write me
                <i className="bx bx-right-arrow-alt contact--button-icon"></i>
              </a>
            </div>

            <div className="contact--card">
              <i className="bx bx-phone contact--card-icon"></i>
              <h3 className="contact--card-title">Contact no.</h3>
              <span className="contact--card-data">+91-9519005460</span>
            </div>

            <div className="contact--card">
              <i className="bx bx-home contact--card-icon"></i>
              <h3 className="contact--card-title">Address</h3>
              <span className="contact--card-data">Ghaziabad, Uttar Pradesh</span>
            </div>
          </div>
        </div>

        <div className="contact--content">
          <h3 className="contact--title">Write me your project</h3>
          <form name="" ref={form} onSubmit={sendEmail} className="contact--form">
            <div className="contact--form-div">
              <label className="contact--form-tag" id="name">Name</label>
              <input
              required
                type="text"
                name="name"
                className="contact--form-input"
                placeholder="Enter your Name"
              />
            </div>
            <div className="contact--form-div">
              <label className="contact--form-tag">Email</label>
              <input
              required
                type="email"
                name="email"
                className="contact--form-input"
                placeholder="Enter your Email"
              />
            </div>
            <div className="contact--form-div contact--form-area">
              <label className="contact--form-tag">Message</label>
              <textarea
              required
                name="project"
                cols="30"
                rows="10"
                className="contact--form-input"
                placeholder="Describe your Query"
              ></textarea>
            </div>

            <button href="#contact" className="button button-flex" >
              Send message
              <i class="uil uil-message"></i>
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
}
