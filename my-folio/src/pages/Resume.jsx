import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section className="min-h-screen bg-[#0F172A] pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-6"
        >
          My Resume
        </motion.h1>

        <div className="bg-[#1E293B] rounded-2xl p-6 border border-white/10 shadow-xl">
          {/* Resume preview */}
          <iframe
            src="/resume.pdf"
            title="Resume Preview"
            className="w-full h-[75vh] rounded-lg"
          />
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="
              px-6 py-3 rounded-full
              bg-[#2563EB]
              text-white font-medium
              shadow-lg shadow-blue-500/40
              transition hover:bg-[#1D4ED8]
            "
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
