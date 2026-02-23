import { useState, useEffect } from "react";
import FadeUp from "../motion/FadeUp";
import { colors } from "../theme/colors";

const HeroTitle = ({ phrases }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState(phrases[0]);

  useEffect(() => {
    let charIndex = 0;
    let direction = 1;
    const interval = setInterval(() => {
      const current = phrases[textIndex];
      setDisplayText(current.slice(0, charIndex));
      if (direction === 1) {
        if (charIndex < current.length) charIndex++;
        else direction = -1;
      } else {
        if (charIndex > 0) charIndex--;
        else {
          direction = 1;
          setTextIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, [textIndex, phrases]);

  return (
    <FadeUp delay={0.15}>
      <h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5"
        style={{ color: colors.textPrimary }}
      >
        {displayText}
      </h1>
    </FadeUp>
  );
};

export default HeroTitle;
