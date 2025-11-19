import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import img1 from "../assets/images/easymatch.jpg";
import img2 from "../assets/images/ruxx-digital.jpg";
import img3 from "../assets/images/portfolio.png"

const projects = [
  {
    title: "EasyMatch",
    desc: "A matchmaking web app built with React and Tailwind for seamless connections.",
    image: [img1], // placeholder path
    github: "https://github.com/victorr204/Easy-match",
    link: 'https://easymatch.name.ng'
  },
  {
    title: "Ruxx Digital Services",
    desc: "A modern digital service platform built with React Native and Appwrite.",
    image: [img2],
    github: "https://github.com/victorr204/RUXX",
    link: 'https://ruxxdigital.name.ng'
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React, Tailwind, and Framer Motion animations.",
    image: [img3],
    github: "https://github.com/victorr204/my-folio",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-gradient-to-b from-[#0D1117] to-[#0A0F14] text-white overflow-hidden"
    >
      {/* glowing accent backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,194,255,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-cyan-400 drop-shadow-[0_0_10px_#00C2FF] mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="group relative bg-[#101820] rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(0,194,255,0.1)] hover:shadow-[0_0_25px_rgba(0,194,255,0.3)] transition-all duration-500"
            >
              {/* Image placeholder */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{p.desc}</p>

                <div className="flex items-center gap-4">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
