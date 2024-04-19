import "../styles/Contact.css";
import React, { useState, useEffect } from "react";
import Compass from "../animations/Compass";
import transition from "../Header/Transition";

function Contact({ contactMessage }) {
  const [inputValue, setInputValue] = useState(contactMessage);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx0MAIn2p2o-iF6MW4mwlTNCfxEqRse_ifCiaqiAUvkCXUOuKKuedkhi2A0rEWgJrfuwg/exec",
        {
          method: "POST",
          mode: "no-cors", // Google Script Apps do not support CORS
          body: JSON.stringify({
            name,
            email,
            mobile,
            description: inputValue, // Assuming this is the additional description
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response here. Note: 'no-cors' mode limits the visibility of the response in JavaScript
      console.log("Form submitted");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact_parent_container">
      <div className="contact_input_container">
        <form onSubmit={handleSubmit}>
          <div className="contact_input_container">
            <input
              type="text"
              placeholder="Additional Description"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default transition(Contact);
