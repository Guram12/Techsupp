import "../styles/card.scss"
import { useState } from "react";



export default function CardAnimation() {

  const [activeTab, setActiveTab] = useState(1); // This state tracks the active tab

  const handleTabClick = (id) => {
    setActiveTab(id); // Update the active tab state
  };

  const serviceNames = ["ვებსაიტები", "IT", "ანალიტიკა", "რებრენდინგი", "ანიმაცია", "მენიუ"];

  const cardContents = [
    { title: "ვებსაიტები დამზადება", button_content: "დაწყვრილებით", content: "გთავაზობთ ნებისმიერი სირთულის ვებსაიტის დამზადებას თქვენი ბიზნესისთვის. ვებსაიტი შექმნა არის ერთ-ერთი პირველი ნაბიჯი ბიზნენის წარმატებისკენ" },
    { title: "IT მომსახურება", button_content: "დაწყვრილებით", content: "თქვენი ბიზნენის უწყვეტი მუშაობისთვის, ჩვენი გუნდი გაგიწევთ ნებისმიერი სირთულის IT მომსახურებას" },
    { title: "ბიზნეს ანალიტიკის ავტომატიზაცია", button_content: "დაწყვრილებით", content: "ბიზნეს ანალიტიკის ავტომატიზაცია დაგეხმარებათ რუტინული სამუშაოების თავიდან აცილებაში და დაზოგავს თქვენს დროს" },
    { title: "ბრენდინგი/რებრენდინგი", button_content: "დაწყვრილებით", content: "ბიზნესისთვის ახალი იმიჯის შექმნაში ჩვენი გუნდის კვალიფიციური პროფესიონალები დაგეხმარებიან" },
    { title: "ანიმაციური ფოტო/ვიდეო", button_content: "დაწყვრილებით", content: "ანიმაციური ფოტო/ვიდეოს აწყობა " },
    { title: "ონლაინ მენიუ", button_content: "დაწყვრილებით", content: "QR კოდიდით გახსნადი ონლაინ მენიუ თქვენი ბიზნესისტვის" },
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
    <div>
      <section className="page">
        <ul className="tabs-controls">
          {serviceNames.map((serviceName, i) => (
            <li key={i} className="tabs-controls__item">
              <a
                href="#!"
                className={`tabs-controls__link ${activeTab === i + 1 ? 'tabs-controls__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(i + 1); // Correctly set the active tab based on the clicked tab
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
                <h1>{card.title}</h1>
                <p style={{ marginTop: "10px" }} >{card.content}</p>
                <button className="cta">
                  <span class="hover-underline-animation"> {card.button_content} </span>
                  <svg
                    id="arrow-horizontal"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="10"
                    viewBox="0 0 46 16"
                  >
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      transform="translate(30)"
                    ></path>
                  </svg>
                </button>

              </div>
            ))}
          </section>

        </section>
      </section>
    </div>
  )
}

























