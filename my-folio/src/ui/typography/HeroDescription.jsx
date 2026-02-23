import { colors } from "../theme/colors";
import FadeUp from "../motion/FadeUp";

const HeroDescription = ({ children }) => (
  <FadeUp delay={0.3}>
    <p
      className="text-base sm:text-lg max-w-lg mx-auto md:mx-0"
      style={{ color: colors.textSecondary }}
    >
      {children}
    </p>
  </FadeUp>
);

export default HeroDescription;
