import { colors } from "../theme/colors";
import FadeUp from "../motion/FadeUp";

const SectionTitle = ({ children }) => (
  <FadeUp>
    <h2
      className="text-4xl font-extrabold text-center mb-12"
      style={{ color: colors.primary }}
    >
      {children}
    </h2>
  </FadeUp>
);

export default SectionTitle;
