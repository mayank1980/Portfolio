import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";
import circleImage from "../assets/circle-image.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";

// --- ANIMATION VARIANTS (ENHANCED FOR STAGGERING) ---

const headerVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 90,
      duration: 0.5,
      staggerChildren: 0.1, // Staggers the animation of child elements
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

// --- ADDON 1: Custom NavLink with Animated Underline ---
const AnimatedNavLink = ({ to, children }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    // UPDATED: Increased vertical padding to create space
    <NavLink
      to={to}
      className="relative px-2 py-2 transition-colors hover:text-white"
    >
      {children}
      {match && (
        <motion.div
          // UPDATED: Positioned the line at the very bottom of the new padding area
          className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#DBC2A6]"
          layoutId="underline" // This creates the magic-motion effect
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      )}
    </NavLink>
  );
};

// --- ADDON 2: Custom Icon with Animated Tooltip ---
const TooltipIcon = ({ children, title, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -2, scale: 1.1 }}
      className="relative text-[#DBC2A6] hover:text-white transition-colors"
      title={title} // Fallback for accessibility
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-black/50 text-white text-xs rounded-md px-2 py-1"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
};

// --- THE MAIN HEADER COMPONENT ---
const Header = () => {
  const activeButtonStyle = {
    backgroundColor: "#DBC2A6",
    color: "#414A37",
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="col-span-4 row-span-1 bg-[#414A37] rounded-lg flex justify-between items-center px-8 z-20"
    >
      <motion.div variants={itemVariants}>
        <Link to="/" className="flex items-center gap-4">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={circleImage}
            alt="Mayank Mehra"
            className="w-12 h-12 rounded-full object-cover border-2 border-[#DBC2A6]"
          />
          <h1 className="text-[#DBC2A6] italic text-2xl">Mayank Mehra</h1>
        </Link>
      </motion.div>

      <div className="flex items-center gap-8">
        <motion.nav variants={itemVariants}>
          <ul className="flex space-x-6 font-['Lato'] uppercase tracking-widest text-[#DBC2A6]/80 text-xs">
            <li>
              <AnimatedNavLink to="/about">About</AnimatedNavLink>
            </li>
            <li>
              <AnimatedNavLink to="/skills">Skills</AnimatedNavLink>
            </li>
            <li>
              <AnimatedNavLink to="/projects">Projects</AnimatedNavLink>
            </li>
            <li>
              <AnimatedNavLink to="/contact">Contact</AnimatedNavLink>
            </li>
          </ul>
        </motion.nav>
        <motion.div variants={itemVariants} className="flex items-center gap-6">
          <NavLink
            to="/resume"
            style={({ isActive }) => (isActive ? activeButtonStyle : undefined)}
            className="font-['Lato'] text-xs uppercase tracking-widest text-[#DBC2A6] border border-[#DBC2A6]/50 rounded-md px-4 py-2 hover:bg-[#DBC2A6] hover:text-[#414A37] transition-colors"
          >
            Resume
          </NavLink>
          <TooltipIcon title="GitHub" href="https://github.com/mayank1980">
            <FaGithub size={22} />
          </TooltipIcon>
          <TooltipIcon
            title="LinkedIn"
            href="https://www.linkedin.com/in/mayank-mehra-13a678230"
          >
            <FaLinkedin size={22} />
          </TooltipIcon>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
