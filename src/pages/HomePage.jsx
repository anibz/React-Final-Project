import React from "react";
import success1 from "../assets/success1.png";
import logo_Success from "../assets/logo_Success.png";
import success2 from "../assets/success2.png";
import success3 from "../assets/success3.png";
import success4 from "../assets/success4.png";

import women1 from "../assets/women1.png";
import women2 from "../assets/women2.png";
import women3 from "../assets/women3.png";
import women4 from "../assets/women4.png";

import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";

import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios
      .get("https://mockapi.io/clone/6883a17021fa24876a9eb9e3")
      .then((res) => setContent(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="homePage">
      <div className="carusel">
        <div id="carouselExample" class="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carousel1} class="d-block w-100" alt="carousel photo" />
            </div>
            <div className="carousel-item">
              <img src={carousel2} class="d-block w-100" alt="carousel photo" />
            </div>
            <div className="carousel-item">
              <img src={carousel3} class="d-block w-100" alt="carousel photo" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="ai-section">
        <div className="title">
          <h3>
            <span className="ai">AI</span> ბაკალავრის პროგრამა
          </h3>
          <div className="line"></div>
        </div>
        <div className="text-video">
          <div className="text">
            <ul>
              <li>ორი სადიპლომო პროგრამა</li>
              <li>
                BTU-ს კომპიუტერული მეცნიერება და ხელოვნური ინტელექტის
                საბაკალავრო პროგრამის სტუდენტებს შესაძლებლობა აქვთ ბოლო, მეოთხე
                აკადემიური წლის პარტნიორ უნივერსიტეტში გატარებით, ერთდროულად ორი
                უნივერსიტეტის დიპლომი მოიპოვონ.
              </li>
            </ul>
            <h3>
              კომპიუტერული მეცნიერება და ხელოვნური ინტელექტის საბაკალავრო
              პროგრამაზე დეტალური ინფორმაციის მისაღებად იხილეთ:
            </h3>
            <ul className="clicked">
              <li>
                <a href="https://drive.google.com/file/d/1JCFceATzAUG6eisFGXBhJw7VfXfeZ9e_/view">
                  პროგრამა
                </a>
              </li>
              <li>
                <a href="https://btu.edu.ge/wp-content/uploads/2024/07/programis-broshura.-komp.pdf">
                  პროგრამის ბროშურა
                </a>
              </li>
              <li>
                <a href="https://btu.edu.ge/wp-content/uploads/2024/07/gatsvlithi-komp.pdf">
                  გაცვლითი პროგრამები
                </a>
              </li>
            </ul>
          </div>
          <div className="video">
            <iframe
              width="517"
              height="284"
              src="https://www.youtube.com/embed/J61jhlMnn30?si=6Frb03i0Vl2fjNj7"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="success-stories">
        <div className="title">
          <h3>წარმატების ისტორიები</h3>
          <div className="line"></div>
        </div>

        <div className="card-container">
          <div className="card1">
            <img src={success1} alt="card" />
            <div className="card-info">
              <img src={logo_Success} alt="logo" />
              <p>გაცვლითი პროგრამების სტუდენტები</p>
            </div>
          </div>
          <div className="card2">
            <img src={success2} alt="card" />
            <div className="card-info">
              <img src={logo_Success} alt="logo" />
              <p className="different">კონკურსები და გამარჯვებები</p>
            </div>
          </div>
          <div className="card3">
            <img src={success3} alt="card" />
            <div className="card-info">
              <img src={logo_Success} alt="logo" />
              <p>სტარტაპ კატალოგი</p>
            </div>
          </div>
          <div className="card4">
            <img src={success4} alt="card" />
            <div className="card-info">
              <img src={logo_Success} alt="logo" />
              <p>კურსდამთავრებულთა წარმატება</p>
            </div>
          </div>
        </div>
      </div>
      <div className="women">
        <div className="title">
          <h3>ქალების გაძლიერების პროგრამები</h3>
          <div className="line"></div>
        </div>
        <div className="card-container">
          <div className="card1 card">
            <img src={women1} alt="card photo" />
            <p>
              1500 ქალის გადამზადება ტექნოლოგიებში - უმსხვილესი პროექტი BTU-ში
              USAID-თან პარტნიორობით ხორციელდება;
            </p>
          </div>
          <div className="card2 card">
            <img src={women2} alt="card photo" />
            <p>
              Women in AI-ის ფარგლებში, მთელი საქართველოს მასშტაბით 200 ქალი
              შეირჩა და 9 თვის განმავლობაში ხელოვნურ ინტელექტისა და
              ვებ-დეველოპმენტის მიმართულებებით გადამზადა.
            </p>
          </div>
          <div className="card3 card">
            <img src={women3} alt="card photo" />
            <p>
              საქართველოში მცხოვრები უკრაინელი ქალები ტექნოლოგიებს შეისწავლიან.
              პროექტს-BTU, გაეროს ქალთა ორგანიზაციისა და იაპონიის მთავრობის
              მხარდაჭერით განახორციელებს.
            </p>
          </div>
          <div className="card4 card">
            <img src={women4} alt="card photo" />
            <p>
              ევროკავშირის მიერ მხარდაჭერილი პროექტი „ქალების მენტორობა ტექ
              პროგრამებში’’ მიზნად ისახავს, სამი ნაკადის განმავლობაში, 1100
              ბენეფიციარისა და 320 მენტორის მოზიდვას.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
