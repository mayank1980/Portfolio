import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState } from "react"; // Import useState
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaArrowLeft,
} from "react-icons/fa";
import Header from "../components/Header";

// --- ANIMATION VARIANTS (Consistent) ---
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

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { ...smoothSpring, duration: 0.8 } },
};

// --- THE MAIN CONTACT PAGE COMPONENT ---
const Contact = () => {
  // State to hold the form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle the form submission
  const handleSendMessage = (e) => {
    e.preventDefault(); // Prevent the default browser action for the form

    const recipientEmail = "mayankmehra6497678@gmail.com";
    const subject = `Job Opportunity Inquiry from ${name}`;
    const body = `
Hello Mayank,

My name is ${name}.

I came across your portfolio and I'm impressed with your work. I would like to discuss a potential job opportunity with you.

[Please add the details of the job offer or inquiry here]

I look forward to hearing from you. You can reach me at: ${email}.

Best regards,
${name}
    `;

    // Create the mailto link and encode the subject and body for URL safety
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Header />

      <motion.div
        className="contents"
        variants={pageContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT COLUMN: Main Contact Info */}
        <motion.div
          variants={columnVariants}
          className="col-span-2 row-start-2 row-span-7 bg-[#414A37] rounded-lg p-10 flex flex-col gap-10 text-[#DBC2A6]"
        >
          <section>
            <h2 className="text-7xl italic mb-8">Get in Touch</h2>
            <p className="font-['Lato'] text-lg leading-relaxed mb-8">
              I'm currently available for freelance projects and open to
              discussing new opportunities. Whether you have a question or just
              want to say hi, feel free to reach out. I'll do my best to get
              back to you!
            </p>
            <motion.ul
              initial="hidden"
              animate="visible"
              className="space-y-6"
              variants={pageContainerVariants}
            >
              <motion.li
                variants={listItemVariants}
                className="flex items-center gap-4 font-['Lato'] text-lg"
              >
                <FaPhoneAlt />
                <span>9654238353</span>
              </motion.li>
              <motion.li
                variants={listItemVariants}
                className="flex items-center gap-4 font-['Lato'] text-lg"
              >
                <FaEnvelope />
                <a
                  href="mailto:mayankmehra6497678@gmail.com"
                  className="hover:underline"
                >
                  mayankmehra6497678@gmail.com
                </a>
              </motion.li>
              <motion.li
                variants={listItemVariants}
                className="flex items-center gap-4 font-['Lato'] text-lg"
              >
                <FaMapMarkerAlt />
                <span>Noida, IN</span>
              </motion.li>
            </motion.ul>
          </section>
        </motion.div>

        {/* MIDDLE COLUMN: Contact Form */}
        <motion.div
          variants={columnVariants}
          className="col-start-3 row-start-2 row-span-6 bg-[#99744A] rounded-lg p-10 text-white flex flex-col"
        >
          <section>
            <h2 className="text-6xl italic mb-8">Send a Message</h2>
            {/* The form now calls handleSendMessage on submission */}
            <form
              onSubmit={handleSendMessage}
              className="space-y-6 font-['Lato']"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm uppercase tracking-wider"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-white/10 p-3 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm uppercase tracking-wider"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/10 p-3 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#DBC2A6] text-[#414A37] font-bold py-3 rounded-md uppercase tracking-wider transition-colors hover:bg-white"
              >
                Send Message
              </motion.button>
            </form>
          </section>
        </motion.div>

        {/* NEW LINK SECTION: Below the form */}
        <motion.div
          variants={columnVariants}
          className="col-start-3 row-start-8 flex items-center justify-center"
        >
          <Link
            to="/projects"
            className="group font-['Lato'] text-lg text-[#414A37] flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-[#414A37]/10 transition-colors"
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span>See My Work</span>
          </Link>
        </motion.div>

        {/* RIGHT COLUMN: Social Links */}
        <motion.div
          variants={columnVariants}
          className="col-start-4 row-start-2 row-span-7 bg-[#414A37] rounded-lg p-10 text-[#DBC2A6] flex flex-col justify-center items-center"
        >
          <h2 className="text-6xl italic mb-10 text-center">Connect With Me</h2>
          <div className="flex flex-col gap-8 w-full">
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              href="https://github.com/mayank1980"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-2xl font-serif font-bold p-4 rounded-md border border-[#DBC2A6]/20 hover:bg-[#DBC2A6]/10 transition-colors"
            >
              <FaGithub /> GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              href="https://linkedin.com/in/mayankmehra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-2xl font-serif font-bold p-4 rounded-md border border-[#DBC2A6]/20 hover:bg-[#DBC2A6]/10 transition-colors"
            >
              <FaLinkedin /> LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;
