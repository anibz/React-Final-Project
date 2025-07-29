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

function FaqAIKvlevebi() {
  return (
    <>
      <div className="title-container">
        <img src={title_background} />
        <div className="line-text">
          <div className="line"></div>
          <h1>AI კვლევები</h1>
        </div>
      </div>

      <section>
        <div className="section-title">
          <div className="title-socials">
            <div className="title-block">
              <h2 className="title">
                <span className="title-different">FAQ </span>/ AI კვლევები
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
          <div className="text">
            <ul>
              <li>
                ნინო ენუქიძე, მარი დგებუაძე -{" "}
                <a href="https://drive.google.com/file/d/1RCW7gCNx5zmFqI0lyslNAdGAwYEgejmF/view?usp=sharing">
                  ხელოვნური ინტელექტის განვითარების ეროვნული სტრატეგიის
                  შემუშავების საჭიროება საქართველოში{" "}
                </a>
              </li>
              <li>
                Khatuna Burkadze -{" "}
                <a href="https://lawandworld.ge/index.php/law/article/view/273">
                  The Legal Aspects of Artificial Intelligence based on the EU
                  Experience
                </a>
              </li>
              <li>
                Maia Melikidze -{" "}
                <a href="http://economicprofile.org/journal/1021">
                  Renewable (solar energy), Modern situation, economic
                  challenges, and the role of artificial intelligence
                </a>
              </li>
              <li>
                Zviad Gabisonia -{" "}
                <a href="https://justice.gov.ge/files/eY0oDTztsvBp.pdf">
                  NATURE OF ARTIFICIAL INTELLIGENCE AND THE PROBLEM OF
                  RECOGNISING IT AS A SUBJECT OF LAW
                </a>
              </li>
              <li>
                <a href="https://www.entrepreneur.com/ka/siakhleebi-da-tendentsiebi/khelovnuri-intelektis/444247?fbclid=IwAR2jsKSQAFi4yAV-a0qBMe3NEuZiYV99PQtotF8tfQ48fscuxSSK_lharfQ">
                  ხელოვნური ინტელექტის ეროვნული სტრატეგიის საჭიროებები,
                  შესაძლებლობები და რისკები
                </a>{" "}
                - BTU-ს დოქტორანტის კვლევითი ნაშრომი
              </li>
              <li>
                <a href="https://www.entrepreneur.com/ka/business-news/khelovnuri-intelekti/444148?fbclid=IwAR0cZlY1biEqpZFSbcNaS5yTCBVKO88ChihRxIfW16VEN_r5tBU2r8_B5HY">
                  ხელოვნური ინტელექტი განათლების სფეროში
                </a>{" "}
                - სტრატეგიის აუცილებლობა, შესაძლებლობები და რისკები - BTU-ს
                დოქტორანტის კვლევითი ნაშრომი
              </li>
              <li>
                <a href="https://www.entrepreneur.com/ka/business-news/khelovnuri-intelektis/444147?fbclid=IwAR1Z5De-iFBhx1EUUVJ2UTISki7NimP9rlesSJExpiCgohl-1Le4SVoQO6g">
                  ხელოვნური ინტელექტის ეროვნული სტრატეგიის საჭიროებები,
                  შესაძლებლობები და რისკები
                </a>{" "}
                - BTU-ს დოქტორანტის კვლევითი ნაშრომი
              </li>
              <li>
                <a href="https://www.entrepreneur.com/ka/siakhleebi-da-tendentsiebi/khelovnuri-intelektis/444246g">
                  ხელოვნური ინტელექტის მნიშვნელობა და მექანიზმი ინდუსტრიულ
                  რევოლუციაში
                </a>{" "}
                - BTU-ს სტუდენტის კვლევითი ნაშრომი
              </li>
            </ul>
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

export default FaqAIKvlevebi;
