import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import img from "../assets/my-img.jpg";

export default function Hero({ avatar }) {
  const avatarSrc = avatar || img;

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen px-6 bg-[#0D1117] text-white overflow-hidden"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        
        {/* ===== Left Text Column ===== */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-cyan-400 text-lg font-semibold uppercase tracking-wide mb-3"
          >
            Front-End Developer | React & React Native
          </motion.h4>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-100 mb-5"
          >
            I build scalable web app and mobile apps.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto md:mx-0"
          >
            A passionate developer focused on crafting high-performing, responsive interfaces
            and delightful digital experiences.
          </motion.p>

          {/* ===== Social Links ===== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center md:justify-start gap-6 mt-8"
          >
            <a
              href="https://github.com/victorr204"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaGithub size={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/victor-ruben-566546397"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href="#projects"
              className="ml-2 inline-block bg-cyan-400 text-black font-semibold px-5 py-2.5 rounded-md shadow-lg hover:bg-cyan-300 transition"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* ===== Right Full-Height Image Column (Clean, Larger) ===== */}
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="
              relative 
              w-full 
              md:w-full 
              h-[70vh] 
              sm:h-[75vh] 
              md:h-[80vh] 
              lg:h-[85vh] 
              mt-10 md:mt-20 
              rounded-xl 
              overflow-hidden
            "
          >
            <img
              src={avatarSrc}
              alt="Victor Ruben"
              className="
                object-cover 
                w-full 
                h-full 
                transition 
                duration-700 
                hover:scale-105
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
