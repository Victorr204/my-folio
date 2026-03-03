import React, { useEffect, useRef, useState } from "react";
import { Home, User, Briefcase, Mail, FileText, ArrowLeft, Shield, Cookie, FileJson, Code, AlertCircle, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import NavBarUI from "../ui/navigation/NavBarUI";
import NavLink from "../ui/navigation/NavLink";
import MobileDockUI from "../ui/navigation/MobileDockUI";
import MobileDockItem from "../ui/navigation/MobileDockItem";

import img3 from "../assets/logo02.png";

// Custom Alert Component
const CustomAlert = ({ message, type = "warning", onClose }) => {
  const alertStyles = {
    warning: "bg-amber-50 border-amber-200 text-amber-800",
    error: "bg-red-50 border-red-200 text-red-800",
    success: "bg-green-50 border-green-200 text-green-800",
    info: "bg-blue-50 border-blue-200 text-blue-800"
  };

  const iconColors = {
    warning: "text-amber-500",
    error: "text-red-500",
    success: "text-green-500",
    info: "text-blue-500"
  };

  return (
    <div className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md animate-slide-down`}>
      <div className={`${alertStyles[type]} border rounded-lg shadow-lg p-4 flex items-start gap-3`}>
        <AlertCircle size={20} className={`${iconColors[type]} flex-shrink-0 mt-0.5`} />
        <p className="text-sm font-medium flex-1">{message}</p>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const scrollTimeout = useRef(null);
  const notificationTimeout = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const isHomePage = location.pathname === "/";
  const isResumePage = location.pathname === "/resume";
  
  // Check if current page is a policy page
  const policyPages = ['/privacy-policy', '/terms-of-service', '/cookie-policy'];
  const isPolicyPage = policyPages.includes(location.pathname);
  
  // Determine if we should show the simplified header (for resume or policy pages)
  const showSimplifiedHeader = isResumePage || isPolicyPage;

  // Get page title for the back button context
  const getPageTitle = () => {
    if (isResumePage) return "Resume";
    if (location.pathname === '/privacy-policy') return "Privacy Policy";
    if (location.pathname === '/terms-of-service') return "Terms of Service";
    if (location.pathname === '/cookie-policy') return "Cookie Policy";
    return "";
  };

  useEffect(() => {
    const handleScroll = () => {
      // Don't hide on resume page or policy pages
      if (showSimplifiedHeader) return;
      
      setHidden(true);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setHidden(false);
      }, 180);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [showSimplifiedHeader]);

  // Cleanup notification timeout
  useEffect(() => {
    return () => {
      if (notificationTimeout.current) {
        clearTimeout(notificationTimeout.current);
      }
    };
  }, []);

  const handleHashLinkClick = (e, href) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      
      if (!isHomePage) {
        // If not on home page, navigate home first with the section to scroll to
        navigate('/', { state: { scrollTo: sectionId } });
      } else {
        // If on home page, just scroll
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const yOffset = -100; // Increased offset to account for fixed header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ 
              top: y, 
              behavior: 'smooth' 
            });
          } else {
            console.log(`Element with id "${sectionId}" not found`);
          }
        }, 150); // Increased delay to ensure DOM is ready
      }
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (!isHomePage) {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Desktop resume click handler
  const handleDesktopResumeClick = (e) => {
    e.preventDefault();
    navigate('/resume');
  };

  // Mobile resume click handler
const handleMobileResumeClick = (e) => {
  e.preventDefault();
  e.stopPropagation(); // Add this to prevent event bubbling
  
  console.log("Mobile resume clicked!"); // Add this to debug
  
  // Simply show the notification
  setShowNotification(true);
  
  // Auto-hide after 3 seconds
  setTimeout(() => {
    setShowNotification(false);
  }, 3000);
};

  // Handle scrolling after navigation to home
  useEffect(() => {
    if (isHomePage && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          const yOffset = -100; // Offset to account for fixed header
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ 
            top: y, 
            behavior: 'smooth' 
          });
        }, 200);
      }
      // Clear the state to prevent re-scrolling on refresh
      navigate('/', { replace: true, state: {} });
    }
  }, [isHomePage, location.state, navigate]);

  // Add effect to check if elements exist on page load
  useEffect(() => {
    if (isHomePage) {
      // Verify that sections exist
      const sections = ['about', 'skills', 'projects', 'contact'];
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (!element) {
          console.log(`Section with id "${id}" not found on page`);
        }
      });
    }
  }, [isHomePage]);

  // If on resume page or policy page, show a simplified header with back button
  if (showSimplifiedHeader) {
    const pageTitle = getPageTitle();
    
    return (
      <>
      {/* DESKTOP HEADER */}
<NavBarUI
  hidden={hidden}
  left={
    <button
      onClick={handleHomeClick}
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <img src={img3} alt="Victor Ruben Logo" width={42} />
      <span className="tracking-wide">Victor Ruben</span>
    </button>
  }
  center={
    <>
      <NavLink 
        href="#about" 
        onClick={(e) => handleHashLinkClick(e, '#about')}
        active={location.hash === '#about'}
      >
        About
      </NavLink>
      <NavLink 
        href="#skills"  // Changed from "#Skills" to "#skills" (lowercase)
        onClick={(e) => handleHashLinkClick(e, '#skills')}
        active={location.hash === '#skills'}
      >
        Skills
      </NavLink>
      <NavLink 
        href="#projects" 
        onClick={(e) => handleHashLinkClick(e, '#projects')}
        active={location.hash === '#projects'}
      >
        Projects
      </NavLink>
      <NavLink 
        href="#contact" 
        onClick={(e) => handleHashLinkClick(e, '#contact')}
        active={location.hash === '#contact'}
      >
        Contact
      </NavLink>
    </>
  }
  right={
    <button
      onClick={handleDesktopResumeClick}
      className="hidden md:block relative px-5 py-2.5 rounded-full bg-[#2563EB] text-white font-medium shadow-lg shadow-blue-500/40 transition-all duration-300 hover:bg-[#1D4ED8] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
    >
      Resume
    </button>
  }
/>
        
        {/* Mobile header - only shows page name, no back button */}
        <div className="md:hidden">
          <NavBarUI
            hidden={false}
            left={<div className="w-10" />} // Empty left for balance
            center={
              <div className="flex items-center gap-2">
                {isPolicyPage && (
                  <>
                    {location.pathname === '/privacy-policy' && <Shield size={20} className="text-blue-500" />}
                    {location.pathname === '/terms-of-service' && <FileJson size={20} className="text-blue-500" />}
                    {location.pathname === '/cookie-policy' && <Cookie size={20} className="text-blue-500" />}
                  </>
                )}
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {pageTitle}
                </span>
              </div>
            }
            right={<div className="w-10" />} 
          />
        </div>
        
        {/* Mobile bottom back button - only on mobile */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-full shadow-lg shadow-blue-500/40 hover:bg-[#1D4ED8] transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </button>
        </div>
      </>
    );
  }

  // Regular navbar for home page
  return (
    <>
      {/* DESKTOP HEADER */}
      <NavBarUI
        hidden={hidden}
        left={
          <button
            onClick={handleHomeClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src={img3} alt="Victor Ruben Logo" width={42} />
            <span className="tracking-wide">Victor Ruben</span>
          </button>
        }
        center={
          <>
            <NavLink 
              href="#about" 
              onClick={(e) => handleHashLinkClick(e, '#about')}
              active={location.hash === '#about'}
            >
              About
            </NavLink>
            <NavLink 
              href="#Skills" 
              onClick={(e) => handleHashLinkClick(e, '#skills')}
              active={location.hash === '#skills'}
            >
              Skills
            </NavLink>
            <NavLink 
              href="#projects" 
              onClick={(e) => handleHashLinkClick(e, '#projects')}
              active={location.hash === '#projects'}
            >
              Projects
            </NavLink>
            <NavLink 
              href="#contact" 
              onClick={(e) => handleHashLinkClick(e, '#contact')}
              active={location.hash === '#contact'}
            >
              Contact
            </NavLink>
          </>
        }
        right={
          <button
            onClick={handleDesktopResumeClick}
            className="hidden md:block relative px-5 py-2.5 rounded-full bg-[#2563EB] text-white font-medium shadow-lg shadow-blue-500/40 transition-all duration-300 hover:bg-[#1D4ED8] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Resume
          </button>
        }
      />

      {/* MOBILE DOCK - Updated: Removed Home, added Skills */}
<MobileDockUI>
  <MobileDockItem 
    href="#about" 
    icon={<User size={18} />} 
    label="About"
    onClick={(e) => handleHashLinkClick(e, '#about')}
    active={location.hash === '#about'}
  />
  <MobileDockItem 
    href="#skills"  // Changed from "#Skills" to "#skills" (lowercase)
    icon={<Code size={18} />} 
    label="Skills"
    onClick={(e) => handleHashLinkClick(e, '#skills')}
    active={location.hash === '#skills'}
  />
  <MobileDockItem 
    href="#projects" 
    icon={<Briefcase size={18} />} 
    label="Projects"
    onClick={(e) => handleHashLinkClick(e, '#projects')}
    active={location.hash === '#projects'}
  />
  <MobileDockItem 
    href="#contact" 
    icon={<Mail size={18} />} 
    label="Contact"
    onClick={(e) => handleHashLinkClick(e, '#contact')}
    active={location.hash === '#contact'}
  />
  <div onClick={handleMobileResumeClick}>
    <MobileDockItem 
      href="#"  
      icon={<FileText size={18} />} 
      label="Resume"
    />
  </div>
</MobileDockUI>

      {/* Resume Notification for Mobile - Using Custom Alert */}
      {showNotification && (
        <CustomAlert 
          message="Resume can only be viewed on desktop. Please visit on a larger screen."
          type="warning"
          onClose={() => setShowNotification(false)}
        />
      )}
    </>
  );
};

export default Navbar;