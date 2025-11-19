import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#0A0F14] text-white overflow-hidden"
    >
      {/* Soft glow background accent */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(0,194,255,0.15)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_#00C2FF] mb-4"
        >
          About Me
        </motion.h2>

        {/* Animated underline accent */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-1 bg-cyan-400 mx-auto rounded-full mb-8"
        />

        {/* Description text card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-[#161B22]/60 backdrop-blur-md rounded-2xl p-8 shadow-[0_0_20px_#00C2FF25]"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a Computer Science student and passionate Front-End Developer
            focused on building fast, responsive, and visually engaging
            experiences for the web and mobile. I thrive on transforming
            creative ideas into functional, interactive designs using modern
            tools like <span className="text-cyan-400">React</span> and{" "}
            <span className="text-cyan-400">React Native</span>. My goal is to
            continually grow as a developer while delivering meaningful digital
            experiences that inspire and connect users.
            If you need a dedicated developer to bring your ideas to life, feel free to reach out!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
