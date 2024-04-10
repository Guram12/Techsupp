import "../styles/Contact.css"
import React, { useState } from 'react';




export default function Contact({ contactMessage }) {
  const [inputValue, setInputValue] = useState(contactMessage);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      comtact
      <div className="contact_input_container" >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="number" placeholder="mobile"/>
        <input type="number" placeholder="aditional description"/>

      </div>
    </div>
  )
}