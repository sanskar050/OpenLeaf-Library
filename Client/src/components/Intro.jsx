import React, { useEffect, useState } from "react";

const Intro = () => {
  const fullText = "Hey, Book Lover! Welcome to your new favourite corner of the internet. Our free e-library is packed with books you'll love—no sign-ups, no payments, just stories and knowledge waiting for you. Dive in, read away, and fall in love with reading all over again.";

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }
      else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [index]);

  return (
      <div className="intro" style={{ whiteSpace: "pre-wrap" }}>
        {displayedText}
        <span className="cursor">|</span>
      </div>
  );
};

export default Intro;