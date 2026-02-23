import FadeUp from "../motion/FadeUp";
import { colors } from "../theme/colors";

const PrimaryButton = ({ href, children }) => (
  <FadeUp delay={0.45}>
    <a
      href={href}
      className="inline-block font-semibold px-5 py-2.5 rounded-md shadow-lg transition"
      style={{
        backgroundColor: colors.primary,
        color: colors.background,
      }}
    >
      {children}
    </a>
  </FadeUp>
);

export default PrimaryButton;
