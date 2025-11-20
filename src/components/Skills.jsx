import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
import {
  FaArrowLeft,
  FaDatabase,
  FaNodeJs,
  FaPalette,
  FaReact,
  FaTools,
} from "react-icons/fa";
import { SiFlutter, SiDjango } from "react-icons/si";
import Header from "../components/Header";

const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 30,
  mass: 1.5,
};

const pageContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: smoothSpring },
};

const listContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { ...smoothSpring, duration: 0.8 } },
};

const Skills = () => {
  return (
    <>
      <Header />

      <motion.div
        className="contents"
        variants={pageContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT COLUMN */}
        <motion.div
          variants={columnVariants}
          className="w-full lg:w-auto lg:col-span-2 lg:row-start-2 lg:row-span-7 bg-[#414A37] rounded-lg p-6 lg:p-10 flex flex-col gap-8 lg:gap-10 text-[#DBC2A6]"
        >
          <section>
            <h2 className="text-4xl lg:text-6xl italic mb-8">
              Core Competencies
            </h2>
            <p className="font-['Lato'] text-base lg:text-lg leading-relaxed mb-8">
              My expertise is centered around creating modern, responsive, and
              performant applications. I approach every project with a focus on
              clean architecture and a seamless user experience.
            </p>
            <motion.ul
              variants={listContainerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.li variants={listItemVariants}>
                <h3 className="font-serif font-bold text-xl lg:text-2xl mb-2">
                  Front-End Development
                </h3>
                <p className="font-['Lato'] text-base lg:text-lg leading-relaxed">
                  I build dynamic user interfaces with React.js, managing
                  complex state with Redux. I am proficient in modern
                  JavaScript, TypeScript, and creating pixel-perfect layouts
                  with Tailwind CSS.
                </p>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <h3 className="font-serif font-bold text-xl lg:text-2xl mb-2">
                  Cross-Platform & Mobile
                </h3>
                <p className="font-['Lato'] text-base lg:text-lg leading-relaxed">
                  Using Flutter and Dart, I create natively compiled
                  applications for mobile from a single codebase, ensuring
                  consistent performance and design across both iOS and Android.
                </p>
              </motion.li>
            </motion.ul>
          </section>
        </motion.div>

        {/* MIDDLE COLUMN */}
        <motion.div
          variants={columnVariants}
          className="w-full lg:w-auto lg:col-start-3 lg:row-start-2 lg:row-span-6 bg-[#99744A] rounded-lg p-6 lg:p-10 text-white flex flex-col gap-8 lg:gap-10"
        >
          <section>
            <h2 className="text-4xl lg:text-6xl italic mb-8">
              Tools & Workflow
            </h2>
            <motion.div
              variants={listContainerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={listItemVariants}>
                <h3 className="font-serif font-bold text-xl lg:text-2xl mb-2 flex items-center gap-3">
                  <FaTools /> Version Control & DevOps
                </h3>
                <p className="font-['Lato'] text-base leading-relaxed pl-8">
                  Git, GitHub, GitHub Actions (CI/CD), Firebase, Google Cloud.
                </p>
              </motion.div>
              <motion.div variants={listItemVariants}>
                <h3 className="font-serif font-bold text-xl lg:text-2xl mb-2 flex items-center gap-3">
                  <FaPalette /> Design & Prototyping
                </h3>
                <p className="font-['Lato'] text-base leading-relaxed pl-8">
                  Tailwind css, Responsive Design Principles, Component-Based
                  Architecture.
                </p>
              </motion.div>
            </motion.div>
          </section>
        </motion.div>

        {/* BACK TO ABOUT LINK */}
        <motion.div
          variants={columnVariants}
          className="w-full lg:w-auto lg:col-start-3 lg:row-start-8 flex items-center justify-center py-4 lg:py-0"
        >
          <Link
            to="/about"
            className="group font-['Lato'] text-lg text-[#414A37] flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-[#414A37]/10 transition-colors"
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to About</span>
          </Link>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          variants={columnVariants}
          className="w-full lg:w-auto lg:col-start-4 lg:row-start-2 lg:row-span-7 bg-[#414A37] rounded-lg p-6 lg:p-10 text-[#DBC2A6]"
        >
          <h2 className="text-4xl lg:text-6xl italic mb-10">Proficiency</h2>
          <motion.div
            variants={listContainerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* --- React.js --- */}
            <motion.div variants={listItemVariants}>
              <h3 className="font-serif font-bold text-xl lg:text-2xl mb-2 flex items-center gap-3">
                <FaReact /> <span>React.js</span>
              </h3>
              <div className="w-full bg-[#DBC2A6]/10 rounded-full h-2.5">
                <motion.div
                  className="bg-[#DBC2A6] h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "90%" }}
                  transition={{ ...smoothSpring, duration: 2, delay: 0.5 }}
                />
              </div>
            </motion.div>

            {/* --- Flutter --- */}
            <motion.div variants={listItemVariants}>
              <h3 className="font-serif font-bold text-xl lg:text-2xl mb-2 flex items-center gap-3">
                <SiFlutter /> <span>Flutter</span>
              </h3>
              <div className="w-full bg-[#DBC2A6]/10 rounded-full h-2.5">
                <motion.div
                  className="bg-[#DBC2A6] h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ ...smoothSpring, duration: 2, delay: 0.7 }}
                />
              </div>
            </motion.div>

            {/* --- Node.js --- */}
            <motion.div variants={listItemVariants}>
              <h3 className="font-serif font-bold text-xl lg:text-2xl mb-2 flex items-center gap-3">
                <FaNodeJs /> <span>Node.js</span>
              </h3>
              <div className="w-full bg-[#DBC2A6]/10 rounded-full h-2.5">
                <motion.div
                  className="bg-[#DBC2A6] h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ ...smoothSpring, duration: 2, delay: 0.9 }}
                />
              </div>
            </motion.div>

            {/* --- Databases --- */}
            <motion.div variants={listItemVariants}>
              <h3 className="font-serif font-bold text-xl lg:text-2xl mb-2 flex items-center gap-3">
                <FaDatabase /> <span>Databases (SQL/NoSQL)</span>
              </h3>
              <div className="w-full bg-[#DBC2A6]/10 rounded-full h-2.5">
                <motion.div
                  className="bg-[#DBC2A6] h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ ...smoothSpring, duration: 2, delay: 1.1 }}
                />
              </div>
            </motion.div>

            {/* --- Django --- */}
            <motion.div variants={listItemVariants}>
              <h3 className="font-serif font-bold text-xl lg:text-2xl mb-2 flex items-center gap-3">
                <SiDjango /> <span>Django</span>
              </h3>
              <div className="w-full bg-[#DBC2A6]/10 rounded-full h-2.5">
                <motion.div
                  className="bg-[#DBC2A6] h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ ...smoothSpring, duration: 2, delay: 1.3 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Skills;
