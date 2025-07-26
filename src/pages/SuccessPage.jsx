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

  const womenInAIStudents = [
    {
      id: "1",
      program: "პროგრამა- Women in Ai",
      title: "წარმატებული სტუდენტი",
      name: "სალი გოგიშვილი",
      imageUrl: student_card1,
    },
    {
      id: "2",
      program: "პროგრამა- Women in Ai",
      title: "წარმატებული სტუდენტი",
      name: "ელენე ცქიტიშვილი",
      imageUrl: student_card2,
    },
    {
      id: "3",
      program: "პროგრამა- Women in Ai",
      title: "წარმატებული სტუდენტი",
      name: "ნენსი ნენსი",
      imageUrl: student_card2,
    },
    {
      id: "4",
      program: "პროგრამა- Women in Ai",
      title: "წარმატებული სტუდენტი",
      name: "სალომე მოსიავა",
      imageUrl: student_card4,
    },

    {
      id: "5",
      program: "პროგრამა- Women in Ai",
      title: "წარმატებული სტუდენტი",
      name: "სალი გოგიშვილი",
      imageUrl: student_card2,
    },
    {
      id: "6",
      program: "პროგრამა- Women in Ai",
      title: "წარმატებული სტუდენტი",
      name: "სალი გოგიშვილი",
      imageUrl: student_card2,
    },
    {
      id: "7",
      program: "პროგრამა- Women in Ai",
      title: "წარმატებული სტუდენტი",
      name: "სალი გოგიშვილი",
      imageUrl: student_card2,
    },
    {
      id: "8",
      program: "პროგრამა- Women in Ai",
      title: "წარმატებული სტუდენტი",
      name: "სალი გოგიშვილი",
      imageUrl: student_card2,
    },
    {
      id: "9",
      program: "პროგრამა- Women in Ai",
      title: "წარმატებული სტუდენტი",
      name: "სალი გოგიშვილი",
      imageUrl: student_card2,
    },
    {
      id: "10",
      program: "პროგრამა- Women in Ai",
      title: "წარმატებული სტუდენტი",
      name: "სალი გოგიშვილი",
      imageUrl: student_card2,
    },
  ];

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
            {(showMoreCard
              ? womenInAIStudents
              : womenInAIStudents.slice(0, 4)
            ).map((student, index) => (
              <div key={student.id} className="card">
                <img src={student.imageUrl} alt="student photo" />
                <div className="card-text">
                  <h4 className="card-title">{student.program}</h4>
                  <div className="student-info">
                    <h5>{student.title}</h5>
                    <h5>{student.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {womenInAIStudents.length > 4 && (
            <h4
              className="show-more-card"
              onClick={() => setShowMoreCard(!showMoreCard)}
            >
              გაიცანი, ყველა წარმატებული სტუდენტი...
            </h4>
          )}
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
