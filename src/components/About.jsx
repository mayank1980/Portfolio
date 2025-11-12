import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaArrowRight,
} from "react-icons/fa";
import Header from "../components/Header";

// --- ADVANCED ANIMATION & INTERACTION ---

// Ultra-smooth spring physics for page load animations
const smoothSpring = {
  type: "spring",
  stiffness: 100, // Lower stiffness for a softer feel
  damping: 30, // Higher damping to prevent oscillation
  mass: 1.5, // Higher mass for a weightier feel
};

const pageContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: smoothSpring },
};

const listContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { ...smoothSpring, duration: 0.8 } },
};

// --- Reusable Component with "Magnetic" Addon ---

// ADDON: A social link with a "magnetic" icon effect
const MagneticLink = ({ children, href }) => {
  const ref = useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 350, damping: 10, mass: 0.5 }}
      className="flex items-center gap-2"
    >
      {children}
    </motion.a>
  );
};

// --- The Main About Component ---

const About = () => {
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
          className="col-span-2 row-start-2 row-span-7 bg-[#414A37] rounded-lg p-10 flex flex-col gap-10 text-[#DBC2A6]"
        >
          {/* My Mission Section */}
          <section>
            <h2 className="text-6xl italic mb-8">My Mission</h2>
            {/* FONT SIZE INCREASED HERE */}
            <p className="font-['Lato'] text-lg leading-relaxed">
              As a developer, I am driven by the challenge of transforming
              complex problems into beautiful, intuitive, and functional digital
              experiences. With a year of focused experience in the React and
              Flutter ecosystems, I specialize in building high-performance,
              scalable applications.
            </p>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-6xl italic mb-8">Experience</h2>
            <div>
              <h3 className="font-serif font-bold text-2xl">
                Front End Developer, RegenSportz
              </h3>
              <div className="flex items-center gap-6 text-sm text-[#DBC2A6]/70 mt-3 mb-5 font-['Lato']">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt /> NOV 2024 - OCT 2025
                </span>
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt /> NOIDA, INDIA
                </span>
              </div>
              {/* FONT SIZE INCREASED HERE */}
              <motion.ul
                variants={listContainerVariants}
                initial="hidden"
                animate="visible"
                className="font-['Lato'] text-lg leading-relaxed space-y-3 list-disc pl-5"
              >
                <motion.li variants={listItemVariants}>
                  Engineered responsive components, accelerating development by
                  30%.
                </motion.li>
                <motion.li variants={listItemVariants}>
                  Managed application state efficiently using Redux, optimizing
                  data flow.
                </motion.li>
              </motion.ul>
            </div>
          </section>
        </motion.div>

        {/* MIDDLE COLUMN */}
        <motion.div
          variants={columnVariants}
          className="col-start-3 row-start-2 row-span-6 bg-[#99744A] rounded-lg p-10 text-white flex flex-col justify-between"
        >
          <section>
            <h2 className="text-6xl italic mb-8">Education</h2>
            <h3 className="font-serif font-bold text-2xl">
              B.Sc. in Computer Science
            </h3>
            <p className="text-base font-['Lato'] mt-2">
              IIMT COLLEGE OF SCIENCE AND TECHNOLOGY
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70 my-2 font-['Lato']">
              <FaCalendarAlt /> SEP 2022 - JUN 2025
            </div>
          </section>
          <section>
            <h2 className="text-6xl italic mb-8">Contact</h2>
            <div className="font-['Lato'] text-base space-y-2">
              <p>Phone: 9654238353</p>
              <p>Email: mayankmehra6497678@gmail.com</p>
            </div>
          </section>
        </motion.div>

        {/* MAGNETIC SOCIAL LINKS */}
        <motion.div
          variants={columnVariants}
          className="col-start-3 row-start-8 flex items-center justify-center gap-8 font-['Lato'] uppercase tracking-widest text-sm text-[#414A37]"
        >
          <MagneticLink href="https://github.com/mayank1980">
            <FaGithub /> GitHub
          </MagneticLink>
          <MagneticLink href="https://linkedin.com/in/mayankmehra">
            <FaLinkedin /> LinkedIn
          </MagneticLink>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          variants={columnVariants}
          className="col-start-4 row-start-2 row-span-7 bg-[#414A37] rounded-lg p-10 text-[#DBC2A6] flex flex-col justify-between"
        >
          <div>
            <h2 className="text-6xl italic mb-10">Technical Skills</h2>
            <motion.div
              variants={listContainerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Skill Items */}
              <motion.div
                variants={listItemVariants}
                className="flex items-start gap-4"
              >
                <FaCode className="text-lg text-[#DBC2A6]/70 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Front-End Development
                  </h3>
                  <p className="font-['Lato'] text-sm text-[#DBC2A6]/80">
                    React.js, Redux, JavaScript, TypeScript...
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={listItemVariants}
                className="flex items-start gap-4"
              >
                <FaMobileAlt className="text-lg text-[#DBC2A6]/70 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Cross-Platform & Mobile
                  </h3>
                  <p className="font-['Lato'] text-sm text-[#DBC2A6]/80">
                    React Native, Flutter, Dart
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={listItemVariants}
                className="flex items-start gap-4"
              >
                <FaServer className="text-lg text-[#DBC2A6]/70 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Backend & APIs</h3>
                  <p className="font-['Lato'] text-sm text-[#DBC2A6]/80">
                    Node.js, Django, RESTful APIs...
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={listItemVariants}
                className="flex items-start gap-4"
              >
                <FaDatabase className="text-lg text-[#DBC2A6]/70 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Databases</h3>
                  <p className="font-['Lato'] text-sm text-[#DBC2A6]/80">
                    MongoDB, MySQL, PostgreSQL
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              to="/skills"
              className="group font-['Lato'] text-base text-[#DBC2A6]/80 flex items-center justify-center gap-2 mt-8 py-3 rounded-lg hover:bg-[#DBC2A6]/10 transition-colors duration-300"
            >
              <span>View All Skill Sets</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
