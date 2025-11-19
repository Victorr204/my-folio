import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 78 },
  { name: "React", level: 75 },
  { name: "Tailwind CSS", level: 80 },
  { name: "React Native", level: 45 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gradient-to-b from-[#0A0F14] to-[#0D1117] text-white overflow-hidden"
    >
      {/* Glowing radial accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,194,255,0.1)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-cyan-400 drop-shadow-[0_0_10px_#00C2FF] mb-10"
        >
          My Skills
        </motion.h2>

        <div className="space-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              {/* Skill name and percentage */}
              <div className="flex justify-between mb-2">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-cyan-400 text-sm">{skill.level}%</span>
              </div>

              {/* Skill bar */}
              <div className="w-full bg-[#1B242F] rounded-full h-3 overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_15px_#00C2FF]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
