import { motion } from "framer-motion";

/*
  FADE-UP MOTION
  --------------
  UI-level animation wrapper.
*/

const FadeUp = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
