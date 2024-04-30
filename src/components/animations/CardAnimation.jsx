import "../styles/card.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CardAnimation({ activeTab, handleTabClick, isDarkmodeOn, tweenRef }) {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  const serviceNames = [
    "ვებსაიტები",
    "IT",
    "ანალიტიკა",
    "ბრენდინგი",
    "ანიმაცია",
    "QR მენიუ",
    "სოც. მედია",
  ];

  const cardContents = [
    {
      title: "ვებსაიტები დამზადება",
      button_content: "დაწყვრილებით",
      path: "/services/web-development",
      content:
        "გთავაზობთ ნებისმიერი სირთულის ვებსაიტის დამზადებას თქვენი ბიზნესისთვის. ვებსაიტი შექმნა არის ერთ-ერთი პირველი ნაბიჯი ბიზნენის წარმატებისკენ",
    },
    {
      title: "IT მომსახურება",
      button_content: "დაწყვრილებით",
      path: "/services/it",
      content:
        "თქვენი ბიზნენის უწყვეტი მუშაობისთვის, ჩვენი გუნდი გაგიწევთ ნებისმიერი სირთულის IT მომსახურებას",
    },
    {
      title: "ბიზნეს ანალიტიკის ავტომატიზაცია",
      path: "/services/analitycs",
      button_content: "დაწყვრილებით",
      content:
        "ბიზნეს ანალიტიკის ავტომატიზაცია დაგეხმარებათ რუტინული სამუშაოების თავიდან აცილებაში და დაზოგავს თქვენს დროს",
    },
    {
      title: "ბრენდინგი/რებრენდინგი",
      button_content: "დაწყვრილებით",
      path: "/services/brending",
      content:
        "ბიზნესისთვის ახალი იმიჯის შექმნაში ჩვენი გუნდის კვალიფიციური პროფესიონალები დაგეხმარებიან",
    },
    {
      title: "ანიმაციური ფოტო/ვიდეო",
      button_content: "დაწყვრილებით",
      path: "/services/animation",
      content:
        "მოუშენ დიზაინერის მომსახურება თქვენი ბრენდისთვის.   ანიმაციური ფოტო/ვიდეოს დამზადება თქვენი ბიზნესის რეკლამირებისთვის.  ტექსაპი გთავაზობთ, კვალიფიციური დიზაინერის მომსახურებას ხარისხიანი პროდუქტის შესაქმნელად.    ",
    },
    {
      title: "QR მენიუ",
      button_content: "დაწყვრილებით",
      path: "/services/menu",
      content:
        "შეთავაზება კაფე/ბარებს, რესტორნებს.     ტექსაპი დაგეხმარებათ, თქვენი ბიზნესისთვის QR მენიუს დამზადებაში და შესაბამისად, მომხმარებლებისთვის უფრო მაღალი ხარისხის მომსახურების შექმნაში.",
    },
    {
      title: "სოციალური მედია",
      button_content: "დაწყვრილებით",
      path: "/services/socialmedia",
      content:
        "ჩვენი გუნდი გთავაზობთ სოციალური მედიის (Facebook, Instagram, Linkedin) საშუალებით, გაზარდოთ თქვენი ბრენდის ცნობადობა და მოახდინოთ სწორი კომუნიკაცია მიზნობრივ აუდიტორიასთან.",
    },
  ];

  const getCardClassName = (index) => {
    // Base class for all cards
    let className = "card";
    // Apply 'card--current' to the active card and the first card always has 'card--current'
    if (activeTab === index + 1 || index === 0) {
      className += " card--current";
    }
    // Apply 'hidden' to all non-active cards that come before the active one
    // and to the first card when it's not active
    if (index < activeTab - 1 || (index === 0 && activeTab !== 1)) {
      className += " hidden";
    }

    return className;
  };

  return (
    <div className="mainpage_bigmom_container">
      <section className="page">
        <ul className="tabs-controls">
          {serviceNames.map((serviceName, i) => (
            <li key={i} className="tabs-controls__item">
              <a
                href="#!"

                className={`tabs-controls__link ${activeTab === i + 1 ? "tabs-controls__link--active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(i + 1);
                }}
                style={{ color: `${!isDarkmodeOn ? "white" : "black"}` }}
                data-id={i + 1}
              >
                {serviceName}
              </a>
            </li>
          ))}
        </ul>
        <section className="cards-container">
          <section className="cards-container"  >
            {cardContents.map((card, i) => (
              <div key={i} className={getCardClassName(i)} id={`${i + 1}`}
                style={{
                  backgroundColor: `${!isDarkmodeOn ? "black" : "white"}`,
                  border: `${isDarkmodeOn ? "1px solid #423e37" : "1px solid #b4b4b4"}`,
                  boxShadow: `${isDarkmodeOn ? "9px 11px 3px 0px rgba(0, 0, 0, 0.2)" : "9px 9px 3px 2px rgba(136, 132, 132, 0.164)"}`
                }}
              >
                <div className="card_content_child_container">
                  {/* pirveli shvili  */}
                  <div>
                    <h1
                      onMouseEnter={() => tweenRef.current.play()}
                      onMouseLeave={() => tweenRef.current.reverse()}
                      className="catd_h1_tag" style={{ color: ` ${isDarkmodeOn ? "black" : "white"}` }}  >{card.title}</h1>
                    <p
                      onMouseEnter={() => tweenRef.current.play()}
                      onMouseLeave={() => tweenRef.current.reverse()}
                      style={{ marginTop: "10px", color: ` ${isDarkmodeOn ? "black" : "white"}` }}  >
                      {card.content}
                    </p>
                  </div>

                  {/* meore shvili  */}
                  <div className="service_card_button_cont">
                    <button
                      className="learn-more"
                      onClick={() => handleButtonClick(card.path)}
                      onMouseEnter={() => tweenRef.current.play()}
                      onMouseLeave={() => tweenRef.current.reverse()}
                    >
                      <span className="circle" style={{ background: `${isDarkmodeOn ? "black" : "white"}` }} aria-hidden="true">
                        <span className={`icon ${isDarkmodeOn ? "arrow" : "arrow_dark"}`} />
                      </span>
                      <span className={`${isDarkmodeOn ? "button-text" : "button-text_dark"}`}  >დაწვრილებით</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      </section>
    </div>
  );
}




