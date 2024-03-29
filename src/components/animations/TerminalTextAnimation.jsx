import React, { useState, useEffect } from 'react';
import "../styles/TerminalTextAnimation.css";

export default function TerminalTextAnimation() {
  const [typedText, setTypedText] = useState("");
  const data = "<span>გურამ შანიძე<br/>Full-stack web developer</span><br/>";
  
  useEffect(() => {
    let index = 0;
    let isTag = false;

    const type = () => {
      let text = data.slice(0, ++index);
      if (text === data) {
        // When the typing animation completes, stop updating the text.
        // The cursor will continue to blink due to the CSS animation.
        return;
      }

      setTypedText(text);

      const char = text.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      
      // Determine delay dynamically for typing effect and HTML tags
      const delay = isTag ? 0 : 60;
      setTimeout(type, delay);
    };

    type();
  }, [data]);

  return (
    <div className="typing-container">
      <div className="typing" dangerouslySetInnerHTML={{ __html: typedText }} />
      <span className='blinker'>|</span>
    </div>
  );
}
