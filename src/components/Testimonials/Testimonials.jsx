import React from "react";
import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <p className="testimonials-overview-text">OVERVIEW</p>
      <p className="testimonials-welcome-text">Welcome to Argen</p>
      <div className="testimonials-container">
        <div className="testimonials-container-1">
          <div className="testimonials-container-1-content">
            <p className="testimonials-container-1-content-productivity">
              productivity
            </p>
            <p className="testimonials-container-1-content-text">
              Focus on what is more important for your business and be more
              productive
            </p>
          </div>
          <img
            src="/Assets/Testimonials/girl.png"
            alt="girl-pic"
            className="testimonials-container-1-pic"
          />
        </div>
        <div className="testimonials-container-2">
          <p className="testimonials-container-2-quote">
            Let's build your next big idea with Argen Webflow Template Today!
          </p>
          <p className="testimonials-container-2-name">Checo Perez</p>
          <p className="testimonials-container-2-post">Tech Entrepreneur</p>
        </div>
        <div className="testimonials-container-3">
          <img
            src="/Assets/Testimonials/moneypot.png"
            alt="pot"
            className="testimonials-container-3-img"
          />
          <div className="testimonials-container-3-content">
            <p className="testimonials-container-3-save-text">SAVE</p>
            <p className="testimonials-container-3-text">
              Save time and money by not having to build your own webiste
            </p>
          </div>
        </div>
        <div className="testimonials-container-4">
          <p className="testimonials-container-4-97">97%</p>
          <p className="testimonials-container-4-text">
            Of our customers see an increase of productivity of 97% in the first
            month
          </p>
        </div>
      </div>
    </section>
  );
}
