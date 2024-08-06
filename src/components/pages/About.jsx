import React, { useState, useEffect } from "react";
import "../styles/About.css";
import Footer from "../Header/Footer";
import AboutAnimation from "../animations/About_animation";
import { motion, useAnimation } from "framer-motion";
import storkhome_image from "../../assets/storkhome_image.png";
import tsvrilmani_image from "../../assets/tsvrilmani.png";
import inova_image from "../../assets/inova.png";
import pos_terminal_image from "../../assets/pos_terminal_image.jpg";
import GoogleSheetEmbed from "../Google_mbd_component/Google_Sheet_MBD";
import Parallax from "../animations/Paralax";
import Modal from "react-modal"; // This assumes you're using react-modal
import transition from "../Header/Transition";
import chaburgili_image from "../../assets/chaburgili.png"
import oneinone_image from  "../../assets/1inone.png"

const About = ({ isDarkmodeOn, handle_cursor_on_of, is_cursor_on, tweenRef }) => {
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
    type: "spring",
    stiffness: 70,
    delay: 0.2,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="abut_container">
      <div>
        <AboutAnimation isDarkmodeOn={isDarkmodeOn} />
      </div>
      <div className="about_text_container ">
        <motion.div
          className={`about_text_child_container ${!isDarkmodeOn ? "about_dark" : "about_light"
            }`}
          initial={initial}
          animate={animate}
          transition={transition}
          style={{ color: "white" }}
        >
          <h1
            onMouseEnter={() => tweenRef.current.play()}
            onMouseLeave={() => tweenRef.current.reverse()}
            className="about_title"
            style={{ color: `${!isDarkmodeOn ? "white" : " black"}` }}
          >
            ჩვენს შესახებ
          </h1>
          <p
            onMouseEnter={() => tweenRef.current.play()}
            onMouseLeave={() => tweenRef.current.reverse()}
            className="about_paragraph"
            style={{ color: `${!isDarkmodeOn ? "white" : " black"}` }}
          >
            TechSupp არის ქართული მრავალპროფილური სტარტაპი , რომელიც თქვენს
            ბიზნესს ახალ საფეხურზე აიყვანს, ჩვენი გუნდი დაგეხმარებათ, შექმნათ
            ახალი ვიზუალი თქვენი ბიზნესისთვის, განავითაროთ იგი, გაიმარტივოთ
            სამუშაო პროცესი და რაც მთავარია ყველანაირი წყვეტის გარეშე მიყვეთ
            საქმის კურსს. ჩვენი გუნდი იქნება თქვენი კომპასი ციფრულ ლაბირინთში.
          </p>
        </motion.div>
      </div>

      <div className="about_paralax_container">
        <section>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5} tweenRef={tweenRef} > Your compass in the digital maze</Parallax>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={5} tweenRef={tweenRef} > Your compass in the digital maze</Parallax>
        </section>
      </div>

      <div className="about_example_container">


        {/* 1  konteineri  */}
        <div className="about_example_child_container">
          <img
            src={storkhome_image}
            alt="storkhom website logo"
            className="storkhome_image"
          />
          <div
            className={`storkhome_title_and_p_cont ${!isDarkmodeOn ? "title_p_dark" : "title_p_light"
              }  `}
          >
            <a
              href="https://www.storkhome.ge/hhomepage"
              target="_blank"
              rel="noopener noreferrer">
              <h1 className={`storkhome_title ${!isDarkmodeOn ? "title_p_dark" : "title_p_light"} `}
                onMouseEnter={() => tweenRef.current.play()}
                onMouseLeave={() => tweenRef.current.reverse()}
              >
                Storkhome
              </h1>
            </a>
            <p className="storkhome_paragraph"
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
            >
              StorkHome ახალი ინოვაციური პლატფორმაა , სადაც მარტივად შეგიძლიათ
              მიიღოთ საბროკერო მომსახურება. საიტისთვის შეიქმნა უნიკალური დიზაინი
              და დაიწერა მრავალი უნიკალური ფუნქციონალი რომლის ნახვაც თავად
              საიტზეც შეგიძლიათ.
            </p>
          </div>
        </div>


{/* ===================================================================================================================================== */}

        {/* 2  konteineri 
        <div className="about_example_child_container">
          <img
            src={tsvrilmani_image}
            alt="tsvrilmani website logo"
            className="storkhome_image"
          />
          <div
            className={`storkhome_title_and_p_cont ${!isDarkmodeOn ? "title_p_dark" : "title_p_light"
              }  `}
          >
            <a
              href="https://www.tsvrilmani.ge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1
                onMouseEnter={() => tweenRef.current.play()}
                onMouseLeave={() => tweenRef.current.reverse()}
                className={`storkhome_title ${!isDarkmodeOn ? "title_p_dark" : "title_p_light"} `}
              >
                Tsvrilmani
              </h1>
            </a>
            <p
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="storkhome_paragraph">
              Tsvrilmani არის ახალი ონლაინ მაღაზია, სადაც მარტივად შეძლებთ
              სახლიდან  გაუსვლელად შეიძინოთ საყოფაცხოვრებო ნივთები{" "}
            </p>
          </div>
        </div> */}

{/* ===================================================================================================================================== */}


        {/* 3  konteineri  */}
        <div className="about_example_child_container">
          <img
            src={oneinone_image}
            alt="tsvrilmani website logo"
            className="storkhome_image"
          />
          <div
            className={`storkhome_title_and_p_cont ${!isDarkmodeOn ? "title_p_dark" : "title_p_light"}`} >
            <a
              href="https://www.1inone.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1
                onMouseEnter={() => tweenRef.current.play()}
                onMouseLeave={() => tweenRef.current.reverse()}
                className={`storkhome_title ${!isDarkmodeOn ? "title_p_dark" : "title_p_light"} `}
              >
                1inone
              </h1>
            </a>
            <p
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="storkhome_paragraph">
              1inone გთავაზობთ ექსკლუზიურ სარეკლამო მომსახურებას ერთ კომპანიასთან თითო ქვეყანაში, მათი ლოგოს ჩვენებით მსოფლიო რუკაზე.
            </p>
          </div>
        </div>

{/* ===================================================================================================================================== */}

        {/* 4  konteineri  */}
        <div className="about_example_child_container">
          <img
            src={chaburgili_image}
            alt="tsvrilmani website logo"
            className="storkhome_image"
          />
          <div
            className={`storkhome_title_and_p_cont ${!isDarkmodeOn ? "title_p_dark" : "title_p_light"}`} >
            <a
              href="https://www.waterwellflow.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1
                onMouseEnter={() => tweenRef.current.play()}
                onMouseLeave={() => tweenRef.current.reverse()}
                className={`storkhome_title ${!isDarkmodeOn ? "title_p_dark" : "title_p_light"} `}
              >
                waterwellflow
              </h1>
            </a>
            <p
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="storkhome_paragraph">
              ჭაბურღილების მშენებლობა საყოფაცხოვრებო და საწარმო საჭიროებებისთვის
            </p>
          </div>
        </div>

{/* ===================================================================================================================================== */}

        {/* 5  konteineri  */}
        <div className="about_example_child_container">
          <img
            src={inova_image}
            alt="tsvrilmani website logo"
            className="storkhome_image"
          />
          <div
            className={`storkhome_title_and_p_cont ${!isDarkmodeOn ? "title_p_dark" : "title_p_light"}`} >
            <a
              href="https://annatoloraia6a.wixsite.com/innovainvitro?fbclid=IwAR23S9mQC1kmPwK5uYgE_-_3CyvJQbRWicBJ_DF4v3huFLGIlMgFtH-m7Q4_aem_AfZvP2_sa3UmxmtNZnZqOCRhl6dPc8gHw3XikNGuo82A7Di_Px0ibavtjyA3IiWJQ1Vt-0XiZ70ONimmWeulTebf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1
                onMouseEnter={() => tweenRef.current.play()}
                onMouseLeave={() => tweenRef.current.reverse()}
                className={`storkhome_title ${!isDarkmodeOn ? "title_p_dark" : "title_p_light"} `}
              >
                Inova-invitro
              </h1>
            </a>
            <p
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="storkhome_paragraph">
              კლინიკა Innovainvitro - ს დაკვეთით სერულებული სავიზიტო ვებსაიტი.
            </p>
          </div>
        </div>

{/* ===================================================================================================================================== */}


        <div
          style={{
            width: "70% ",
            height: "2px",
            backgroundColor: `${isDarkmodeOn ? "black" : "white"}`,
          }}
        ></div>

        {/* 4  konteineri  */}
        <div
          className={`about_example_child_container ${!isDarkmodeOn ? "title_p_dark" : "title_p_light"
            }  `}
        >
          <img
            src={pos_terminal_image}
            alt="pos terminal image"
            className="storkhome_image"
          />
          <div className="storkhome_title_and_p_cont  high_z_index">
            <h1
              className={`storkhome_title ${!isDarkmodeOn ? "title_p_dark" : "title_p_light"} `}
              // onClick={openModal}
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
            >
              POS Terminal
            </h1>
            <p
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="storkhome_paragraph">
              თქვენი ბიზნესისთვის შექმენილი მარტივი და ბიუჯეტური პოს-ტერმინალი
            </p>
            <p
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="storkhome_paragraph">
            </p>
          </div>
          {/* <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Google Sheet Modal"
            ariaHideApp={false}
            style={{
              content: {
                height: "80vh",
                width: "90vw",
                borderRadius: "1%",
                marginTop: "100px",
                zIndex: "9999999999",
              },
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <button onClick={closeModal}>Close</button>
            <div style={{ height: "80%" }}>
              <GoogleSheetEmbed />
            </div>
          </Modal> */}
        </div>
      </div>

      <div className="footer_containet">
        <Footer isDarkmodeOn={isDarkmodeOn} />
      </div>
    </div>
  );
};

export default transition(About);
