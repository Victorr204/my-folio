import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Hero from "./Hero";
import img3 from "../assets/logo02.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="backdrop-blur-md bg-[#0D1117]/80 border-b border-cyan-400/20 fixed top-0 w-full z-50 px-6 py-4"
    >
       
      <div className="flex justify-between items-center max-w-6xl mx-auto">
       
        {/* Logo / Name */}
        <h1 className="text-2xl font-extrabold text-cyan-400 tracking-wide flex">
          <img src={img3} alt="logo" width={50} />
          <a href={{Hero}}>Victor Ruben</a>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group transition"
            >
              <span className="group-hover:text-cyan-400">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-cyan-400 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 space-y-3 px-2 pb-3 text-gray-300"
        >
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded-md hover:bg-cyan-400/10 hover:text-cyan-400 transition"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
