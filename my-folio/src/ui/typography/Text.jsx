import { colors } from "../theme/colors";
import FadeUp from "../motion/FadeUp";

const Text = ({ children, className }) => {
  return (
    <FadeUp delay={0.3}>
      <p
        className={`text-base sm:text-lg leading-relaxed ${className || ""}`}
        style={{ color: colors.textSecondary }}
      >
        {children}
      </p>
    </FadeUp>
  );
};

export default Text;
