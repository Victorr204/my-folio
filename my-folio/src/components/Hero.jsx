import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import img from "../assets/my-img.jpg";

/* UI Components */
import HeroSection from "../ui/layout/HeroSection";
import HeroTextBlock from "../ui/layout/HeroTextBlock";
import HeroImageBlock from "../ui/layout/HeroImageBlock";
import HeroImageFrame from "../ui/layout/HeroImageFrame";

import HeroTagline from "../ui/typography/HeroTagline";
import HeroTitle from "../ui/typography/HeroTitle";
import HeroDescription from "../ui/typography/HeroDescription";

import PrimaryButton from "../ui/buttons/PrimaryButton";

export default function Hero({ avatar }) {
  const avatarSrc = avatar || img;

  // Phrases for animations
  const taglinePhrases = [
    "Front-End Developer | React & React Native",
    "Specializing in Scalable UI Architecture",
  ];

  const titlePhrases = [
    "I build scalable and interactive frontend applications.",
    "I craft responsive and high-performance UI solutions.",
    "I design modern web and mobile interfaces.",
  ];

  return (
    <HeroSection>
      {/* TEXT */}
      <HeroTextBlock>
        {/* Animated tagline */}
        <HeroTagline phrases={taglinePhrases} />

        {/* Animated title */}
        <HeroTitle phrases={titlePhrases} />

        <HeroDescription>
          A passionate developer focused on crafting high-performing,
          responsive interfaces and delightful digital experiences.
        </HeroDescription>

        {/* ACTIONS */}
        <div className="flex items-center justify-center md:justify-start gap-6 mt-8">
          <a
            href="https://github.com/victorr204"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="opacity-80 hover:opacity-100 transition"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/victor-ruben-566546397"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="opacity-80 hover:opacity-100 transition"
          >
            <FaLinkedin size={28} />
          </a>

          <PrimaryButton href="#projects">
            View Projects
          </PrimaryButton>
        </div>
      </HeroTextBlock>

      {/* IMAGE */}
      <HeroImageBlock>
        <HeroImageFrame
          src={avatarSrc}
          alt="Victor Ruben"
          name="Victor Ruben"
        />
      </HeroImageBlock>
    </HeroSection>
  );
}
