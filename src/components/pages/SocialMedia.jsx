import "../styles/SocialMedia.css";
import transition from "../Header/Transition";
import MediaAnimation from "../animations/MediaAnimation";
import Parallax from "../animations/Paralax";


function SocialMedia({handle_context_change ,isDarkmodeOn }) {
  return (
    <div style={{ paddingTop: "100px" }} >
      <div className="media_animation_and_text_cont" >
        <div className="media_animation_container" >
          <MediaAnimation />
        </div>
        <div>
          <div className="media_text_container" >
            <p>fq3f q4gfq3 cgq gawg wqg q</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 150
              0s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the l
              eap into electronic typesetting, remaining essentially unchanged. It was pop
              ularised in the 1960s with the release of Letraset sheets containing Lorem I
              psum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
      <div className="menu_paralax_container" >
        <section>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>social media</Parallax>
          <Parallax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>social media</Parallax>
        </section>
      </div>
    </div>
  )
};

export default transition(SocialMedia);




// 3 პაკეტი , ფ, ინსტაგ, ლინკდინი, ტწიტერ 



