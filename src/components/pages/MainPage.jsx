// import LineAnimation from "../LineAnimation";
import "../styles/MainPage.css"
import "../styles/card.scss"
import { useState } from "react";


export default function mainPage({ showSplashScreen }) {

  const [activeTab, setActiveTab] = useState(1); // This state tracks the active tab

  const handleTabClick = (id) => {
    setActiveTab(id); // Update the active tab state
  };

  const serviceNames = ["ვებსაიტები", "IT", "ანალიტიკა", "რებრენდინგი", "ანიმაცია", "მენიუ"];

  const cardContents = [
    { title: "ვებსაიტები დამზადება", content: "გთავაზობთ ნებისმიერი სირთულის ვებსაიტის დამზადებას თქვენი ბიზნესისთვის. ვებსაიტი შექმნა არის ერთ-ერთი პირველი ნაბიჯი ბიზნენის წარმატებისკენ" },
    { title: "IT მომსახურება", content: "თქვენი ბიზნენის უწყვეტი მუშაობისთვის, ჩვენი გუნდი გაგიწევთ ნებისმიერი სირთულის IT მომსახურებას" },
    { title: "ბიზნეს ანალიტიკის ავტომატიზაცია", content: "ბიზნეს ანალიტიკის ავტომატიზაცია დაგეხმარებათ რუტინული სამუშაოების თავიდან აცილებაში და დაზოგავს თქვენს დროს" },
    { title: "ბრენდინგი/რებრენდინგი", content: "ბიზნესისთვის ახალი იმიჯის შექმნაში ჩვენი გუნდის კვალიფიციური პროფესიონალები დაგეხმარებიან" },
    { title: "ანიმაციური ფოტო/ვიდეო", content: "ანიმაციური ფოტო/ვიდეოს აწყობა " },
    { title: "ონლაინ მენიუ", content: "QR კოდიდით გახსნადი ონლაინ მენიუ თქვენი ბიზნესისტვის" },
  ];


  return (
    <div className="mainpage_cont" >
      <div className="service_animation_coontainer" >
        <div className="container">
          <div className="cube">
            <div style={{ '--x': '-1', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
            <div style={{ '--x': '0', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
            <div style={{ '--x': '1', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
          </div>
          <div className="cube">
            <div style={{ '--x': '-1', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
            <div style={{ '--x': '0', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
            <div style={{ '--x': '1', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
          </div>
          <div className="cube">
            <div style={{ '--x': '-1', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
            <div style={{ '--x': '0', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
            <div style={{ '--x': '1', '--y': '0' }}>
              <span style={{ '--i': '3' }}></span>
              <span style={{ '--i': '2' }}></span>
              <span style={{ '--i': '1' }}></span>
            </div>
          </div>
        </div>
      </div>
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
                  className={`card ${activeTab === i + 1 ? 'card--current' : 'hidden'}`} // Use 'hidden' class for inactive cards
                  id={`${i + 1}`}
                >
                  <h1>{card.title}</h1>
                  <p style={{marginTop: "10px"}} >{card.content}</p>
                </div>
              ))}
            </section>

          </section>
        </section>
      </div>
    </div>
  );
}











// no it is not working as i want, is the implementation of js correct ? 
// I  am aiming to achieve. that  original JavaScript code is managing a stack of cards where non-active cards are positioned behind the active card and are slightly visible
