import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [selectedOption, setSelectedOption] = useState("");

  const whatsappNumber = "2349037306845"; 

  const handleSelect = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    if (value === "") return;

    const encodedMessage = encodeURIComponent(
      `Hello Victor, I am interested in: ${value}.`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-b from-[#0A0F14] to-[#0D1117] text-white overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,194,255,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_#00C2FF] mb-6"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Let’s build something amazing together 🚀 <br />
          I’m open to collaborations, freelance projects, and opportunities.
        </motion.p>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="bg-[#101820]/90 backdrop-blur-md border border-cyan-400/30 hover:border-cyan-400/60 rounded-2xl py-8 px-6 shadow-[0_0_25px_rgba(0,194,255,0.15)] hover:shadow-[0_0_35px_rgba(0,194,255,0.3)] transition-all duration-500"
        >
          <a
            href="mailto:victorreuben707@gmail.com"
            className="flex items-center justify-center gap-3 text-lg text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <FaEnvelope size={22} />
            victorreuben707@gmail.com
          </a>
        </motion.div>

        {/* WhatsApp Button */}
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Victor, I would like to contact you!")}`}
          target="_blank"
          className="mt-8 inline-flex items-center gap-3 bg-green-500 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-green-400 transition"
        >
          <FaWhatsapp size={24} />
          Contact on WhatsApp
        </motion.a>

        {/* Dropdown Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-10"
        >
          <label className="block mb-2 text-cyan-400 font-medium">
            Contact me for:
          </label>

          <select
            value={selectedOption}
            onChange={handleSelect}
            className="bg-[#0F141A] border border-cyan-400/40 text-white px-4 py-3 rounded-xl w-full max-w-sm mx-auto focus:outline-none focus:border-cyan-400 transition"
          >
            <option value="">-- Select an Option --</option>
            <option value="Build a website">Build a website</option>
            <option value="Build a mobile app">Build a mobile app</option>
            <option value="Learn elementary web-development">Learn elementary web-development</option>
            <option value="Learn intermediate web-development">Learn intermediate web-development</option>
            <option value="Learn full web-development">Learn full web-development</option>
          </select>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-6 mt-10"
        >
          <a
            href="https://github.com/victorr204"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/victor-ruben-566546397"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
