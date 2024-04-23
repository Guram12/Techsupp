import "../styles/SocialMediaCards.css"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';


function SocialMediaCards({ isDarkmodeOn, tweenRef }) {


  const initial = { x: '100vw' };
  const animate = { x: 0 };

  const control_first = useAnimation()
  const control_second = useAnimation()
  const control_third = useAnimation()



  // Setting up Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,  // Lowered threshold for better mobile compatibility
  });


  useEffect(() => {
    if (inView) {
      control_first.start({ ...animate, transition: { duration: 1, delay: 0, type: 'spring', stiffness: 70, damping: 20 } });
      control_second.start({ ...animate, transition: { duration: 1, delay: 0.2, type: 'spring', stiffness: 70, damping: 20 } });
      control_third.start({ ...animate, transition: { duration: 1, delay: 0.4, type: 'spring', stiffness: 70, damping: 20 } });
    }
  }, [control_first, control_second, control_third, inView]);



  return (
    <div className="media_card_container" ref={ref} >
      {/* 1 motion div  */}
      <motion.div
        initial={initial}
        animate={control_first}
        whileHover={{
          y: -10,
        }}>
        <div class="silver_card" style={{ backgroundColor: `${!isDarkmodeOn ? "black" : "white"}`, color: `${isDarkmodeOn ? "black" : "white"}` }}  >
          <div
          >
            <h1
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="media_card_title_silver" >SILVER</h1>
            <ul
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="media_lists" >
              <li>გვერდის შექმნა</li>
              <li>გვერდის მონიტორინგი</li>
              <li>8 პოსტი </li>
              <li>ქოფირაითინგი</li>
              <li>დიზაინერის მომსახურება</li>
              <li>ad management</li>
              <li>რეპორტინგი</li>
            </ul>
          </div>

          <div className="media_price_container" >
            <p
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="media_price_silver" >1000 ლარი</p>
          </div>
        </div>
      </motion.div>
      {/* 2 motion div  */}
      <motion.div
        initial={initial}
        animate={control_second}
        whileHover={{
          y: -10,
        }}>
        <div class="gold_card" style={{ backgroundColor: `${!isDarkmodeOn ? "black" : "white"}`, color: `${isDarkmodeOn ? "black" : "white"}` }} >
          <div>
            <h1
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="media_card_title_gold" >GOLD</h1>
            <ul
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="media_lists" >
              <li>გვერდის შექმნა</li>
              <li>გვერდის მონიტორინგი</li>
              <li>10 პოსტი</li>
              <li>10 სთორი </li>
              <li>ქოფირაითინგი</li>
              <li>დიზაინერის მომსახურება</li>
              <li>ad management</li>
              <li>რეპორტინგი</li>
            </ul>
          </div>

          <div className="media_price_container" >
            <p
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="media_price_gold" >1300 ლარი</p>
          </div>
        </div>
      </motion.div>

      {/* 3 motion div  */}
      <motion.div
        initial={initial}
        animate={control_third}
        whileHover={{
          y: -10,
        }}>
        <div class="platinium_catd" style={{ backgroundColor: `${!isDarkmodeOn ? "black" : "white"} `, color: `${isDarkmodeOn ? "black" : "white"}` }} >
          <div>
            <h1
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="media_card_title_platinium" >PLATINIUM</h1>
            <ul
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="media_lists" >
              <li>გვერდის შექმნა</li>
              <li>გვერდის მონიტორინგი</li>
              <li>15 პოსტი</li>
              <li>20 სთორი </li>
              <li>instagram highlight </li>
              <li>ქოფირაითინგი</li>
              <li>დიზაინერის მომსახურება</li>
              <li>ad management</li>
              <li>ბიუჯეტის გაწერა</li>
              <li>რეპორტინგი</li>
            </ul>
          </div>

          <div className="media_price_container" >
            <p
              onMouseEnter={() => tweenRef.current.play()}
              onMouseLeave={() => tweenRef.current.reverse()}
              className="media_price_platinium" >1700 ლარი</p>
          </div>

        </div>
      </motion.div>
    </div>
  )
}


export default SocialMediaCards







// ===1)   silver  1000 ლარი
// =>    
// გვერდის შექმნა
// გვერდის მონიტორინგი
// 8 პოსტი
// ქოფირაითინგი
// დიზაინერის მომსახურება
// ad management
// რეპორტინგი

// ===2)   gold  1300 ლარი 
// =>
// გვერდის შექმნა
// გვერდის მონიტორინგი
// 10 პოსტი
// 10 სთორი
// ქოფირაითინგი
// დიზაინერის მომსახურება
// ad management
// რეპორტინგი





// ===3)   platinium  1700 ლარი
// =>
// გვერდის შექმნა
// გვერდის მონიტორინგი
// 15 პოსტი
// 20 სთორი
// instagram highlight
// ქოფირაითინგი
// დიზაინერის მომსახურება
// ad management
// ბიუჯეტის გაწერა
// რეპორტინგი


