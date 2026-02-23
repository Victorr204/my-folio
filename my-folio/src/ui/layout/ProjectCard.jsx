import { motion } from "framer-motion";

const ProjectCard = ({ children, delay = 0, whileHoverScale = 1.03 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: whileHoverScale }}
      className="group relative bg-[#101820] rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(0,194,255,0.1)] hover:shadow-[0_0_25px_rgba(0,194,255,0.3)] transition-all duration-500"
    >
      {children}
    </motion.div>
  );
};

export default ProjectCard;
