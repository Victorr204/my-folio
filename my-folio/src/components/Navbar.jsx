import React, { useEffect, useRef, useState } from "react";
import { Home, User, Briefcase, Mail, FileText, ArrowLeft, Shield, Cookie, FileJson, Code, AlertCircle } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import NavBarUI from "../ui/navigation/NavBarUI";
import NavLink from "../ui/navigation/NavLink";
import MobileDockUI from "../ui/navigation/MobileDockUI";
import MobileDockItem from "../ui/navigation/MobileDockItem";

import img3 from "../assets/logo02.png";

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
            const yOffset = -80; // Offset to account for fixed header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100); // Small delay to ensure DOM is ready
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

  const handleResumeClick = (e) => {
    e.preventDefault();
    
    // Check if it's mobile (you can adjust the breakpoint as needed)
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // Show notification
      setShowNotification(true);
      
      // Clear any existing timeout
      if (notificationTimeout.current) {
        clearTimeout(notificationTimeout.current);
      }
      
      // Auto-hide after 3 seconds
      notificationTimeout.current = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } else {
      // Desktop - navigate to resume
      navigate('/resume');
    }
  };

  // Handle scrolling after navigation to home
  useEffect(() => {
    if (isHomePage && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          const yOffset = -80; // Offset to account for fixed header
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
      // Clear the state to prevent re-scrolling on refresh
      navigate('/', { replace: true, state: {} });
    }
  }, [isHomePage, location.state, navigate]);

  // If on resume page or policy page, show a simplified header with back button
  if (showSimplifiedHeader) {
    const pageTitle = getPageTitle();
    
    return (
      <>
        {/* DESKTOP HEADER - Simplified for resume/policy pages */}
        <NavBarUI
          hidden={false}
          left={
            <button
              onClick={() => navigate('/')}
              className="hidden md:flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
          }
          center={
            <div className="flex items-center gap-2 mx-auto md:mx-0">
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
          right={<div className="hidden md:block w-24" />} // Empty right for spacing (hidden on mobile)
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
            right={<div className="w-10" />} // Small spacer for balance
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
              href="#skills" 
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
            onClick={handleResumeClick}
            className={`
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
            `}
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
          href="#skills" 
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
        <MobileDockItem 
          href="/resume" 
          icon={<FileText size={18} />} 
          label="Resume"
          onClick={handleResumeClick}
        />
      </MobileDockUI>

      {/* Resume Notification for Mobile */}
      {showNotification && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-down">
          <div className="bg-amber-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 max-w-xs mx-auto">
            <AlertCircle size={20} className="flex-shrink-0" />
            <p className="text-sm font-medium">
              Resume can only be viewed on desktop
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;