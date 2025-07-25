import React from "react";
import title_background from "../assets/title_background.png";

import { useEffect, useState } from "react";
import axios from "axios";

function SuccessPage() {
  const [graduates, setGraduates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://6883a17021fa24876a9eb9e2.mockapi.io/graduatedStudents")
      .then((res) => {
        setGraduates(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching graduates:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>ჩატვირთვა...</div>;
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

      <ul>
        {graduates.map((graduate) => (
          <li key={graduate.id}>
            <a href={graduate.link}>
              {graduate.name} - {graduate.position} | {graduate.company}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SuccessPage;
