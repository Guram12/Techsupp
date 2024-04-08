import React, { useState, useEffect } from 'react';
import "../styles/TerminalTextAnimation.css";

export default function TerminalTextAnimation({text}) {
  const [typedText, setTypedText] = useState("");
  // const text = "<span>გურამ შანიძე<br/>Full-stack web developer</span><br/>";
  const cursorHtml = '<span class="blinker">|</span>';

  useEffect(() => {
    setTypedText("");
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
      setTimeout(type, delay);
    };

    type();
  }, [text]);

  return (
    <div className="typing-container">
      <div className="typing" dangerouslySetInnerHTML={{ __html: typedText }} />
    </div>
  );
}
