import { colors } from "../theme/colors";
import FadeUp from "../motion/FadeUp";

const Card = ({ children }) => {
  return (
    <FadeUp delay={0.3}>
      <div
        className="rounded-2xl p-8 backdrop-blur-md shadow-lg"
        style={{
          background: "rgba(30,41,59,0.6)",
          boxShadow: "0 0 20px rgba(0,194,255,0.15)",
        }}
      >
        {children}
      </div>
    </FadeUp>
  );
};

export default Card;
