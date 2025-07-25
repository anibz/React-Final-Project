import React from "react";
import Navigation from "./Navigation";
import facebook from "../assets/facebook.svg";
import gmail from "../assets/gmail.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import tiktok from "../assets/tiktok.svg";
import youtube from "../assets/youtube.svg";
import LOGO from "../assets/LOGO.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <div className="header-top">
          <p>
            <span className="colorful">BTU AI4Globe</span> საქართველოდან მთელს
            მსოფლიოში, <span className="colorful">AI </span>
            წიგნიერების გასაძლიერებლად
          </p>
          <div className="social-icons">
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
        <div className="header-bottom">
          <Link to="/">
            <img src={LOGO} alt="logo" />
          </Link>
          <Navigation />
        </div>
      </header>
    </>
  );
}

export default Header;
