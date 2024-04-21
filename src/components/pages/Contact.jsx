import "../styles/Contact.css"
import React, { useState, useEffect } from 'react';
import transition from "../Header/Transition";
import AnimatedLogo from "../animations/Techsupp_logo";
import { color } from "framer-motion";

function Contact({ contactMessage, isDarkmodeOn }) {
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
              <label htmlFor="description" className={isDarkmodeOn ? "form__label" : "form__label_dark"}>ინფორმაცია სერვისის შესახებ</label>
            </div>

            <div className="form__group field">
              <input
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
              <button type="submit" className={isDarkmodeOn ? "contact_submit_button" : "contact_submit_button_dark"} disabled={isLoading}>
                {buttonText}<span>⟶</span>
              </button>
            </div>
          </form>
        </div>
        <div className="contact_logo_container" >
          <AnimatedLogo isDarkmodeOn={isDarkmodeOn} />
        </div>
      </div>

      <div className="contact_booter_element" >
        <p style={{ color: "grey" }} >Powered by TechSupp </p>

        <div>
          
        </div>

      </div>
    </div>
  )
}

export default transition(Contact);





