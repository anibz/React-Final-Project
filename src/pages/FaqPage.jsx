import React from "react";
import title_background from "../assets/title_background.png";

import facebook from "../assets/facebook.svg";
import gmail from "../assets/gmail.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import tiktok from "../assets/tiktok.svg";
import youtube from "../assets/youtube.svg";

import toggle_plus from "../assets/toggle_plus.png";
import toggle_minus from "../assets/toggle_minus.svg";

import { useState } from "react";

import { Link } from "react-router-dom";

const faqData = [
  {
    id: "faq1",
    question: "AI ლექტორის დახმარებით, რა შემიძლია შევისწავლო?",
    answer:
      "AI ლექტორი დაგეხმარება კონკრეტული თემის, ალგორითმის ან ტექნოლოგიის უკეთ გაგებაში. მას შეუძლია მოგაწოდოს შესაფერისი რესურსები და აგიხსნას რთული ცნებები.",
  },
  {
    id: "faq2",
    question: "AI სასწავლო რესურსები და მათზე წვდომა?",
    answer:
      "BTU-ს პლატფორმა უზრუნველყოფს უფასო და ფასიან AI სასწავლო მასალებზე წვდომას, მათ შორის ვიდეო კურსებზე, სტატიებზე და სავარჯიშოებზე.",
  },
  {
    id: "faq3",
    question: "რას ემსახურება AI4GLOBE ინიციატივა",
    answer:
      "AI4Globe ახალი, საერთაშორისო ინიციატივაა, რომელიც გლობალურად, ხელოვნური ინტელექტის წიგნიერების ზრდას ისახავს მიზნად. პროექტი მნიშვნელოვანწილად ცვლის საგანმანათლებლო გამოცდილებას და ქმნის ხელოვნური ინტელექტის პოტენციალის რეალიზების ახალ შესაძლებლობებს.",
  },
  {
    id: "faq4",
    question: "AI ლექტორის დახმარებით, რა შემიძლია შევისწავლო?",
    answer:
      "AI ლექტორი დაგეხმარება კონკრეტული თემის, ალგორითმის ან ტექნოლოგიის უკეთ გაგებაში. მას შეუძლია მოგაწოდოს შესაფერისი რესურსები და აგიხსნას რთული ცნებები.",
  },
];

function FaqPage() {
  const [isOpen, setIsOpen] = useState(null);

  const toggleFaq = (id) => {
    setIsOpen(isOpen === id ? null : id);
  };

  return (
    <>
      <div className="title-container">
        <img src={title_background} />
        <div className="line-text">
          <div className="line"></div>
          <h1>ხშირად დასმული კითხვები</h1>
        </div>
      </div>

      <section>
        <div className="faq-section">
          <div className="section-title">
            <div className="title-socials">
              <div className="title-block">
                <h2 className="title">FAQ</h2>
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

          <div className="faq-list">
            <div className="list">
              <div className="vertical-line"></div>
              <Link to="/faq-ai-lab">
                <h3>AI ლაბორატორიები</h3>
              </Link>
            </div>
            <div className="list">
              <div className="vertical-line"></div>
              <Link to="/faq-kvlevebi">
                <h3>კვლევები</h3>
              </Link>
            </div>
            <div className="list">
              <div className="vertical-line"></div>
              <Link to="/faq-wigniereba">
                <h3>AI წიგნიერების სერია</h3>
              </Link>
            </div>
          </div>
        </div>

        <div className="learn-fast">
          <div className="section-title-without-socials">
            <h2 className="title">გაიგე სწრაფად</h2>
            <div className="line"></div>
          </div>
          {/* <div className="faq-list">
            <div className="list">
              <div className="vertical-line"></div>
              <h3>AI ლექტორის დახმარებით, რა შემიძლია შევისწავლო?</h3>
            </div>
            <div className="list">
              <div className="vertical-line"></div>
              <h3>AI სასწავლო რესურსები და მათზე წვდომა?</h3>
            </div>
            <div className="list">
              <div className="vertical-line"></div>
              <h3>რას ემსახურება AI4GLOBE ინიციატივა</h3>
            </div>
            <div className="list">
              <div className="vertical-line"></div>
              <h3>AI ლექტორის დახმარებით, რა შემიძლია შევისწავლო?</h3>
            </div>
          </div> */}

          <div className="faq-list">
            {faqData.map((item) => (
              <div key={item.id}>
                <div className="list" onClick={() => toggleFaq(item.id)}>
                  <div className="vertical-line"></div>
                  <div className="question-icon">
                    <h3>{item.question}</h3>
                    <img
                      src={isOpen === item.id ? toggle_minus : toggle_plus}
                      alt="toggle icon"
                    />
                  </div>
                </div>
                {isOpen === item.id && (
                  <p className="faq-answer">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqPage;
