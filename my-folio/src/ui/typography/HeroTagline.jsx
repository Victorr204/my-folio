import { useState, useEffect } from "react";
import FadeUp from "../motion/FadeUp";
import { colors } from "../theme/colors";

const HeroTagline = ({ phrases }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

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
    <FadeUp>
      <h4
        className="text-sm sm:text-base font-semibold uppercase tracking-wide mb-3"
        style={{ color: colors.primary }}
      >
        {displayText}
      </h4>
    </FadeUp>
  );
};

export default HeroTagline;
