import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";
import circleImage from "../assets/circle-image.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";

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
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedNavLink = ({ to, children }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLink
      to={to}
      className="relative px-2 py-2 transition-colors hover:text-white"
    >
      {children}
      {match && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#DBC2A6]"
          layoutId="underline"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      )}
    </NavLink>
  );
};

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
      title={title}
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
      // RESPONSIVE FIX: flex-col on mobile, flex-row on lg, variable heights
      className="w-full min-h-[80px] lg:min-h-0 lg:col-span-4 lg:row-span-1 bg-[#414A37] rounded-lg flex flex-col lg:flex-row justify-between items-center px-4 py-4 lg:px-8 lg:py-0 z-20 gap-4 lg:gap-0 shadow-md"
    >
      <motion.div variants={itemVariants}>
        <Link to="/" className="flex items-center gap-4">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={circleImage}
            alt="Mayank Mehra"
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover border-2 border-[#DBC2A6]"
          />
          <h1 className="text-[#DBC2A6] italic text-xl lg:text-2xl">
            Mayank Mehra
          </h1>
        </Link>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-8 w-full lg:w-auto">
        <motion.nav variants={itemVariants} className="w-full lg:w-auto">
          {/* RESPONSIVE FIX: Center align and wrap text for small screens */}
          <ul className="flex flex-wrap justify-center space-x-2 lg:space-x-6 font-['Lato'] uppercase tracking-widest text-[#DBC2A6]/80 text-[10px] lg:text-xs">
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
            className="font-['Lato'] text-[10px] lg:text-xs uppercase tracking-widest text-[#DBC2A6] border border-[#DBC2A6]/50 rounded-md px-4 py-2 hover:bg-[#DBC2A6] hover:text-[#414A37] transition-colors"
          >
            Resume
          </NavLink>
          <div className="flex gap-4">
            <TooltipIcon title="GitHub" href="https://github.com/mayank1980">
              <FaGithub size={20} className="lg:w-[22px] lg:h-[22px]" />
            </TooltipIcon>
            <TooltipIcon
              title="LinkedIn"
              href="https://www.linkedin.com/in/mayank-mehra-13a678230"
            >
              <FaLinkedin size={20} className="lg:w-[22px] lg:h-[22px]" />
            </TooltipIcon>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
