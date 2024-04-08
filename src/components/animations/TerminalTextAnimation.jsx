import React, { useState, useEffect } from 'react';
import "../styles/TerminalTextAnimation.css";

export default function TerminalTextAnimation() {
  const [typedText, setTypedText] = useState("");
  const data = "<span>გურამ შანიძე<br/>Full-stack web developer</span><br/>";
  const cursorHtml = '<span class="blinker">|</span>';

  useEffect(() => {
    let index = 0;
    let isTag = false;

    const type = () => {
      let text = data.slice(0, ++index);
      if (text === data) {
        setTypedText(text + cursorHtml); // Append cursor at the end of the typing
        return;
      }

      setTypedText(text + cursorHtml); // Append cursor dynamically as typing progresses

      const char = text.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      
      const delay = isTag ? 0 : 60;
      setTimeout(type, delay);
    };

    type();
  }, [data]);

  return (
    <div className="typing-container">
      <div className="typing" dangerouslySetInnerHTML={{ __html: typedText }} />
    </div>
  );
}
