import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsOfService from "./pages/terms-of-service";
import CookiePolicy from "./pages/cookie-policy";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  
  // Check if current page is a policy page or resume
  const isPolicyPage = ['/privacy-policy', '/terms-of-service', '/cookie-policy'].includes(location.pathname);
  const isResumePage = location.pathname === '/resume';

  return (
    <div className="bg-neutral-50 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
      <Navbar />

      <Routes>
        {/* Main one-page layout */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Resume page */}
        <Route path="/resume" element={<Resume />} />
        
        {/* Policy pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>

      {/* Show footer on policy pages */}
      {isPolicyPage && <Footer />}
    </div>
  );
}

export default App;