// HeroImageFrame.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs,
  FaRocket
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript 
} from "react-icons/si";

const orbitIcons = [
  { icon: <FaHtml5 size={28} color="#E34F26" /> },
  { icon: <FaCss3Alt size={28} color="#1572B6" /> },
  { icon: <FaJs size={28} color="#F7DF1E" /> },
  { icon: <FaReact size={28} color="#61DAFB" /> },
  { icon: <SiNextdotjs size={28} color="#FFFFFF" /> },
  { icon: <SiTailwindcss size={28} color="#06B6D4" /> },
  { icon: <SiTypescript size={28} color="#3178C6" /> },
  { icon: <FaNodeJs size={28} color="#339933" /> },
];

const HeroImageFrame = ({ src, alt, name }) => {
  const [hovered, setHovered] = useState(false);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setAngle((a) => (a + 0.2) % 360);
    }, 16);

    return () => clearInterval(rotationInterval);
  }, []);

  // Responsive sizes - increased significantly
  const imageWidth = {
    mobile: 320, // Increased from 280
    desktop: 400  // Increased from 400
  };

  return (
    <div className="relative w-full flex justify-center items-center mt-16 md:mt-20 lg:mt-24">
      {/* Main container with portrait orientation - larger sizes */}
      <div className="relative w-[320px] sm:w-[360px] md:w-[450px] lg:w-[500px] xl:w-[550px]">
        {/* ORBITING ICONS - Desktop */}
        {orbitIcons.map((item, i) => {
          const a = (360 / orbitIcons.length) * i + angle;
          const rad = (a * Math.PI) / 180;
          const desktopOrbitRadius = 260; // Increased from 200

          return (
            <motion.div
              key={i}
              className="absolute hidden md:block"
              style={{
                top: "50%",
                left: "50%",
                transform: `
                  translate(-50%, -50%)
                  translate(${desktopOrbitRadius * Math.cos(rad)}px,
                            ${desktopOrbitRadius * Math.sin(rad)}px)
                `,
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            >
              <div className="relative w-12 h-12 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-full p-2 border border-white/10">
                {item.icon}
              </div>
            </motion.div>
          );
        })}

        {/* Mobile orbiting icons - adjusted for larger mobile size */}
        {orbitIcons.slice(0, 5).map((item, i) => {
          const a = (360 / 5) * i + angle;
          const rad = (a * Math.PI) / 180;
          const orbitRadius = 140; // Increased from 90

          return (
            <motion.div
              key={`mobile-${i}`}
              className="absolute md:hidden"
              style={{
                top: "50%",
                left: "50%",
                transform: `
                  translate(-50%, -50%)
                  translate(${orbitRadius * Math.cos(rad)}px,
                            ${orbitRadius * Math.sin(rad)}px)
                `,
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            >
              <div className="relative w-10 h-10 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-full p-2 border border-white/10">
                {item.icon}
              </div>
            </motion.div>
          );
        })}

        {/* MAIN IMAGE CONTAINER - Larger portrait */}
        <motion.div
          className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          {/* Image */}
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Corner accents - slightly larger */}
          <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-white/30 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-white/30 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-white/30 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-white/30 rounded-br-lg" />

          {/* Name label at bottom - larger */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-black/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10">
              <p className="text-white text-base md:text-lg font-medium">{name}</p>
              <p className="text-white/60 text-xs md:text-sm">Frontend Developer</p>
            </div>
          </div>

          {/* HOVER CARD - Adjusted size */}
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white/10 backdrop-blur-md text-white text-center p-8 rounded-xl border border-white/20 w-[85%] max-w-[300px]"
              >
                
                <p className="font-semibold text-xl mb-1">{name}</p>
                <p className="text-sm text-white/80 mb-2">Frontend Developer</p>
                <p className="text-xs text-white/70 leading-relaxed">
                  Crafting scalable UI architectures with modern web technologies
                </p>
                <div className="flex justify-center gap-2 mt-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Floating elements - adjusted for new size */}
        <motion.div
          className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute -bottom-6 -left-6 w-28 h-28 bg-white/5 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </div>
  );
};

export default HeroImageFrame;