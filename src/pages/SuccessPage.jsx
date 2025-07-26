import React from "react";
import title_background from "../assets/title_background.png";
import { useEffect, useState } from "react";
import axios from "axios";

import student_card1 from "../assets/student_card1.png";
import student_card2 from "../assets/student_card2.png";
import student_card4 from "../assets/student_card4.png";

function SuccessPage() {
  const [graduates, setGraduates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMoreCard, setShowMoreCard] = useState(false);

  useEffect(() => {
    axios
      .get("https://6883a17021fa24876a9eb9e2.mockapi.io/graduatedStudents")
      .then((res) => {
        setGraduates(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("შეცდომა");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>იტვირთება,გთხოვთ დაელოდოთ...</div>;
  }

  return (
    <>
      <div className="title-container">
        <img src={title_background} />
        <div className="line-text">
          <div className="line"></div>
          <h1>წარმატების ისტორიები</h1>
        </div>
      </div>

      <section className="success-section">
        <div className="student-card-container">
          <h2>WOMEN IN AI პროგრამის სტუდენტები</h2>

          <div className="student-cards">
            <div className="card1">
              <img src={student_card1} alt="student photo" />
              <div className="card-text">
                <h4 className="card-title">პროგრამა- Women in Ai</h4>
                <h5>წარმატებული სტუდენტი</h5>
                <h5>სალი გოგიშვილი</h5>
              </div>
            </div>
            <div className="card2">
              <img src={student_card2} alt="student photo" />
              <div className="card-text">
                <h4 className="card-title">პროგრამა- Women in Ai</h4>
                <h5>წარმატებული სტუდენტი</h5>
                <h5>ელენე ცქიტიშვილი</h5>
              </div>
            </div>
            <div className="card3">
              <img src={student_card2} alt="student photo" />
              <div className="card-text">
                <h4 className="card-title">პროგრამა- Women in Ai</h4>
                <h5>წარმატებული სტუდენტი</h5>
                <h5>ნენსი ნენსი</h5>
              </div>
            </div>
            <div className="card4">
              <img src={student_card4} alt="student photo" />
              <div className="card-text">
                <h4 className="card-title">პროგრამა- Women in Ai</h4>
                <h5>წარმატებული სტუდენტი</h5>
                <h5>სალომე მოსიავა</h5>
              </div>
            </div>
            {showMoreCard && (
              <>
                <div className="card5">
                  <img src={student_card4} alt="student photo" />
                  <div className="card-text">
                    <h4 className="card-title">პროგრამა- Women in Ai</h4>
                    <h5>წარმატებული სტუდენტი</h5>
                    <h5>სალომე მოსიავა</h5>
                  </div>
                </div>
                <div className="card6">
                  <img src={student_card4} alt="student photo" />
                  <div className="card-text">
                    <h4 className="card-title">პროგრამა- Women in Ai</h4>
                    <h5>წარმატებული სტუდენტი</h5>
                    <h5>სალომე მოსიავა</h5>
                  </div>
                </div>
                <div className="card7">
                  <img src={student_card4} alt="student photo" />
                  <div className="card-text">
                    <h4 className="card-title">პროგრამა- Women in Ai</h4>
                    <h5>წარმატებული სტუდენტი</h5>
                    <h5>სალომე მოსიავა</h5>
                  </div>
                </div>
                <div className="card8">
                  <img src={student_card4} alt="student photo" />
                  <div className="card-text">
                    <h4 className="card-title">პროგრამა- Women in Ai</h4>
                    <h5>წარმატებული სტუდენტი</h5>
                    <h5>სალომე მოსიავა</h5>
                  </div>
                </div>
                <div className="card9">
                  <img src={student_card4} alt="student photo" />
                  <div className="card-text">
                    <h4 className="card-title">პროგრამა- Women in Ai</h4>
                    <h5>წარმატებული სტუდენტი</h5>
                    <h5>სალომე მოსიავა</h5>
                  </div>
                </div>
                <div className="card10">
                  <img src={student_card4} alt="student photo" />
                  <div className="card-text">
                    <h4 className="card-title">პროგრამა- Women in Ai</h4>
                    <h5>წარმატებული სტუდენტი</h5>
                    <h5>სალომე მოსიავა</h5>
                  </div>
                </div>
              </>
            )}
          </div>
          <h4
            className="show-more-card"
            onClick={() => setShowMoreCard(!showMoreCard)}
          >
            გაიცანი, ყველა წარმატებული სტუდენტი...
          </h4>
        </div>

        <div className="student-list-container">
          <h2>
            კომპიუტერული მეცნიერებისა და ხელოვნური ინტელექტის ფაკულტეტის
            კურსდამთავრებულთა წარმატება
          </h2>
          <ul className="student-list">
            {graduates.map((graduate) => (
              <li key={graduate.id}>
                <a href={graduate.link}>
                  {graduate.name} - <strong>{graduate.position}</strong> |{" "}
                  {graduate.company}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default SuccessPage;
