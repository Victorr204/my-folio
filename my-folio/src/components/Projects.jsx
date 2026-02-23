import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import Section from "../ui/layout/Section";
import SectionTitle from "../ui/typography/SectionTitle";
import ProjectGrid from "../ui/layout/ProjectGrid";
import ProjectCard from "../ui/layout/ProjectCard";
import ProjectImage from "../ui/layout/ProjectImage";
import ProjectContent from "../ui/layout/ProjectContent";

import img1 from "../assets/images/easymatch.jpg";
import img2 from "../assets/images/ruxx-digital.jpg";
import img3 from "../assets/images/portfolio.png";

const projects = [
  {
    title: "EasyMatch",
    desc: "A matchmaking web app built with React and Tailwind for seamless connections.",
    image: img1,
    github: "https://github.com/victorr204/Easy-match",
    link: "https://easymatch.name.ng",
  },
  {
    title: "Ruxx Digital Services",
    desc: "A modern digital service platform built with React Native and Appwrite.",
    image: img2,
    github: "https://github.com/victorr204/RUXX",
    link: "https://ruxxdigital.name.ng",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React, Tailwind, and Framer Motion animations.",
    image: img3,
    github: "https://github.com/victorr204/my-folio",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>

      <ProjectGrid>
        {projects.map((p, i) => (
          <ProjectCard key={i} delay={i * 0.15}>
            <ProjectImage src={p.image} alt={p.title} />
            <ProjectContent title={p.title} desc={p.desc}>
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
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              )}
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Section>
  );
}
