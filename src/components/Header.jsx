import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scroll position to add background color to header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["home", "about me", "skills", "projects", "contact"];

  // Handle navigation to each section
  const handleNavClick = (item) => {
    setActiveSection(item);
    document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close the menu if on mobile
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold tracking-tight cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            Nine
          </motion.span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-9">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => handleNavClick(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative text-lg uppercase tracking-wider font-medium
                  ${
                    activeSection === item
                      ? "text-indigo-600"
                      : "text-gray-400 hover:text-gray-600"
                  } transition-colors duration-300`}
              >
                {item}
                {activeSection === item && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className={`h-6 w-6 transition-transform duration-300 ${
                isMenuOpen ? "transform rotate-90" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/80 backdrop-blur-md shadow-lg p-4 rounded-b-lg"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`text-lg ${
                    activeSection === item
                      ? "text-indigo-600"
                      : "text-gray-400 hover:text-gray-600"
                  } transition-colors duration-300`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Header;
