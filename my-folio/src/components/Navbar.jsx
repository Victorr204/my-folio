import React, { useEffect, useRef, useState } from "react";
import { Home, User, Briefcase, Mail, FileText } from "lucide-react";
import { Link } from "react-router-dom";

import NavBarUI from "../ui/navigation/NavBarUI";
import NavLink from "../ui/navigation/NavLink";
import MobileDockUI from "../ui/navigation/MobileDockUI";
import MobileDockItem from "../ui/navigation/MobileDockItem";

import img3 from "../assets/logo02.png";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Hide immediately while scrolling
      setHidden(true);

      // Clear previous idle timer
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Show navbar when scrolling stops
      scrollTimeout.current = setTimeout(() => {
        setHidden(false);
      }, 180); // idle delay (tweakable)
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <>
      {/* DESKTOP HEADER */}
      <NavBarUI
        hidden={hidden}
        left={
          <div className="flex items-center gap-2">
            <img src={img3} alt="Victor Ruben Logo" width={42} />
            <span className="tracking-wide">Victor Ruben</span>
          </div>
        }
        center={
          <>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </>
        }
        right={
          <Link
  to="/resume"
  className="
    relative px-5 py-2.5 rounded-full
    bg-[#2563EB] text-white
    font-medium
    shadow-lg shadow-blue-500/40
    transition-all duration-300
    hover:bg-[#1D4ED8]
    after:absolute after:left-0 after:-bottom-1
    after:h-0.5 after:w-full
    after:bg-white
    after:scale-x-0 after:origin-left
    after:transition-transform after:duration-300
    hover:after:scale-x-100
  "
>
  Resume
</Link>

        }
      />

      {/* MOBILE DOCK */}
      <MobileDockUI>
        <MobileDockItem href="#hero" icon={<Home size={18} />} label="Home" />
        <MobileDockItem href="#about" icon={<User size={18} />} label="About" />
        <MobileDockItem href="#projects" icon={<Briefcase size={18} />} label="Work" />
        <MobileDockItem href="#contact" icon={<Mail size={18} />} label="Contact" />
        <MobileDockItem href="/resume" icon={<FileText size={18} />} label="Resume" />
      </MobileDockUI>
    </>
  );
};

export default Navbar;
