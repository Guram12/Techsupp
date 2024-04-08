import React, { useState, useEffect, useRef } from 'react';
import "../styles/TerminalTextAnimation.css";

export default function TerminalTextAnimation({text}) {
  const [typedText, setTypedText] = useState("");
  const cursorHtml = '<span class="blinker">|</span>';
  const typingTimeoutRef = useRef(null); // Use a ref to store the timeout, so it can be cleared when the component unmounts or text changes

  useEffect(() => {
    // Clear any ongoing typing animation when text changes
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    setTypedText(""); // Reset typed text
    let index = 0;
    let isTag = false;

    const type = () => {
      let slice = text.slice(0, ++index);
      if (slice === text) {
        setTypedText(text + cursorHtml); // Append cursor at the end of the typing
        return;
      }

      setTypedText(slice + cursorHtml); // Append cursor dynamically as typing progresses

      const char = slice.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      
      const delay = isTag ? 0 : 60;
      typingTimeoutRef.current = setTimeout(type, delay);
    };

    type();

    // Cleanup function to clear the timeout when the component unmounts or text changes
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [text]);

  return (
    <div className="typing-container">
      <div className="typing" dangerouslySetInnerHTML={{ __html: typedText }} />
    </div>
  );
}
