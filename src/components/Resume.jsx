import { motion } from "framer-motion";
import React from "react";
import { FaDownload } from "react-icons/fa";
import Header from "../components/Header";
import resumePDF from "../assets/documents/resume.pdf";

const pageContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

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
          className="w-full lg:w-auto lg:col-span-1 lg:row-start-2 lg:row-span-7 bg-[#414A37] rounded-lg p-6 lg:p-10 flex flex-col justify-center text-[#DBC2A6]"
        >
          <section>
            <h2 className="text-5xl lg:text-7xl italic">
              My <br className="hidden lg:block" /> Resume
            </h2>
            <p className="font-['Lato'] text-base lg:text-lg leading-relaxed my-6 lg:my-8">
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
          // RESPONSIVE FIX: Hidden on mobile (use download button), visible on lg
          className="hidden lg:block lg:col-start-2 lg:col-span-3 lg:row-start-2 lg:row-span-7 bg-[#DBC2A6] rounded-lg p-2"
        >
          <div className="w-full h-full bg-gray-200 rounded-md overflow-hidden">
            <iframe
              src={resumePDF}
              title="Mayank Mehra's Resume"
              className="w-full h-full border-none"
            >
              <p>
                Your browser does not support PDFs. Please download the PDF to
                view it.
              </p>
            </iframe>
          </div>
        </motion.div>

        {/* MOBILE ONLY MESSAGE */}
        <motion.div
          variants={columnVariants}
          className="block lg:hidden w-full bg-[#DBC2A6] rounded-lg p-6 text-[#414A37] text-center"
        >
          <p>
            The live preview is optimized for desktop viewing. Please use the
            button above to download and view the PDF.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Resume;
