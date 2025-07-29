import React from "react";
import title_background from "../assets/title_background.png";

import telepone from "../assets/telepone.svg";
import location from "../assets/location.png";
import email from "../assets/email.svg";
import map from "../assets/map.png";

import gagzavna_button_icon from "../assets/gagzavna_button_icon.svg";

import facebook from "../assets/facebook.svg";
import gmail from "../assets/gmail.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import tiktok from "../assets/tiktok.svg";
import youtube from "../assets/youtube.svg";

function ContactPage() {
  return (
    <>
      <div className="title-container">
        <img src={title_background} />
        <div className="line-text">
          <div className="line"></div>
          <h1>კონტაქტი</h1>
        </div>
      </div>

      <section>
        <div className="section-title">
          <div className="title-socials">
            <div className="title-block">
              <h2 className="title">საკონტაქტო ინფორმაცია</h2>
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

        <div className="contact-container">
          <p className="contact-title">
            ცხელი ხაზის სამუშაო საათებია ორშაბათიდან პარასკევის ჩათვლით
            10:00-18:00 საათამდე.
          </p>
          <div className="contact-info">
            <div className="telepone-info">
              <div>
                <img src={telepone} alt="telepone icon" />
              </div>
              <div className="text">
                <h3>ტელეფონი</h3>
                <h4>(+995 32) 2 195 015</h4>
              </div>
            </div>
            <div className="telepone-info">
              <div>
                <img src={location} alt="telepone icon" />
              </div>
              <div className="text">
                <h3>მისამართი</h3>
                <div className="address-text">
                  <h4>თბილისი 0162, საქართველო ი.ჭავჭავაძის გამზირი N82</h4>
                  <h4>
                    ჩვენს კამპუსამდე მოსვლა შესაძლებელია: ავტობუსით #173 #345
                    #351 ან მიკროავტობუსით #449 #450
                  </h4>
                </div>
              </div>
            </div>
            <div className="telepone-info">
              <div>
                <img src={email} alt="telepone icon" />
              </div>
              <div className="text">
                <h3>ელ.ფოსტა</h3>
                <h4 className="mail">
                  <a href="mailto:anibzishvili5@gmail.com"></a>info@btu.edu.ge
                </h4>
              </div>
            </div>
          </div>
          <div className="map">
            <img src={map} alt="map" />
          </div>
        </div>

        <div className="section-title-without-socials">
          <h2 className="title">მოგვწერე</h2>
          <div className="line"></div>
        </div>

        <form>
          <p className="form-titlee">
            თუ გსურს დამატებით ინფორმაციის მიღება, შეავსე ფორმა
          </p>
          <div className="form-grid">
            <div className="first-row">
              <div className="form-title">
                <label htmlFor="firstName">
                  სახელი <span className="fifqi">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="თქვენი სახელი"
                  required
                />
              </div>
              <div className="form-title">
                <label htmlFor="firstName">
                  ელ.ფოსტა <span className="fifqi">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="თქვენი ელ.ფოსტა"
                  required
                />
              </div>
            </div>

            <div className="form-title">
              <label htmlFor="firstName">
                ტექსტი <span className="fifqi">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="ტექსტი..."
              ></textarea>
            </div>
          </div>
          <button>
            გაგზავნა <img src={gagzavna_button_icon} alt="arrow icon" />
          </button>
        </form>
      </section>
    </>
  );
}

export default ContactPage;
