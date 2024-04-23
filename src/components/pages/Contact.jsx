import "../styles/Contact.css"
import React, { useState, useEffect } from 'react';
import transition from "../Header/Transition";
import AnimatedLogo from "../animations/Techsupp_logo";
import { color } from "framer-motion";


function Contact({ contactMessage, isDarkmodeOn, tweenRef }) {
  const [inputValue, setInputValue] = useState(contactMessage);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState('გაგზავნა');



  // const response = await fetch('https://script.google.com/macros/s/AKfycbx0MAIn2p2o-iF6MW4mwlTNCfxEqRse_ifCiaqiAUvkCXUOuKKuedkhi2A0rEWgJrfuwg/exec', {

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setButtonText('იგზავნება...');

    const payload = {
      name,
      email,
      mobile,
      description: inputValue
    };

    fetch('https://script.google.com/macros/s/AKfycbx0MAIn2p2o-iF6MW4mwlTNCfxEqRse_ifCiaqiAUvkCXUOuKKuedkhi2A0rEWgJrfuwg/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => {
        console.log('Request completed! Unable to verify if successful or not.');
        setButtonText('გაგზავნილია');
        setInputValue("")
        setName('')
        setEmail('')
        setMobile('')
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Network error:', error);
        setButtonText('Error');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  function handleInvalid(e) {
    e.target.setCustomValidity('გთხოვთ შეავსოთ ეს ველი');
  }

  function handleChange(e) {
    e.target.setCustomValidity('');
  }
  // ==================================== email validation ===============================================
  function validateEmail(email) {
    if (email.length > 0 && (!email.includes('@'))) {
      return 'გთხოვთ შეასწოროთ მეილი ';
    }
    return '';
  }

  function handleEmailChange(e) {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const validationMessage = validateEmail(emailValue);
    e.target.setCustomValidity(validationMessage);
  }

  function handleEmailInvalid(e) {
    const validationMessage = validateEmail(e.target.value);
    e.target.setCustomValidity(validationMessage);
    if (!validationMessage) {
      e.target.setCustomValidity('');
    }
  }

  // ========================================================================================================
  return (
    <div className="parent_main_contact_container" >
      <div style={{ paddingTop: "100px" }} className="main_contact_container"  >
        <div className="form__group field">
          <form onSubmit={handleSubmit}>
            <div className="form__group field">
              <input
                onMouseEnter={() => tweenRef.current.play()}
                onMouseLeave={() => tweenRef.current.reverse()}
                type="text"
                style={{ color: `${!isDarkmodeOn ? "white" : "black"}` }}
                className="form__field"
                placeholder="ინფორმაცია სერვისის შესახებ"
                value={inputValue}
                onChange={e => {
                  setInputValue(e.target.value);
                  handleChange(e)
                }}
                onInvalid={handleInvalid}
                required
                name="description"
                id='description' />
              <label htmlFor="description" className={isDarkmodeOn ? "form__label" : "form__label_dark"}>სერვისი</label>
            </div>

            <div className="form__group field">
              <input
                onMouseEnter={() => tweenRef.current.play()}
                onMouseLeave={() => tweenRef.current.reverse()}
                type="text"
                style={{ color: `${!isDarkmodeOn ? "white" : "black"}` }}
                className="form__field"
                placeholder="Name"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                  handleChange(e);
                }}
                onInvalid={handleInvalid}
                required
                name="name"
                id='name' />
              <label htmlFor="name" className={isDarkmodeOn ? "form__label" : "form__label_dark"} >სახელი</label>
            </div>

            <div className="form__group field">
              <input
                onMouseEnter={() => tweenRef.current.play()}
                onMouseLeave={() => tweenRef.current.reverse()}
                type="text"
                style={{ color: `${!isDarkmodeOn ? "white" : "black"}` }}
                className="form__field"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailChange} // Validate again on blur to ensure message shows if user tabs out
                onInvalid={handleEmailInvalid}
                name="email"
                id='email' />
              <label htmlFor="email" className={isDarkmodeOn ? "form__label" : "form__label_dark"} >მეილი</label>
            </div>

            <div className="form__group field">
              <input
                onMouseEnter={() => tweenRef.current.play()}
                onMouseLeave={() => tweenRef.current.reverse()}
                type="number"
                style={{ color: `${!isDarkmodeOn ? "white" : "black"}` }}
                className="form__field"
                placeholder="Email"
                value={mobile}
                onChange={e => {
                  setMobile(e.target.value);
                  handleChange(e);
                }}
                onInvalid={handleInvalid}
                name="mobile"
                id='mobile'
                required
              />
              <label htmlFor="mobile" className={isDarkmodeOn ? "form__label" : "form__label_dark"} >ტელეფონის ნომერი</label>
            </div>
            <div style={{ marginTop: "100px" }}>
              <button
                onMouseEnter={() => tweenRef.current.play()}
                onMouseLeave={() => tweenRef.current.reverse()}
                type="submit" className={isDarkmodeOn ? "contact_submit_button" : "contact_submit_button_dark"} disabled={isLoading}>
                {buttonText}<span>⟶</span>
              </button>
            </div>
          </form>
        </div>
        <div className="contact_logo_container" >
          <AnimatedLogo isDarkmodeOn={isDarkmodeOn} tweenRef={tweenRef} />
        </div>
      </div>

      <div className="contact_booter_element" >
        <p className="powered_techsupp"  >Powered by TechSupp </p>

        <div className="social_links" >
          <a href="https://ge.linkedin.com/in/tech-supp-0864812b9" target="_blank" rel="noopener noreferrer">
            <button className="Btn_fb">
              <span className="svgContainer_fb">
                <svg
                  viewBox="0 0 448 512"
                  height="1.6em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svgIcon"
                  fill={isDarkmodeOn ? "black" : "white"}
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
              <span className="BG" />
            </button>
          </a>

          <a href="https://www.facebook.com/techsuppofficial" target="_blank" rel="noopener noreferrer">
            <button className="Btn_fb">
              <span className="svgContainer_fb">
                <svg
                  viewBox="0 0 320 512"
                  height="1.3em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svgIcon"
                  fill={isDarkmodeOn ? "black" : "white"}
                >
                  <path
                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                  ></path>
                </svg>
              </span>
              <span className="BG"></span>
            </button>
          </a>

        </div>

      </div>
    </div>
  )
}

export default transition(Contact);





