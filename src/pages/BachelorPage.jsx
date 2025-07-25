import React from "react";
import title_background from "../assets/title_background.png";
import gagzavna_button_icon from "../assets/gagzavna_button_icon.svg";

// import emailjs from "@emailjs/browser";
// import { useRef } from "react";

function BachelorPage() {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_yf4p3wf",
  //       "template_w2xvwos",
  //       form.current,
  //       "ZXjlnC1XO8yVe4yY7"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         alert("ფორმა წარმატებით გაიგზავნა!");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         alert("დაფიქსირდა შეცდომა.");
  //       }
  //     );
  // };

  return (
    <>
      <div className="title-container">
        <img src={title_background} />
        <div className="line-text">
          <div className="line"></div>
          <h1>AI საბაკალავრო პროგრამა</h1>
        </div>
      </div>

      <section>
        <div className="first-section">
          <div className="title1">
            <h3>
              <span className="colorful">BTU AI-ს</span> საბაკალავრო პროგრამა
            </h3>
          </div>
          <ul>
            <li>
              BTU-ს კომპიუტერული მეცნიერება და ხელოვნური ინტელექტის საბაკალავრო
              პროგრამის სტუდენტებს შესაძლებლობა აქვთ ბოლო, მეოთხე აკადემიური
              წლის პარტნიორ უნივერსიტეტში გატარებით, ერთდროულად ორი
              უნივერსიტეტის დიპლომი მოიპოვონ.
            </li>
          </ul>
          <p>
            ბიზნესისა და ტექნოლოგიების უნივერსიტეტს მნიშვნელოვანი წვლილი შეაქვს
            ქვეყანაში ხელოვნური ინტელექტის პოტენციალის ათვისებისა და წიგნიერების
            გავრცელებაში. <br />
            BTU-ში მოქმედებს ხელოვნური ინტელექტის ლაბორატორია, რომელიც 2018 წელს
            დაარსდა, მოქმედებს ხელოვნური ინტელექტის 2 პროგრამა, სადოქტორო და
            საბაკალავრო საფეხურზე. უნივერსიტეტის ბაზაზე იმართება უმსხვილესი
            კონკურსები და ჰაკათონები AI სფეროში, ასევე მიმდინარეობს
            მნიშვნელოვანი პროექტები, საერთაშორისო ორგანიზაციების მხარდაჭერით.
          </p>
        </div>

        <div className="second-section">
          <h3 className="title">
            პროგრამის მიზნები, ხანგრძლივობა და კრიტერიუმები
          </h3>
          <ul>
            <li>ერთიანი ეროვნული გამოცდების კოდი:1950105</li>
            <li>
              მისანიჭებელი აკადემიური ხარისხი და კვალიფიკაცია:კომპიუტერული
              მეცნიერების და ხელოვნური ინტელექტის ბაკალავრი Bachelor of Computer
              Science
            </li>
            <li>პროგრამის მოცულობა: 240 კრედიტი ECTS</li>
            <li>პროგრამის საფასური: 2950 ლარი</li>
            <li>პროგრამის სტატუსი: აკრედიტებული</li>
            <li>
              საგნები, რომლითაც ბარდება კომპიუტერული მეცნიერების საბაკალავრო
              პროგრამაზე: ქართული ენა და ლიტერატურა; ინგლისური ენა; მათემატიკა
              ან ფიზიკა.
            </li>
          </ul>
          <p>
            პროგრამის მიზანია მოამზადოს დასაქმებისა და განათლების ბაზარზე
            კონკურენტუნარიანი სპეციალისტი, მისცეს კომპიუტერული მეცნიერებისა და
            ხელოვნური ინტელექტის მიმართულებით თანამედროვე ცოდნა. გამოუმუშავოს
            რთული და კომპლექსური ალგორითმების გაანალიზების, ამოცანების
            გადაჭრისთვის შესაბამისი დაპროგრამების ენის არჩევის, სხვადასხვა
            რიცხვითი მეთოდების გამოყენებით გამოთვლების ჩატარების, ხელოვნური
            ინტელექტის მიმართულებით ახალი პროდუქტის შექმნაში მონაწილეობის
            მიღების, მეწარმეობის და ინოვაციების მართვის ცოდნაზე დაფუძნებით
            ტექნოლოგიური იდეების კომერციულ პროდუქტებად გარდაქმნის, დაინტერესებულ
            პირებთან კომუნიკაციის, საკუთარი საქმიანობის ეთიკის პრინციპების
            დაცვით განხორციელების და განვითარებაზე ორიენტირებული საქმის
            წარმართვის უნარი.
          </p>
        </div>

        <div className="third-section">
          <p>
            BTU-ში მოქმედებს ხელოვნური ინტელექტის ლაბორატორია, რომელიც 2018 წელს
            დაარსდა, მოქმედებს ხელოვნური ინტელექტის 2 პროგრამა, სადოქტორო და
            საბაკალავრო საფეხურზე. უნივერსიტეტის ბაზაზე იმართება უმსხვილესი
            კონკურსები და ჰაკათონები AI სფეროში, ასევე მიმდინარეობს
            მნიშვნელოვანი პროექტები, საერთაშორისო ორგანიზაციების მხარდაჭერით.
          </p>
          <ul>
            <li>
              <a href="https://btu.edu.ge/ai-marathoni/">
                სტუდენტური AI მარათონები
              </a>
            </li>
            <li>
              <a href="https://btu.edu.ge/women-in-ai/">Women in AI</a>
            </li>
            <li>
              <a href="https://btu.edu.ge/ai-lab-is-studenturi-phorumi/">
                სტუდენტური AI ფორუმები
              </a>
            </li>
          </ul>

          <p className="second-p">
            BTU-ში შეიქმნა სტუდენტების პირველი AI ასისტენტი ქვეყანაში
            -ClassroomAI, რომელიც მათ ეხმარება აკადემიური და სასწავლო პროცესის,
            ადმინისტრაციული საკითხების და სხვა მნიშნველოვანი პროცესების შესახებ
            ინფორმაციის მიღებაში. აღსანიშნია რომ ClasroomAI შექმნილია BTU-ს
            სტუდენტების მიერ.
          </p>
          <ul>
            <li>
              <a href="https://btu.edu.ge/sabakalavro-programebi/kompiuteruli-metsniereba-da-khelovnuri-inteleqti/">
                AI- ის ახალი საბაკალავრო პროგრამა კომპიუტერული მეცნიერებები და
                ხელოვნური ინტელექტი
              </a>
            </li>
            <li>
              <a href="https://btu.edu.ge/en/doqtorantura/tsiphruli-mmarthveloba-da-khelovnuri-inteleqti-sajaro-seqtorshi/">
                სადოქტორო პროგრამა - ციფრული მმართველობა და ხელოვნური ინტელექტი
              </a>
            </li>
            <p>
              ბიზნესისა და ტექნოლოგიების უნივერსიტეტი, ხელოვნური ინტელექტის
              სფეროში ატარებს მომზადება/გადამზადების პროგრამებს, ტრენინგებს და
              ვორკშოპებს სტუდენტებისთვის, კერძო და საჯარო სექტორისთის და სხვა.
            </p>
          </ul>
        </div>

        <div className="forth-section">
          <h3 className="title">დეტალური ინფორმაცია საგნების შესახებ.</h3>

          <ul>
            <li>
              <a href="https://drive.google.com/file/d/1w1sFWQ8Vk0fajmO1VDgMH5nL2cqscnCE/view">
                პროგრამა
              </a>
            </li>
          </ul>
        </div>

        <div className="fifth-section">
          <form>
            <p className="form-titlee">
              თუ ხელოვნური ინტელექტის საბაკალავრო პროგრამით ხართ დაინტერესებული,
              შეავსეთ ფორმა დამატებითი ინფორმაციისა და სიახლეების მისაღებად
            </p>

            <div className="form-grid">
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
                  გვარი <span className="fifqi">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="თქვენი გვარი"
                  required
                />
              </div>
              <div className="form-title">
                <label htmlFor="firstName">
                  ტელეფონი <span className="fifqi">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="ტელეფონის ნომერი"
                  required
                />
              </div>
              <div className="form-title">
                <label htmlFor="firstName">
                  ელ-ფოსტა <span className="fifqi">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="თქვენი ელ-ფოსტა"
                  required
                />
              </div>
            </div>

            <p>
              მსურს მივიღო ინფორმაცია BTU-ს სასწავლო პროგრამებისა და დაგეგმილი
              სამომავლო აქტივობების/ღონისძიებების შესახებ ელექტრონული ფოსტის,
              სატელეფონო კომუნიკაციის ან/და SMS-ის საშუალებით.
            </p>

            <div className="radio-button">
              <div className="radio-yes">
                <input
                  type="radio"
                  id="yes"
                  name="consent"
                  value="yes"
                  required
                />
                <label htmlFor="yes">კი</label>
              </div>

              <div className="radio-no">
                <input
                  type="radio"
                  id="no"
                  name="consent"
                  value="yes"
                  required
                />
                <label htmlFor="no">არა</label>
              </div>
            </div>
            <button>
              გაგზავნა <img src={gagzavna_button_icon} alt="arrow icon" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default BachelorPage;
