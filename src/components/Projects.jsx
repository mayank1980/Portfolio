import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
import {
  FaArrowLeft,
  FaLink,
  FaUniversity,
  FaBookOpen,
  FaRunning,
  FaLock,
} from "react-icons/fa";
import Header from "../components/Header";

// --- ANIMATION VARIANTS (CORRECTED FOR A SMOOTH, CRASH-FREE ENTRANCE) ---

const pageContainerVariants = {
  hidden: {}, // No initial animation on the container itself
  visible: {
    transition: {
      staggerChildren: 0.1, // Stagger children for a soft, sequential effect
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

const listContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Reusable component for technology tags
const TechTag = ({ children }) => (
  <div className="bg-[#DBC2A6]/10 rounded-md px-3 py-1 font-['Lato'] text-xs uppercase tracking-wider">
    {children}
  </div>
);

// --- THE MAIN PROJECTS PAGE COMPONENT ---

const Projects = () => {
  return (
    <>
      <Header />

      <motion.div
        className="contents"
        variants={pageContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT COLUMN: Unisys & Confidential Projects */}
        <motion.div
          variants={columnVariants}
          className="col-span-2 row-start-2 row-span-7 bg-[#414A37] rounded-lg p-10 flex flex-col justify-between text-[#DBC2A6]"
        >
          {/* Unisys Project Section */}
          <section>
            <h2 className="text-6xl italic mb-4 flex items-center gap-4">
              <FaUniversity /> Unisys
            </h2>
            <h3 className="font-serif font-bold text-2xl mb-2">
              University Management System
            </h3>
            <p className="font-['Lato'] text-base leading-relaxed mb-4">
              A comprehensive, role-based SaaS platform for universities,
              providing dedicated dashboards for students, professors, and
              administrators to streamline academic management.
            </p>
            <motion.ul
              variants={listContainerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-2 font-['Lato'] text-base list-disc pl-5"
            >
              <motion.li variants={listItemVariants}>
                Integrated an AI-powered engine for automated exam and question
                bank generation.
              </motion.li>
              <motion.li variants={listItemVariants}>
                Implemented secure, multi-institution authentication and
                deployed on Google Cloud for scalability.
              </motion.li>
            </motion.ul>
            <div className="mt-6">
              <h4 className="font-serif font-bold text-lg mb-3">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                <TechTag>React.js</TechTag>
                <TechTag>Tailwind CSS</TechTag>
                <TechTag>Django REST API</TechTag>
                <TechTag>Google Cloud</TechTag>
              </div>
            </div>
            <a
              href="https://betaobafrontend.unisys.online"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-['Lato'] text-base flex items-center gap-2 mt-6 text-[#DBC2A6]/80 hover:text-white transition-colors"
            >
              <FaLink /> <span>View Project</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </section>

          {/* Confidential Project Section */}
          <section className="text-center opacity-40">
            <h2 className="text-7xl italic flex items-center justify-center gap-4">
              <FaLock />
              Confidential
            </h2>
            <h3 className="font-serif font-bold text-2xl mt-2">
              Enterprise Applications
            </h3>
          </section>
        </motion.div>

        {/* MIDDLE COLUMN: Taalif Project */}
        <motion.div
          variants={columnVariants}
          className="col-start-3 row-start-2 row-span-6 bg-[#99744A] rounded-lg p-10 text-white flex flex-col"
        >
          <section>
            <h2 className="text-6xl italic mb-4 flex items-center gap-4">
              <FaBookOpen /> Taalif
            </h2>
            <h3 className="font-serif font-bold text-2xl mb-2">
              Book Author Management
            </h3>
            <p className="font-['Lato'] text-base leading-relaxed mb-4">
              A multi-role publishing system with a SaaS multi-tenant
              architecture, featuring Stripe payments, real-time
              chat/notifications, and multi-language support.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechTag>React.js</TechTag>
              <TechTag>Django</TechTag>
              <TechTag>Stripe</TechTag>
              <TechTag>Google Cloud</TechTag>
            </div>
            <a
              href="https://taalif.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-['Lato'] text-base flex items-center gap-2 mt-6 hover:underline"
            >
              <FaLink /> <span>View Project</span>
            </a>
          </section>
        </motion.div>

        {/* BACK TO ABOUT LINK */}
        <motion.div
          variants={columnVariants}
          className="col-start-3 row-start-8 flex items-center justify-center"
        >
          <Link
            to="/about"
            className="group font-['Lato'] text-lg text-[#414A37] flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-[#414A37]/10 transition-colors"
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to About</span>
          </Link>
        </motion.div>

        {/* RIGHT COLUMN: Player Scouting App */}
        <motion.div
          variants={columnVariants}
          className="col-start-4 row-start-2 row-span-7 bg-[#414A37] rounded-lg p-10 text-[#DBC2A6]"
        >
          <section>
            <h2 className="text-6xl italic mb-4 flex items-center gap-4">
              <FaRunning /> Play Pulse
            </h2>
            <h3 className="font-serif font-bold text-2xl mb-2">
              Player Scouting App
            </h3>
            <p className="font-['Lato'] text-base leading-relaxed mb-6">
              A cross-platform scouting app built with Flutter and Django,
              enabling real-time player evaluations. It uses WebSockets and
              Firebase for instant updates and is deployed on AWS with a full
              CI/CD pipeline.
            </p>
            <div className="mt-6">
              <h4 className="font-serif font-bold text-lg mb-3">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                <TechTag>Flutter</TechTag>
                <TechTag>Django</TechTag>
                <TechTag>WebSockets</TechTag>
                <TechTag>Firebase</TechTag>
                <TechTag>AWS</TechTag>
                <TechTag>CI/CD</TechTag>
              </div>
            </div>
          </section>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Projects;
