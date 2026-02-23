import { motion } from "framer-motion";
import FadeUp from "../motion/FadeUp";
import { colors } from "../theme/colors";

const ContactCardUI = ({ children, onClick, className }) => {
  return (
    <FadeUp>
      <motion.div
        onClick={onClick}
        className={`rounded-2xl px-6 py-8 backdrop-blur-md border transition-all cursor-pointer ${className || ""}`}
        style={{ background: "rgba(30,41,59,0.85)", borderColor: colors.border }}
        whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.25)" }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.div>
    </FadeUp>
  );
};

export default ContactCardUI;
