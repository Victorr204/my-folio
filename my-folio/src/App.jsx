import React from "react";
import { Routes, Route } from "react-router-dom";

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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-of-service" element={<TermsOfService />} />
    <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </div>
  );
}

export default App;
