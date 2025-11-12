import { motion } from "framer-motion";
import React from "react";
import { FaDownload } from "react-icons/fa";
import Header from "../components/Header";

// Import the resume PDF file
import resumePDF from "../assets/documents/resume.pdf";

// --- ANIMATION VARIANTS (CORRECTED FOR A SMOOTH, CRASH-FREE ENTRANCE) ---

const pageContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// UPDATED: Replaced the faulty ease value with a valid and professional one
const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Slightly longer duration for a more graceful feel
      ease: "easeInOut", // THIS LINE IS THE FIX - a standard, smooth easing function
    },
  },
};

// --- THE MAIN RESUME PAGE COMPONENT ---

const Resume = () => {
  return (
    <>
      <Header />

      <motion.div
        className="contents"
        variants={pageContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT COLUMN: Introduction & Download Button */}
        <motion.div
          variants={columnVariants}
          className="col-span-1 row-start-2 row-span-7 bg-[#414A37] rounded-lg p-10 flex flex-col justify-center text-[#DBC2A6]"
        >
          <section>
            <h2 className="text-7xl italic">
              My <br /> Resume
            </h2>
            <p className="font-['Lato'] text-lg leading-relaxed my-8">
              Here you can view my full resume, detailing my professional
              experience, projects, and technical skills. For your convenience,
              a direct download link is also available.
            </p>
            <motion.a
              href={resumePDF}
              download="Mayank_Mehra_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 w-full bg-[#DBC2A6] text-[#414A37] font-bold py-4 px-6 rounded-lg uppercase tracking-wider transition-colors hover:bg-white justify-center"
            >
              <FaDownload />
              <span>Download Resume</span>
            </motion.a>
          </section>
        </motion.div>

        {/* RIGHT COLUMN: Embedded PDF Viewer */}
        <motion.div
          variants={columnVariants}
          className="col-start-2 col-span-3 row-start-2 row-span-7 bg-[#DBC2A6] rounded-lg p-2"
        >
          {/* This outer div creates the dark border effect */}
          <div className="w-full h-full bg-gray-200 rounded-md overflow-hidden">
            <iframe
              src={resumePDF}
              title="Mayank Mehra's Resume"
              className="w-full h-full border-none" // Iframe itself is borderless
            >
              <p>
                Your browser does not support PDFs. Please download the PDF to
                view it.
              </p>
            </iframe>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Resume;
