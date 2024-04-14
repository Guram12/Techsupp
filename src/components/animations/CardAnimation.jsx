import "../styles/card.css"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



export default function CardAnimation() {

  const [activeTab, setActiveTab] = useState(1); // This state tracks the active tab

  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };


  const handleTabClick = (id) => {
    setActiveTab(id); // Update the active tab state
  };

  const serviceNames = ["ვებსაიტები", "IT", "ანალიტიკა", "რებრენდინგი", "ანიმაცია", "QR მენიუ"];

  const cardContents = [
    { title: "ვებსაიტები დამზადება", button_content: "დაწყვრილებით", path: "/services/web-development", content: "გთავაზობთ ნებისმიერი სირთულის ვებსაიტის დამზადებას თქვენი ბიზნესისთვის. ვებსაიტი შექმნა არის ერთ-ერთი პირველი ნაბიჯი ბიზნენის წარმატებისკენ" },
    { title: "IT მომსახურება", button_content: "დაწყვრილებით", path: "/services/it", content: "თქვენი ბიზნენის უწყვეტი მუშაობისთვის, ჩვენი გუნდი გაგიწევთ ნებისმიერი სირთულის IT მომსახურებას" },
    { title: "ბიზნეს ანალიტიკის ავტომატიზაცია", path: "/services/analitycs", button_content: "დაწყვრილებით", content: "ბიზნეს ანალიტიკის ავტომატიზაცია დაგეხმარებათ რუტინული სამუშაოების თავიდან აცილებაში და დაზოგავს თქვენს დროს" },
    { title: "ბრენდინგი/რებრენდინგი", button_content: "დაწყვრილებით", path: "/services/brending", content: "ბიზნესისთვის ახალი იმიჯის შექმნაში ჩვენი გუნდის კვალიფიციური პროფესიონალები დაგეხმარებიან" },
    { title: "ანიმაციური ფოტო/ვიდეო", button_content: "დაწყვრილებით", path: "/services/animation", content: "მოუშენ დიზაინერის მომსახურება თქვენი ბრენდისთვის.   ანიმაციური ფოტო/ვიდეოს დამზადება თქვენი ბიზნესის რეკლამირებისთვის.  ტექსაპი გთავაზობთ, კვალიფიციური დიზაინერის მომსახურებას ხარისხიანი პროდუქტის შესაქმნელად.    " },
    { title: "ონლაინ მენიუ", button_content: "დაწყვრილებით", path: "/services/menu", content: "შეთავაზება კაფე/ბარებს, რესტორნებს.     ტექსაპი დაგეხმარებათ, თქვენი ბიზნესისთვის QR მენიუს დამზადებაში და შესაბამისად, მომხმარებლებისთვის უფრო მაღალი ხარისხის მომსახურების შექმნაში." },
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
    if ((index < activeTab - 1) || (index === 0 && activeTab !== 1)) {
      className += " hidden";
    }

    return className;
  };


  return (
    <div className="mainpage_bigmom_container" >
      <section className="page">
        <ul className="tabs-controls">
          {serviceNames.map((serviceName, i) => (
            <li key={i} className="tabs-controls__item">
              <a
                href="#!"
                className={`tabs-controls__link ${activeTab === i + 1 ? 'tabs-controls__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(i + 1);
                }}
                data-id={i + 1}
              >
                {serviceName}
              </a>
            </li>
          ))}
        </ul>
        <section className="cards-container">
          <section className="cards-container">
            {cardContents.map((card, i) => (
              <div
                key={i}
                className={getCardClassName(i)}
                id={`${i + 1}`}
              >
                <div className="card_content_child_container" >
                  {/* pirveli shvili  */}
                  <div>
                    <h1 className="catd_h1_tag"  >{card.title}</h1>
                    <p  style={{ marginTop: "10px", color: "black" }} >{card.content}</p>
                  </div>

                  {/* meore shvili  */}
                  <div className="service_card_button_cont" >
                    <button className="learn-more" onClick={() => handleButtonClick(card.path)}>
                      <span className="circle" aria-hidden="true">
                        <span className="icon arrow" />
                      </span>
                      <span className="button-text">დაწვრილებით</span>
                    </button>
                  </div>
                </div>


              </div>
            ))}
          </section>

        </section>
      </section>
    </div>
  )
}

























