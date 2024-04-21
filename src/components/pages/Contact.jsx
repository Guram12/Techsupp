import "../styles/Contact.css"
import React, { useState, useEffect } from 'react';
import transition from "../Header/Transition";
import { MdCheckCircle, MdError } from 'react-icons/md'; // Import Material Design icons
import AnimatedLogo from "../animations/Techsupp_logo";

function Contact({ contactMessage }) {
  const [inputValue, setInputValue] = useState(contactMessage);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  // const response = await fetch('https://script.google.com/macros/s/AKfycbx0MAIn2p2o-iF6MW4mwlTNCfxEqRse_ifCiaqiAUvkCXUOuKKuedkhi2A0rEWgJrfuwg/exec', {

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch('https://script.google.com/macros/s/AKfycbx0MAIn2p2o-iF6MW4mwlTNCfxEqRse_ifCiaqiAUvkCXUOuKKuedkhi2A0rEWgJrfuwg/exec', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({ name, email, mobile, description: inputValue }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
      console.log('Request completed! Unable to verify if successful or not due to no-cors.');
      setIsLoading(false);
      setSubmissionResult('success'); // Since we can't determine success, we mark it as unknown
    }).catch(error => {
      console.error('Network error:', error);
      setIsLoading(false);
      setSubmissionResult('error');
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div style={{ paddingTop: "100px" }} className="main_contact_container"  >
      <div className="form__group field">
        <form onSubmit={handleSubmit}>
          <div className="form__group field">
            <input
              type="text"
              className="form__field"
              placeholder="ინფორმაცია სერვისის შესახებ"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              name="description"
              id='description' />
            <label htmlFor="description" className="form__label">ინფორმაცია სერვისის შესახებ</label>
          </div>

          <div className="form__group field">
            <input
              type="text"
              className="form__field"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              name="name"
              id='name' />
            <label htmlFor="name" className="form__label">სახელი</label>
          </div>

          <div className="form__group field">
            <input
              type="text"
              className="form__field"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              id='email' />
            <label htmlFor="email" className="form__label">მეილი</label>
          </div>

          <div className="form__group field">
            <input
              type="number"
              className="form__field"
              placeholder="Email"
              value={mobile}
              onChange={e => setMobile(e.target.value)}
              name="mobile"
              id='mobile' />
            <label htmlFor="mobile" className="form__label">ტელეფონის ნომერი</label>
          </div>
          <div style={{ marginTop: "100px" }}>
            {isLoading ? (
              <button type="button" className="contact_submit_button" disabled>Loading...</button>
            ) : (
              <button type="submit" className="contact_submit_button">Send</button>
            )}
          </div>
        </form>
        <div style={{ width: "300px" }} >
          {submissionResult === 'success' ? <MdCheckCircle size="24px" color="green" /> :
            submissionResult === 'error' ? <MdError size="24px" color="red" /> : null}
        </div>
      </div>
      <div className="contact_logo_container" >
        <AnimatedLogo />
      </div>
    </div>
  )
}

export default transition(Contact);





