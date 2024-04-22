import "../styles/SocialMediaCards.css"




function SocialMediaCards({ isDarkmodeOn }) {
  return (
    <div className="media_card_container"  >
      <div class="silver_card" style={{ backgroundColor: `${!isDarkmodeOn ? "black" : "white"}`, color: `${isDarkmodeOn ? "black" : "white"}` }} >
        <div>
          <h1 className="media_card_title_silver" >SILVER</h1>
          <ul className="media_lists" >
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
          <p className="media_price_silver" >1000 ლარი</p>
        </div>
      </div>

      <div class="gold_card" style={{ backgroundColor: `${!isDarkmodeOn ? "black" : "white"}`, color: `${isDarkmodeOn ? "black" : "white"}` }} >
        <div>
          <h1 className="media_card_title_gold" >GOLD</h1>
          <ul className="media_lists" >
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
          <p className="media_price_gold" >1300 ლარი</p>
        </div>
      </div>


      <div class="platinium_catd" style={{ backgroundColor: `${!isDarkmodeOn ? "black" : "white"} `, color: `${isDarkmodeOn ? "black" : "white"}` }} >
        <div>
          <h1 className="media_card_title_platinium" >PLATINIUM</h1>
          <ul className="media_lists" >
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
          <p className="media_price_platinium" >1700 ლარი</p>
        </div>

      </div>
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


