import React from "react";
import title_background from "../assets/title_background.png";

function AboutPage() {
  return (
    <>
      <div className="title-container">
        <img src={title_background} />
        <div className="line-text">
          <div className="line"></div>
          <h1>ჩვენ შესახებ</h1>
        </div>
      </div>

      <section>
        <div className="about-section">
          <div className="about-section-left">
            <div className="circle">1</div>
            <div className="left-line"></div>
          </div>
          <div className="about-section-right">
            <div className="title">
              <h4>
                <span className="colored">BTU AI</span> მისია და ხედვა
              </h4>
            </div>
            <div className="text">
              შევთავაზოთ საზოგადოებას უნიკალური გამოცდილება ბიზნესისა და
              საინფორმაციო ტექნოლოგიების სფეროებში მისი მოლოდინების შესატყვისი
              თანამედროვე უმაღლესი განათლება, განვავითაროთ პიროვნების ლიდერული
              და სამეწარმეო უნარ-ჩვევები, სამეწარმეო ეკოსისტემის შექმნისა და
              ბიზნესის მაღალ ტექნოლოგიებთან ინტეგრირების გზით მივცეთ არა მხოლოდ
              ლოკალურ, არამედ საერთაშორისო ბაზარზეც კონკურენტუნარიანობის
              მოტივაცია და შესაძლებლობა. სამეცნიერო კვლევების შედეგების,
              იდეებისა და ინოვაციების გაცვლით მოვახდინოთ ჩვენი პოტენციალის
              დემონსტრირება გლობალურ ბაზრებზე, ვიყოთ ორიენტირებულნი თანამედროვე
              ცოდნის შექმნაზე და გავრცელებაზე, საერთაშორისო სივრცეში
              ინტეგრირებაზე და საქართველოს სოციალურ-ეკონომიკური განვითარების
              ხელშეწყობაზე. უნივერსიტეტის მიზანი უნივერსიტ
            </div>
          </div>
        </div>
        <div className="about-section">
          <div className="about-section-left">
            <div className="circle">2</div>
            <div className="left-line"></div>
          </div>
          <div className="about-section-right">
            <div className="title">
              <h4>
                <span className="colored">BTU AI</span> ისტორია
              </h4>
            </div>
            <div className="text">
              ბიზნესისა და ტექნოლოგიების უნივერსიტეტს მნიშვნელოვანი წვლილი
              შეაქვს ქვეყანაში ხელოვნური ინტელექტის პოტენციალის ათვისებისა და
              წიგნიერების გავრცელებაში. BTU-ში მოქმედებს ხელოვნური ინტელექტის
              ლაბორატორია, რომელიც 2018 წელს დაარსდა, მოქმედებს ხელოვნური
              ინტელექტის 2 პროგრამა, სადოქტორო და საბაკალავრო საფეხურზე.
              უნივერსიტეტის ბაზაზე იმართება უმსხვილესი კონკურსები და ჰაკათონები
              AI სფეროში, ასევე მიმდინარეობს მნიშვნელოვანი პროექტები,
              საერთაშორისო ორგანიზაციების მხარდაჭერით.
            </div>
          </div>
        </div>
        <div className="about-section">
          <div className="about-section-left">
            <div className="circle">3</div>
            <div className="left-line"></div>
          </div>
          <div className="about-section-right">
            <div className="title">
              <h4>
                <span className="colored">BTU AI-ს</span> საერთაშორისო
                პარტნიონები და თანამშრომლობა
              </h4>
            </div>
            <div className="text">
              AI4Globe ახალი, საერთაშორისო ინიციატივაა, რომელიც გლობალურად,
              ხელოვნური ინტელექტის წიგნიერების ზრდას ისახავს მიზნად. პროექტი
              მნიშვნელოვანწილად ცვლის საგანმანათლებლო გამოცდილებას და ქმნის
              ხელოვნური ინტელექტის პოტენციალის რეალიზების ახალ შესაძლებლობებს.
              უნიკალური და ყოვლისმომცველი საგანმანათლებლო აქტივობებით,
              საერთაშორისო პარტნიორებით, მულტიმედია და სხვა რესურსებით,
              ხელმისაწვდომი გახდება ფართო საზოგადოებისთვის, მათ შორის,
              ბავშვებისთვის, ახალგაზრდებისა და ქალებისთვის და ინტეგრირდება
              აკადემიურ სივრცესა და კერძო სექტორში. პროექტი პირველ ეტაპზე
              საქართველოში განხორციელდება, შემდგომში კი გაზიარდება და
              გავრცელდება საერთაშორისო სივრცეში. AI4GLOBE - ის 4 მიზნობრივი
              ჯგუფია:
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
