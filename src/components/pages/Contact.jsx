import "../styles/Contact.css"
import React, { useState, useEffect } from 'react';
import Compass from "../animations/Compass";
import transition from "../Header/Transition";


function Contact({ contactMessage }) {
  const [inputValue, setInputValue] = useState(contactMessage);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [description, setDescription] = useState('');



  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbx0MAIn2p2o-iF6MW4mwlTNCfxEqRse_ifCiaqiAUvkCXUOuKKuedkhi2A0rEWgJrfuwg/exec', {
        method: 'POST',
        mode: 'no-cors', // Google Script Apps do not support CORS
        body: JSON.stringify({
          name,
          email,
          mobile,
          description: inputValue, // Assuming this is the additional description
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle the response here. Note: 'no-cors' mode limits the visibility of the response in JavaScript
      console.log('Form submitted');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div style={{ paddingTop: "100px" }} >
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
              type="text"
              className="form__field"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              id='mobile' />
            <label htmlFor="mobile" className="form__label">ტელეფონის ნომერი</label>
          </div>

        </form>
      </div>
      <div>

      </div>
    </div>
  )
}

export default transition(Contact);