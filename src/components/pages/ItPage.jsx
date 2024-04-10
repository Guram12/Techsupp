import Paralax from "../animations/Paralax"
import "../styles/ITPage.css"
import Footer from "../Header/Footer"
import It_header_animation from "../animations/It_header_animation"


export default function ItPage({ isDarkmodeOn }) {


  return (
    <div>

      <div className="it_container" >
        <div className="it_background_header_image" >
          <div className="it_child_title_container" >
            <h1 className="it_title" >IT მომსახურება</h1>
            <p className="it_paragraph" >თქვენი ბიზნესის უწყვეტ მუშაობაში ჩვენი გამოცდილი გუნდი დაგეხმარებათ.
              დღევანდელ რეალობაში ყველა მსხვილი თუ მცირე ბიზნესი დამოკიდებულია ელექტრონულ
              მოწყობილობებზე, მათმა ხარვეზით მუშაობამ კი შეიძლება პროცესები ძალიან შეაფერხოს,
              შესაბამისად საჭიროა მათი მუდმივი კონტროლი. ჩვენი გუნდი დაგეხმარებათ სწრაფად და
              მარტივად მოაგვაროთ მსგავსი ტიპის პრობლემები.</p>
          </div>
        </div>
      </div>

      <div className="it_paralax_container"  >
        <section>
          <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={-5}>IT service IT service</Paralax>
          <Paralax isDarkmodeOn={isDarkmodeOn} baseVelocity={5}>IT service IT service</Paralax>
        </section>
      </div>
      <div>
        aq  chaiwereba informacia mocemuli servisebis Sesaxeb
      </div>

      <div>
        <Footer isDarkmodeOn={isDarkmodeOn} />
      </div>
    </div>
  )
}


