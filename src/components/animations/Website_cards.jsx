import "../styles/Website_cards.css"
import React, { useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
// import website_animated_logo from "../../assets/website_logo.webp"
import logo_level_1 from "../../assets/logo_lvl_1.png"
import logo_level_2 from "../../assets/logo_lvl_2.png"
import logo_level_3 from "../../assets/logo_lvl_3.png"


export default function Website_cards({ isDarkmodeOn }) {
  const [activeCard, setActiveCard] = useState(0);
  const [toggle_card_header, setToggle_card_header] = useState(true);
  const [toggle_left_down_card, setToggle_left_down_card] = useState(true);
  const [toggle_right_down_card, setToggle_right_down_card] = useState(0);

  const leveled_icons = [logo_level_1, logo_level_2, logo_level_3]

  const prices = ["900 ლარიდან", "2000 ლარიდან", "3000 ლარიდან"]

  const cards = [
    {
      title: 'ერთ გვერდიანი საიტი',
      button: 'ფუნქციონალი',
      services: ['სამართავი პანელი', 'სოციალური ქსელების ინტეგრაცია', 'ონლაინ ჩატი', "მობილურის ვერსია",
        "სლაიდშოუ", "night/light რეჟიმი", "ვიზიტორების სტატისტიკა", "ფოტო/ვიდეო", "ფაილის გადმოწერის ფუნქცია",
        "მთავარი გვერდი", "ნავიგაციის ბარი", "ჩვენს შესახებ", "სერვისები", "ჩვენს შესახებ", "კონტაქტი", "პარტნიორები", "ფოტოების სლაიდშოუ",
      ]
    },

    {
      title: 'სავიზიტო ვებსაიტი',
      button: 'ფუნქციონალი',
      services: ["სამართავი პანელი", "სოციალური ქსელების ინტეგრაცია", "ონლაინ ჩატი", "მობილურის ვერსია", "სლაიდშოუ", "night/light რეჟიმი",
        "ვიზიტორების სტატისტიკა", "ფოტო/ვიდეო", "ფაილის გადმოწერის ფუნქცია", "სიახლეები", "კლიენტის მოდული", "პარტნიორი კომპანიები", "ნავიგაციის ბარი",
        "სერვისები", "ჩვენს შესახებ", "კონტაქტი", "პარტნიორები", "ფოტოების/ვიდეოების სლაიდშოუ", "ფილიალები", "პროექტები (მდგომარეობით)",]
    },
    {
      title: 'ონლაინ მაღაზია',
      button: 'ფუნქციონალი',
      services: ["სამართავი პანელი", "სოციალური ქსელების ინტეგრაცია", "ონლაინ ჩატი", "მობილურის ვერსია", "სლაიდშოუ", "night/light რეჟიმი",
        "ვიზიტორების სტატისტიკა", "ფოტო/ვიდეო", "ფაილის გადმოწერის ფუნქცია", "სიახლეები", "კლიენტის მოდული", "პარტნიორი კომპანიები", "ძიება",
        "ნავიგაციის ბარი", "სორტირება/ფილტრაცია", "ვიშლისთის ფუნქცია", "კალათაში დამატება", "პროდუქციის შეკვეთის ფუნქცია", "რეგისტრაცია ავტორიზაცია",
        "Facebook/Google-ით რეგისტრაცია", "პროდუქციის შეძენა ბარათის სისტემებით", "ინვოისი", "სტატისტიკა (გაყიდვების, ვიზიტორების)",
        "საბუღალტრო პროგრამასთან ინტეგრაცია", "სხვა"]
    },
  ];

  const detailsContainerRef = useRef(null);

  const handle_card_button_click = (index) => {
    console.log(index)
    setActiveCard(index)
    setToggle_card_header(!toggle_card_header)
    setToggle_left_down_card(!toggle_left_down_card)
    setToggle_right_down_card(toggle_right_down_card + 1)

    if (detailsContainerRef.current) {
      detailsContainerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }


  const Card = ({ title, copy, button, index }) => (
    <div className="card_wb">
      <div className="content_wb">
        <h2 className="title_wb">{title}</h2>

        <button className="btn_wb" onClick={() => handle_card_button_click(index)} >{button}</button>
      </div>
    </div>
  );


  const containerVariants = {
    hidden: { x: '100vw' },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 40,
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  };

  const listItemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        duration: 0.2
      }
    }
  };


  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      }
    }
  };

  return (
    <div>
      <div className="page-content_wb">
        {cards.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </div>
      <div className="motion_parent_cont">
        <motion.h1
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          key={toggle_card_header}
        >   {activeCard !== null ? cards[activeCard].title : ''}</motion.h1>
        <div className="wb_catd_and_icon_container" ref={detailsContainerRef} >

          <motion.div
            key={toggle_left_down_card}
            className="first_down_card_container"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 70, delay: 1.5 }}

          >
            <img className="animated_nowncards_logo" src={leveled_icons[activeCard]} alt="website logo" />
          </motion.div>
          <div>
            <motion.div
              className="motion_cont_wb shadow_wb"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeCard}

            >
              <ul>
                {activeCard !== null && cards[activeCard].services.map((service, index) => (
                  <motion.li
                    key={index}
                    className="wb_li"
                    variants={listItemVariants}
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          <motion.div
            key={toggle_right_down_card}
            className="second_down_card_container"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 70, delay: 1.5 }}
          >
            <h1 className="hown_card_price" >{prices[activeCard]}</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}









