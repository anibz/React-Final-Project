import React from "react";
import title_background from "../assets/title_background.png";

function AboutPage() {
  return (
    <>
      <div className="title-container">
        <img src={title_background} />
        <div className="line-text">
          <div className="line"></div>
          <h1>ჩვენ შესახებ</h1>
        </div>
      </div>

      <section className="about-section">
        <div className="about-section1">
          <div className="about-section-left">1</div>
          <div className="about-section-right"></div>
        </div>

        <div className="about-section2"></div>
        <div className="about-section"></div>
      </section>
    </>
  );
}

export default AboutPage;
