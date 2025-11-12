import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import Header from "./Header";
import manPortrait from "../assets/man-portrait.png";
import aside from "../assets/aside-image.png";

// Animation variants (no changes needed)
const baseTransition = { type: "spring", damping: 20, stiffness: 90 };
const fromLeftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: baseTransition },
};
const fromRightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: baseTransition },
};
const fromBottomVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};
const nameVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 18, stiffness: 80, delay: 0.2 },
  },
  exit: {
    opacity: 0,
    y: -5,
    transition: { type: "spring", damping: 18, stiffness: 120 },
  },
};

const coreServices = [
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive and user-centered interfaces that are both beautiful and functional.",
  },
  {
    title: "Frontend Development",
    description:
      "Bringing designs to life with clean, efficient, and responsive code using modern frameworks.",
  },
  {
    title: "Prototyping & Testing",
    description:
      "Creating interactive prototypes to validate design concepts and gather user feedback early.",
  },
];

const Portfolio = () => {
  // 1. Initialize state by checking sessionStorage first.
  // If the 'animationShown' flag exists, the grid is visible immediately.
  const [isGridVisible, setIsGridVisible] = useState(
    !!sessionStorage.getItem("hasInitialAnimationShown")
  );

  useEffect(() => {
    // 2. Only run the animation timer if the grid isn't already visible.
    if (!isGridVisible) {
      const timer = setTimeout(() => {
        setIsGridVisible(true);
        // 3. Set a flag in sessionStorage so this doesn't run again during the session.
        sessionStorage.setItem("hasInitialAnimationShown", "true");
      }, 1500);

      // Cleanup function to prevent memory leaks
      return () => clearTimeout(timer);
    }
  }, [isGridVisible]); // The effect depends on isGridVisible

  return (
    <>
      {/* HEADER IS RENDERED ONLY IN THE FINAL STATE */}
      <AnimatePresence>{isGridVisible && <Header />}</AnimatePresence>

      {/* THE MOVING PORTRAIT */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1 }}
        className={`
          ${
            isGridVisible
              ? "col-start-3 row-start-2 row-span-4"
              : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-80"
          }
          bg-[#99744A] rounded-lg overflow-hidden aspect-7/10 z-10
        `}
      >
        <img
          src={manPortrait}
          alt="Portrait of Mayank Mehra"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* The main grid content that appears in Phase 2 */}
      <AnimatePresence>
        {isGridVisible && (
          <motion.div
            className="contents"
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 0.45, staggerChildren: 0.1 }}
          >
            {/* Main Headline */}
            <motion.div
              variants={fromLeftVariants}
              className="col-span-2 row-span-3 row-start-2 bg-[#414A37] rounded-lg p-8 flex flex-col justify-center"
            >
              <h2 className="text-[#DBC2A6] text-6xl font-bold leading-tight">
                Building beautiful & <br /> functional digital <br /> products.
              </h2>
            </motion.div>

            {/* Core Services */}
            <motion.div
              variants={fromRightVariants}
              className="col-start-4 row-start-2 row-span-7 bg-[#414A37] rounded-lg p-4 flex flex-col"
            >
              <div className="p-2">
                <p className="text-[#DBC2A6] font-bold text-lg">
                  Core Services
                </p>
                <div className="w-full h-40 mt-2 rounded-md overflow-hidden">
                  <img
                    src={aside}
                    className="w-full h-full object-cover"
                    alt="Collaborative design session"
                  />
                </div>
              </div>
              <div className="mt-6 grow flex flex-col justify-around px-2">
                {coreServices.map((service) => (
                  <div
                    key={service.title}
                    className="py-2 border-t border-[#DBC2A6]/10"
                  >
                    <h3 className="text-[#DBC2A6] font-bold text-md">
                      {service.title}
                    </h3>
                    <p className="text-[#DBC2A6]/80 text-sm font-['Lato'] leading-relaxed mt-1">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* My Philosophy */}
            <motion.div
              variants={fromLeftVariants}
              className="col-span-2 row-start-5 row-span-2 bg-[#414A37] rounded-lg p-8 flex flex-col justify-center"
            >
              <h3 className="text-[#DBC2A6] font-bold text-xl mb-4 italic">
                My Philosophy
              </h3>
              <p className="text-[#DBC2A6]/90 text-base leading-relaxed">
                I believe in blending clean code with user-centric design to
                create digital experiences that are not only intuitive and
                engaging, but also beautiful and efficient.
              </p>
            </motion.div>

            {/* Contact CTA */}
            <Link to="/contact" className="col-span-2 row-start-7 row-span-2">
              <motion.div
                variants={fromLeftVariants}
                className="w-full h-full bg-[#414A37] rounded-lg flex items-center justify-center relative group cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#DBC2A6]/50 absolute top-6 right-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 4h8v8M18 4L6 18"
                  />
                </svg>
                <h3 className="text-[#DBC2A6] text-7xl italic">Get in touch</h3>
              </motion.div>
            </Link>

            {/* Social Links */}
            <motion.div
              variants={fromBottomVariants}
              className="col-start-3 row-start-8 flex items-center justify-center gap-16 font-['Lato'] uppercase tracking-widest text-[#414A37] text-sm"
            >
              <a
                href="https://github.com/mayank1980"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-transform duration-200 hover:scale-105"
              >
                <FaGithub size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mayank-mehra-13a678230"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-transform duration-200 hover:scale-105"
              >
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The name splash screen ONLY renders if isGridVisible is false */}
      <AnimatePresence>
        {!isGridVisible && (
          <motion.div
            key="initial-name"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-[calc(50%+200px)] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <h1 className="text-[#414A37] italic text-2xl">Mayank Mehra</h1>
            <p className="text-[#414A37]/80 font-['Lato'] uppercase tracking-widest text-xs mt-1">
              UI/UX & Frontend Developer
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
