import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/Xbackdemo.png"; // Updated logo path

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const toggleButtonVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  };

  const handleLinkClick = (e, section) => {
    e.preventDefault();
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setIsOpen(false), 300);
    }
  };

  const menuItems = ["Home", "About", "Internships", "Services", "Projects", "Contact"];

  return (
    <nav className="fixed w-full top-0 z-20">
      <div
        className="bg-dark-blue/20 backdrop-blur-lg border-b-2"
        style={{
          borderImage: "linear-gradient(to right, #00D4FF, #A855F7) 1",
        }}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <motion.img
            src={logo}
            alt="FutureForgeX"
            style={{
              height: "50px",
              width: "100px",
              borderRadius: "25px",
            }}
            className="hover:shadow-cyan-accent/50 transition-shadow duration-300"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <motion.li
                key={item}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-accent hover:to-purple-accent transition-all duration-300"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-accent to-purple-accent transition-all duration-300 hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            variants={toggleButtonVariants}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.ul
            className="md:hidden flex flex-col space-y-4 text-center bg-dark-blue/20 backdrop-blur-lg"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
          >
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-accent hover:to-purple-accent transition-all duration-300"
                  onClick={(e) => handleLinkClick(e, item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
