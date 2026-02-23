import { motion } from "framer-motion";

const SkillItem = ({ name, level, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group mb-6"
  >
    {/* Skill name & percentage */}
    <div className="flex justify-between mb-2">
      <span className="text-gray-300 font-medium">{name}</span>
      <span className="text-cyan-400 text-sm">{level}%</span>
    </div>

    {/* Skill bar */}
    <div className="w-full bg-[#1B242F] rounded-full h-3 overflow-hidden shadow-inner">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-full bg-linear-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_15px_#00C2FF]"
      />
    </div>
  </motion.div>
);

export default SkillItem;
