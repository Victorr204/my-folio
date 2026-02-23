import { colors } from "../theme/colors";
import FadeUp from "../motion/FadeUp";

const Heading = ({ children }) => {
  return (
    <FadeUp>
      <h2
        className="text-3xl sm:text-4xl font-extrabold mb-4 text-center"
        style={{ color: colors.primary }}
      >
        {children}
      </h2>
    </FadeUp>
  );
};

export default Heading;
