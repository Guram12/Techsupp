import React, { useState, useEffect } from "react";
import "../styles/About.css";
import Footer from "../Header/Footer";
import AboutAnimation from "../animations/About_animation";
import { motion, useAnimation } from 'framer-motion';
import storkhome_image from "../../assets/storkhome_image.png"
import tsvrilmani_image from "../../assets/tsvrilmani.png"
import inova_image from "../../assets/inova.png"
import pos_terminal_image from "../../assets/pos_terminal_image.jpg"
import GoogleSheetEmbed from "../Google_mbd_component/Google_Sheet_MBD";
import Parallax from "../animations/Paralax";
import Modal from 'react-modal'; // This assumes you're using react-modal


export default function About({ isDarkmodeOn, handle_cursor_on_of, is_cursor_on }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const openModal = () => {
    setModalIsOpen(true);
    // handle_cursor_on_of()
  };

  const closeModal = () => {
    setModalIsOpen(false);
    // handle_cursor_on_of()
  };


  const initial = { y: 100, opacity: 0 };
  const animate = { y: 0, opacity: 1 };

  const transition = {
    type: 'spring',
    stiffness: 70,
    delay: 0.2
  }

  return (
    <div className="abut_container">
      <div  >
        <AboutAnimation />
      </div>
      <div className="about_text_container" >
        <motion.div className="about_text_child_container"
          initial={initial}
          animate={animate}
          transition={transition}
        >
          <h1 className="about_title" >ჩვენს შესახებ</h1>
          <p className="about_paragraph" >TechSupp-ი არის ქართული მრავალპროფილური სტარტაპი , რომელიც თქვენს ბიზნესს ახალ საფეხურზე აიყვანს,
            ჩვენი გუნდი დაგეხმარებათ, შექმნათ ახალი ვიზუალი თქვენი ბიზნესისთვის, განავითაროთ იგი, გაიმარტივოთ
            სამუშაო პროცესი და რაც მთავარია ყველანაირი წყვეტის გარეშე მიყვეთ საქმის კურსს. ჩვენი გუნდი იქნება
            თქვენი კომპასი ციფრულ ლაბირინთში.</p>
        </motion.div>
      </div>

      <div className="about_paralax_container" >
        <section>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>Your compass in the digital maze</Parallax>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>Your compass in the digital maze</Parallax>
        </section>
      </div>

      <div className="about_example_container" >
        {/* 1  konteineri  */}
        <div className="about_example_child_container">
          <img src={storkhome_image} alt="storkhom website logo" className="storkhome_image" />
          <div className="storkhome_title_and_p_cont" >
            <a href="https://www.storkhome.ge/hhomepage" target="_blank" rel="noopener noreferrer">
              <h1 className="storkhome_title">Storkhome</h1>
            </a>
            <p className="storkhome_paragraph" >StorkHome ახალი ინოვაციური პლატფორმაა ,
              სადაც მარტივად შეგიძლიათ მიიღოთ საბროკერო მომსახურება. საიტისთვის შეიქმნა
              უნიკალური დიზაინი და დაიწერა მრავალი უნიკალური ფუნქციონალი რომლის ნახვაც
              თავად საიტზეც შეგიძლიათ.</p>
          </div>
        </div>

        {/* 2  konteineri  */}
        <div className="about_example_child_container">
          <img src={tsvrilmani_image} alt="tsvrilmani website logo" className="storkhome_image" />
          <div className="storkhome_title_and_p_cont" >
            <a href="https://www.tsvrilmani.ge/" target="_blank" rel="noopener noreferrer">
              <h1 className="storkhome_title" >Tsvrilmani</h1>
            </a>
            <p className="storkhome_paragraph" >Tsvrilmani არის ახალი ონლაინ მაღაზია, სადაც
              მარტივად შეძლებთ სახლიდან სახლიდან გაუსვლელად შეიძინოთ საყოფაცხოვრებო ნივთები </p>
          </div>
        </div>

        {/* 3  konteineri  */}
        <div className="about_example_child_container">
          <img src={inova_image} alt="tsvrilmani website logo" className="storkhome_image" />
          <div className="storkhome_title_and_p_cont" >
            <a href="https://annatoloraia6a.wixsite.com/innovainvitro?fbclid=IwAR23S9mQC1kmPwK5uYgE_-_3CyvJQbRWicBJ_DF4v3huFLGIlMgFtH-m7Q4_aem_AfZvP2_sa3UmxmtNZnZqOCRhl6dPc8gHw3XikNGuo82A7Di_Px0ibavtjyA3IiWJQ1Vt-0XiZ70ONimmWeulTebf" target="_blank" rel="noopener noreferrer">
              <h1 className="storkhome_title" >Inova-invitro</h1>
            </a>
            <p className="storkhome_paragraph" >Tsvrilmani არის ახალი ონლაინ მაღაზია, სადაც
              მარტივად შეძლებთ სახლიდან სახლიდან გაუსვლელად შეიძინოთ საყოფაცხოვრებო ნივთები </p>
          </div>
        </div>

        <div style={{ width: "70% ", height: "2px", backgroundColor: `${isDarkmodeOn ? "black" : "white"}` }} >

        </div>

        {/* 4  konteineri  */}
        <div className="about_example_child_container">
            <img src={pos_terminal_image} alt="pos terminal image"  className="storkhome_image" />
          <div className="storkhome_title_and_p_cont  high_z_index" >
            <h1 className="storkhome_title" onClick={openModal} >POS Terminal</h1>
            <p className="storkhome_paragraph" >Tsvrilmani არის ახალი ონლაინ მაღაზია, სადაც
              მარტივად შეძლებთ სახლიდან სახლიდან გაუსვლელად შეიძინოთ საყოფაცხოვრებო ნივთები </p>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Google Sheet Modal"
            ariaHideApp={false}
            style={{
              content: {
                height: '90vh',
                width: '90vw',
                borderRadius: "1%",
              },
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)' 
              }
            }}
          >
            <button onClick={closeModal}>Close</button>
            <div style={{ height: "80%" }} >
              <GoogleSheetEmbed />
            </div>
          </Modal>
        </div>
      </div>

      
      <div className="footer_containet" >
        <Footer isDarkmodeOn={isDarkmodeOn} />

      </div>
    </div>
  );
}







