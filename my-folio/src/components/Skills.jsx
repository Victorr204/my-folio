import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiReactquery } from "react-icons/si";

import SkillsSection from "../ui/layout/SkillsSection";
import SkillCategoryCard from "../ui/layout/SkillCategoryCard";
import SectionTitle from "../ui/typography/SectionTitle";
import SectionSubtitle from "../ui/typography/SectionSubtitle";

import { colors } from "../ui/theme/colors";

export default function Skills() {
  const programmingStack = [
    { icon: <FaHtml5 color="#E34F26" />, label: "HTML" },
    { icon: <FaCss3Alt color="#1572B6" />, label: "CSS" },
    { icon: <FaJs color="#F7DF1E" />, label: "JavaScript" },
    { icon: <FaReact color="#61DAFB" />, label: "React" },
    { icon: <SiVite color="#646CFF" />, label: "Vite" },
    { icon: <FaNodeJs color="#339933" />, label: "Node.js" },
  ];

  const uiuxStack = [
    { icon: <SiTailwindcss color="#38BDF8" />, label: "Tailwind CSS" },
    { icon: <FaCss3Alt color="#38BDF8" />, label: "NativeWind" },
    { icon: <FaFigma color="#F24E1E" />, label: "Figma" },
  ];

  const webDevStack = [
    { icon: <FaReact color="#61DAFB" />, label: "React" },
    { icon: <SiVite color="#646CFF" />, label: "Vite" },
    { icon: <SiTailwindcss color="#38BDF8" />, label: "Tailwind CSS" },
    { icon: <SiReactquery color="#FF4154" />, label: "React Query" },
  ];

  const mobileDevStack = [
    { icon: <FaReact color="#61DAFB" />, label: "React Native" },
    { icon: <FaCss3Alt color="#38BDF8" />, label: "NativeWind" },
    { icon: <FaJs color="#F7DF1E" />, label: "JavaScript" },
  ];

  const descriptionText = {
    "Programming & Tech Stack": "Core programming languages and frameworks I use daily.",
    "UI/UX & Creative Design": "Tools and frameworks for design and interface development.",
    "Web Dev (Frontend)": "Frontend web development toolkit for modern web apps.",
    "Mobile Dev (Frontend)": "Frontend stack for building responsive mobile apps.",
  };

  // Motion variants for staggered children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <SkillsSection id="skills" className={`bg-[${colors.background}] py-28 px-6`}>
      <div className="max-w-7xl mx-auto text-center">
        <SectionTitle>Explore My Skills</SectionTitle>
        <SectionSubtitle className="max-w-7xlmx-auto mb-16 text-center">
          Technologies that power my frontend development toolkit
        </SectionSubtitle>

        <motion.div
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={cardVariants}>
            <SkillCategoryCard
              title="Programming & Tech Stack"
              icons={programmingStack}
              description={descriptionText["Programming & Tech Stack"]}
              iconCols={3}
            />
          </motion.div>

          <motion.div variants={cardVariants}>
            <SkillCategoryCard
              title="UI/UX & Creative Design"
              icons={uiuxStack}
              description={descriptionText["UI/UX & Creative Design"]}
              iconCols={3}
            />
          </motion.div>

          <motion.div variants={cardVariants}>
            <SkillCategoryCard
              title="Web Dev (Frontend)"
              icons={webDevStack}
              description={descriptionText["Web Dev (Frontend)"]}
              iconCols={3}
            />
          </motion.div>

          <motion.div variants={cardVariants}>
            <SkillCategoryCard
              title="Mobile Dev (Frontend)"
              icons={mobileDevStack}
              description={descriptionText["Mobile Dev (Frontend)"]}
              iconCols={3}
            />
          </motion.div>
        </motion.div>
      </div>
    </SkillsSection>
  );
}
