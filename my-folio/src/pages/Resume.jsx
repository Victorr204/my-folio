import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, FileText, Eye, Printer, Award, Calendar, MapPin } from "lucide-react";
import { Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  const [pdfError, setPdfError] = useState(false);
  const [activeTab, setActiveTab] = useState("preview");

  // Sample data - replace with your actual resume data
  const personalInfo = {
    name: "Victor Ruben",
    title: "software Developer/Frontend Mobile Developer",
    email: "victorreuben707@gmail.com",
    phone: "+(234) 9037306845",
    location: "Lagos, Nigeria",
  };

  const experience = [
    {
      company: "Web#bridge",
      position: "intern",
      period: "2024 - 2025",
      description: "Advance my skills in frontend development. learning the advance of web development"
    },
    
  ];

  const education = [
    {
      degree: "B.S. Computer Science",
      school: "",
      period: "2025 - 2029",
      gpa: ""
    }
  ];

  const skills = [
    "React", "ReactNative", "javascript", "html", "Css", 
    "Tailwind-Css", "expo",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-[#0A0F1E] dark:to-[#0F1A2F] pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Header with actions */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Professional Resume
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Updated February 2024
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => window.print()}
              className="px-5 py-2.5 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 border border-gray-200 dark:border-gray-700"
            >
              <Printer size={18} />
              <span className="hidden sm:inline">Print</span>
            </button>
            
            <a
              href="/resume.pdf"
              download="Victor_Ruben_Resume.pdf"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} />
              <span>Download PDF</span>
            </a>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-2 mb-6 bg-white/50 dark:bg-gray-800/50 p-1 rounded-2xl backdrop-blur-sm w-fit"
        >
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === "preview"
                ? "bg-blue-600 text-white shadow-lg"
                : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            <Eye size={18} />
            Preview
          </button>
          <button
            onClick={() => setActiveTab("details")}
            className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === "details"
                ? "bg-blue-600 text-white shadow-lg"
                : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            <FileText size={18} />
            Details
          </button>
        </motion.div>

        {/* Content based on active tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "preview" ? (
            /* PDF Preview Section */
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
              {!pdfError ? (
                <iframe
                  src="/resume.pdf#toolbar=0&navpanes=0"
                  title="Resume Preview"
                  className="w-full h-[80vh] rounded-lg"
                  onError={() => setPdfError(true)}
                />
              ) : (
                <div className="w-full h-[80vh] bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center text-center p-8">
                  <FileText size={80} className="text-blue-600/30 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                    PDF Preview Unavailable
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                    The PDF viewer couldn't load. Please use the download button above or view the detailed version below.
                  </p>
                  <button
                    onClick={() => setActiveTab("details")}
                    className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                  >
                    View Detailed Resume
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Detailed Resume View */
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl p-8">
              {/* Personal Header */}
              <div className="text-center mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {personalInfo.name}
                </h2>
                <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">
                  {personalInfo.title}
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>{personalInfo.email}</span>
                  <span>•</span>
                  <span>{personalInfo.phone}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Skills Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Award size={20} className="text-blue-600" />
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Briefcase size={20} className="text-blue-600" />
                  Professional Experience
                </h3>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-800">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600" />
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {exp.position}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <GraduationCap size={20} className="text-blue-600" />
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                    <div className="flex flex-wrap justify-between items-start">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400">{edu.school}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.period}
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Footer with additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400"
        >
          <p>© 2024 Victor Ruben. All rights reserved. | Last updated: 2026</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
