import React from "react";
import footerLogo from "../assets/footerLogo.png";
import emailButton from "../assets/emailButton.svg";

function Footer() {
  const targetEmail = "anibzishvili5@gmail.com";
  return (
    <>
      <footer>
        <div className="footer-top">
          <img src={footerLogo} alt="logo" />
          <div className="footer-top-text">
            <p>
              ბიზნესისა და ტექნოლოგიების უნივერსიტეტი 2016 წლის 16 სექტემბერს
              დაარსდა.
            </p>
            <ul>
              <li>თბილისი 0162, საქართველო ი.ჭავჭავაძის გამზირი N82</li>
              <li>(+995 32) 2 195 015</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2024 - BTUSTUDENTS</p>
        </div>

        <div className="footer-right">
          <h3>მოგვწერე</h3>
          <div className="email-input-container">
            <input
              type="email"
              placeholder="Your Email"
              className="email-input"
            />
            <a href={`mailto:${targetEmail}`} className="email-send-link">
              <button className="email-button">
                <img src={emailButton} alt="logo" />
              </button>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
