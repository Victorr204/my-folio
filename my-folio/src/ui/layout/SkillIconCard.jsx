import React, { useState } from "react";
import { motion } from "framer-motion";

const SkillIconCard = ({ icon, label }) => {
  const [showLabel, setShowLabel] = useState(false);

  const handleTap = () => {
    if (window.innerWidth < 768) {
      setShowLabel((prev) => !prev);
    }
  };

  return (
    <motion.div
      onMouseEnter={() => window.innerWidth >= 768 && setShowLabel(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setShowLabel(false)}
      onTap={handleTap}
      className="relative bg-[#101820] rounded-2xl p-6 flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-4xl text-cyan-400">{icon}</div>

      {showLabel && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-2 text-sm text-cyan-300 font-semibold"
        >
          {label}
        </motion.span>
      )}
    </motion.div>
  );
};

export default SkillIconCard;
