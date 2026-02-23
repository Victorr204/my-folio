import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { colors } from "../theme/colors";

const SkillCategoryCard = ({ title, icons, description, iconCols = 3 }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleTap = (index) => {
    if (window.innerWidth < 768) {
      setHoveredIndex((prev) => (prev === index ? null : index));
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const labelVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`bg-[${colors.surface}] rounded-3xl p-8 border border-[${colors.border}] shadow-[0_10px_30px_${colors.shadow}] flex flex-col min-h-[400px]`}
      variants={cardVariants}
      whileHover={{ scale: 1.05, boxShadow: `0 15px 40px ${colors.shadow}` }}
      whileTap={{ scale: 0.95 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="mb-6">
        <h3 className="text-[${colors.primary}] font-bold text-xl mb-2">{title}</h3>
        <p className="text-[${colors.textSecondary}] text-sm">{description}</p>
      </div>

      {/* Grid always equal height */}
      <div
        className={`grid gap-6 justify-center`}
        style={{ gridTemplateColumns: `repeat(${iconCols}, minmax(80px, 1fr))` }}
      >
        {icons.map((tech, i) => (
          <motion.div
            key={i}
            className="relative flex flex-col items-center justify-center w-full h-32 cursor-pointer bg-[rgba(255,255,255,0.05)] rounded-xl transition-all duration-300 hover:bg-[rgba(77,166,255,0.1)]"
            onMouseEnter={() => window.innerWidth >= 768 && setHoveredIndex(i)}
            onMouseLeave={() => window.innerWidth >= 768 && setHoveredIndex(null)}
            onTap={() => handleTap(i)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 },
              rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }
            }}
          >
            <div className="text-6xl">{tech.icon}</div>
            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.span
                  variants={labelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute bottom-0 text-sm text-[${colors.primary}] font-semibold mt-2"
                >
                  {tech.label}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategoryCard;
