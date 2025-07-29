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

function FaqAiLab() {
  return (
    <>
      <div className="title-container">
        <img src={title_background} />
        <div className="line-text">
          <div className="line"></div>
          <h1>AI ლაბორატორიები</h1>
        </div>
      </div>

      <section>
        <div className="section-title">
          <div className="title-socials">
            <div className="title-block">
              <h2 className="title">
                <span className="title-different">FAQ </span>/ AI ლაბორატორიები
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
            <p>
              BTU AI LAB - ხელოვნური ინტელექტის პირველი რეგიონალური ლაბორატორია.
              BTU-ს სტუდენტებს და ნებისმიერ დაინტერესებულ ადამიანს აქვს
              საშუალება მსოფლიოს წამყვან IT კომპანიებთან ითანამშრომლონ და
              მათთვის საინტერესო პროდუქტი განავითარონ.BTU AI LAB თანამშრომლობს
              ხელოვნური ინტელექტის ბიზნესასოციაცია{" "}
              <a href="https://www.aigeorgia.ge/">ai georgia</a>
              -სთან, რომელიც აქტიურად მუშაობს ქვეყანაში ხელოვნური ინტელექტის
              ეროვნული სტრატეგიის შექმნის, AI-ს ქვეყნის სტრატეგიულ სექტორებში და
              ბიზნესინდუსტრიებში ინტეგრაციის, სამეცნიერო კვლევების მხარდაჭერის
              და ინტერნაციონალიზაციის მიმართულებით. ბიზნესისა და ტექნოლოგიების
              უნივერსიტეტის AI LAB-ის ბაზაზე მომზადდა:
            </p>
            <ul>
              <li>
                BTU-ს სტუდენტის მიერ დაარსებული კომპანია SYSTEM CORP-ის მიერ{" "}
                <a href="https://www.youtube.com/playlist?list=PLLReDJtJiSt_YVw4_VK5QKmyYw-4ZSRkM">
                  ავატარის ვიდეო ლექციები:{" "}
                </a>
                მეწარმეობის, ტექნოლოგიებისა და ინოვაციების მიმართულებით.
              </li>
            </ul>
            <p>BTU AI LAB - ის ბაზაზე ჩატარდა:</p>
            <ul>
              <li>
                <a href="https://btu.edu.ge/btu-ai-lab-is-gadamzadebis-kursebi-sachuqrad-da-qveqhnis-ganvitharebisthvis-mnishvnelovani-proeqtebi/">
                  ხელოვნური ინტელექტის მიმართულებით გადამზადების კურსი საჩუქრად
                  ქალებისთვის
                </a>{" "}
                - ბიზნესისა და ტექნოლოგიების უნივერსიტეტის ინიციატივითა და
                აშშ-ის საელჩოს მხარდაჭერით
              </li>
              <li>
                <a href="https://btu.edu.ge/btu-ai-lab-is-gadamzadebis-kursebi-sachuqrad-da-qveqhnis-ganvitharebisthvis-mnishvnelovani-proeqtebi/">
                  მონაცემთა ანალიტიკის მიმართულებით გადამზადების პროგრამა,
                </a>{" "}
                ყველა ბენეფიციარისთვის, სრულად დაფინანსებული ბიზნესისა და
                ტექნოლოგიების უნივერსიტეტის მიერ.
              </li>
              <li>
                <a href="https://btu.edu.ge/btu-ai-lab-is-gadamzadebis-kursebi-sachuqrad-da-qveqhnis-ganvitharebisthvis-mnishvnelovani-proeqtebi/">
                  ხელოვნური ინტელექტის მიმართულებით გადამზადება, პროგრამაში
                  მონაწილე ყველა ბენეფიციარისთვის,
                </a>{" "}
                სრულად დაფინანსებული ბიზნესისა და ტექნოლოგიების უნივერსიტეტის
                მიერ
              </li>
              <li>
                „ბიზნესისა და ტექნოლოგიების უნივერსიტეტმა“ AI LAB-ის ბაზაზე
                კიდევ ერთი პროექტის განხორციელება გერმანულ კომპანია
                KnowledgeTools International GmbH-სა და Maxin AI-თან ერთად
                დაიწყო, რაც{" "}
                <a href="https://btu.edu.ge/btu-ai-lab-germanuli-knowledgetools-international-gmbh-isthvis-ai-gadatsqhvetilebas-qmnis/">
                  ქართული შრიფტისთვის სრულყოფილ OCR პროგრამის შექმნაზე
                </a>{" "}
                მუშაობას გულისხმობს, რომლის შედეგადაც დასკანერებულ დოკუმენტებში
                შეცდომის გარეშე მოხდება ტექსტის წაკითხვა. პროექტი ბიზნესისა და
                ტექნოლოგიების უნივერსიტეტის AI LAB-ის დახმარებითა და უშუალო
                მონაწილეობით განხორციელდება.
              </li>
              <li>
                გაეროს ხელოვნური ინტელექტის და რობოტიქსის ცენტრის ხელმძღვანელის{" "}
                <a href="https://btu.edu.ge/rogor-inergeba-khelovnuri-inteleqti-globalurad-da-ra-momavali-aqvs-mas-irakli-beridzis-masterklasi-btu-shi/">
                  მასტერკლასი
                </a>{" "}
                და პანელური დისკუსია ციფრული მმართველობის შესახებ
              </li>
              <li>
                <a href="https://www.entrepreneur.com/ka/siakhleebi-da-tendentsiebi/btu-shi-studenturi/443891">
                  Pulsar AI ჰაკათონი
                </a>{" "}
                - ხელოვნური ინტელექტის მიმართულებით, BTU-ს სტუდენტებისთვის
              </li>
              <li>
                AI Book Series პრეზენტაცია -
                <a href="https://www.marketer.ge/ai-marketing-the-future-of-customer-engagement-btu/">
                  blah
                </a>
              </li>
              <li>
                პანელური დისკუსია{" "}
                <a href="https://www.facebook.com/BTUGEORGIA/posts/pfbid02QNd76k5d51a7FmBhyH34HaenGdL21GFUostHAminCWVAFqK5PSQSRBzQ4iXLXfy2l">
                  Beyond Human: The Advancements of ChatGPT and GPT-3
                </a>
              </li>
              <li>
                უმსხვილესი სტუდენტური{" "}
                <a href="https://www.interpressnews.ge/ka/article/788195-btu-m-umsxvilesi-studenturi-ai-hackathon-chaatara">
                  AI ჰაკათონი
                </a>{" "}
                - სადაც საქართველოს მასშტაბით, 22 უნივერსიტეტიდან სტუდენტებმა
                შექმნეს ხელოვნური ინტელექტის პროდუქტები/სერვისები, რომლებიც
                დააინტეგრირეს საგანმანათლებლო სექტორში. გამარჯვებულმა
                სტუდენტებმა 20 000 ლარიანი საპრიზო ფონდიდან მიიღეს ინვესტიციები.
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

export default FaqAiLab;
