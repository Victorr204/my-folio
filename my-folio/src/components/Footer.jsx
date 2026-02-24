import React from "react";
import { Link } from "react-router-dom"; // Add this import
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

import FooterUI from "../ui/footer/FooterUI";
import FooterRow from "../ui/footer/FooterRow";
import FooterColumn from "../ui/footer/FooterColumn";
import FooterLink from "../ui/footer/FooterLink";
import ContactSocialsUI from "../ui/contact/ContactSocialsUI";
import FadeUp from "../ui/motion/FadeUp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterUI>
      {/* HEADER ROW */}
      <FooterRow>
        {/* Left */}
        <FooterColumn>
          <FadeUp>
            <p className="text-3xl font-extrabold mb-2">Victor Ruben</p>
            <p className="text-sm opacity-70 max-w-xs">
              Building engaging web experiences and scalable applications. Let’s create something extraordinary together!
            </p>
          </FadeUp>
        </FooterColumn>

        {/* Center */}
        <FooterColumn>
          <FadeUp delay={0.2}>
            <p className="font-medium mb-2">Let's stay connected</p>
            <p className="text-xs opacity-70 mb-2 text-center">
              Follow me on social media for updates, tips, and projects.
            </p>
            <ContactSocialsUI>
              <a href="https://github.com/victorr204" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/victor-ruben-566546397" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                <FaLinkedin size={28} />
              </a>
              <a href="https://wa.me/2349037306845" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors">
                <FaWhatsapp size={28} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                <FaFacebookF size={28} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
                <FaInstagram size={28} />
              </a>
            </ContactSocialsUI>
          </FadeUp>
        </FooterColumn>

        {/* Right */}
        <FooterColumn>
          <FadeUp delay={0.4}>
            <p className="text-sm opacity-70 mb-2">
              Want to collaborate or discuss a project? Let’s talk!
            </p>
            <FooterLink
              href="mailto:victorreuben707@gmail.com"
              className="font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full px-4 py-2 transition-colors"
            >
              Start a Conversation
            </FooterLink>
          </FadeUp>
        </FooterColumn>
      </FooterRow>

      {/* SEPARATOR */}
      <div className="border-t border-gray-700 mt-8" />

      {/* BOTTOM ROW */}
      <FooterRow className="mt-6">
        {/* Left */}
        <FooterColumn>
          <FadeUp>
            <p className="text-sm opacity-70">© {currentYear} Victor Ruben</p>
          </FadeUp>
        </FooterColumn>

        {/* Right - Policy Links - FIXED WITH REACT ROUTER LINK */}
        <FooterColumn className="flex flex-row gap-4">
          <FadeUp delay={0.2}>
            <Link to="/privacy-policy" className="text-sm opacity-70 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
          </FadeUp>
          <FadeUp delay={0.3}>
            <Link to="/terms-of-service" className="text-sm opacity-70 hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </FadeUp>
          <FadeUp delay={0.4}>
            <Link to="/cookie-policy" className="text-sm opacity-70 hover:text-blue-400 transition-colors">
              Cookie Policy
            </Link>
          </FadeUp>
        </FooterColumn>
      </FooterRow>
    </FooterUI>
  );
}