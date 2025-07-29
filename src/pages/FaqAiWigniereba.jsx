import React from "react";

import title_background from "../assets/title_background.png";

import facebook from "../assets/facebook.svg";
import gmail from "../assets/gmail.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import tiktok from "../assets/tiktok.svg";
import youtube from "../assets/youtube.svg";

import lab1 from "../assets/lab1.png";
import lab2 from "../assets/lab2.png";
import lab3 from "../assets/lab3.png";

import wigniereba1 from "../assets/wigniereba1.png";
import wigniereba2 from "../assets/wigniereba2.png";
import wigniereba3 from "../assets/wigniereba3.png";

function FaqAiWigniereba() {
  return (
    <>
      <div className="title-container">
        <img src={title_background} />
        <div className="line-text">
          <div className="line"></div>
          <h1>AI წიგნიერება</h1>
        </div>
      </div>

      <section>
        <div className="section-title">
          <div className="title-socials">
            <div className="title-block">
              <h2 className="title">
                <span className="title-different">FAQ </span>/ AI წიგნიერება
              </h2>
            </div>
            <div className="socials">
              <a href="https://www.facebook.com/BTUGEORGIA/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://www.linkedin.com/school/business-and-technology-university-%E2%80%A2-btu/?originalSubdomain=ge">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="https://www.instagram.com/btugeorgia/">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="https://www.tiktok.com/@btu.university">
                <img src={tiktok} alt="tiktok" />
              </a>
              <a href="https://www.youtube.com/@btu-businessandtechnologyu6589">
                <img src={youtube} alt="youtube" />
              </a>
              <a href="mailto:info@btu.edu.ge">
                <img src={gmail} alt="gmail" />
              </a>
            </div>
          </div>
          <div className="line"></div>
        </div>

        <div className="content-container">
          <div className="main-images">
            <div className="card">
              <img src={wigniereba1} alt="card image" />
              <a href="https://chrome-extension//kdpelmjpfafjppnhbloffcjpeomlnpah/https://btu.edu.ge/wp-content/uploads/2023/03/AI-MArketing-book-Geo-.pdf">
                AI მომხმარებელთა ჩართულობისთვის
              </a>
            </div>
            <div className="card">
              <img src={wigniereba2} alt="card image" />

              <h3>USE OF AI IN BUSINESS</h3>
            </div>
            <div className="card">
              <img src={wigniereba3} alt="card image" />
              <a href="https://chrome-extension//kdpelmjpfafjppnhbloffcjpeomlnpah/https://btu.edu.ge/wp-content/uploads/2023/03/AI-in-Education.docx.pdf">
                AI IN EDUCATION
              </a>
            </div>
            <div className="card">
              <img src={wigniereba3} alt="card image" />
              <a href="https://chrome-extension//kdpelmjpfafjppnhbloffcjpeomlnpah/https://btu.edu.ge/wp-content/uploads/2023/03/AI-in-Education.docx.pdf">
                AI IN EDUCATION
              </a>
            </div>
          </div>
          <div className="images-container">
            <div className="images-card">
              <img src={lab1} alt="uni photo" />
              <a href="https://www.figma.com/exit?url=https%3A%2F%2Fbtu.edu.ge%2Ftreningebi-da-vorqshophebi-khelovnuri-inteleqtis-mimarthulebith%2F">
                ტრენინგები და ვორქშოფები ხელოვნური ინტელექტის მიმართულებით
              </a>
            </div>

            <div className="images-card">
              <img src={lab2} alt="uni photo" />
              <a href="https://btu.edu.ge/btu-ai-sustainability-lab-podkastebis-seria/">
                BTU AI - Sustainability Lab პოდკასტების სერია!
              </a>
            </div>

            <div className="images-card">
              <img src={lab3} alt="uni photo" />
              <a href="https://btu.edu.ge/rogor-gamoviqheno-khelovnuri-inteleqti-ghia-treningi-qhvela-msurvelisthvis-btu-shi/">
                როგორ გამოვიყენო ხელოვნური ინტელექტი-ტრენინგი btu-ში!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqAiWigniereba;
