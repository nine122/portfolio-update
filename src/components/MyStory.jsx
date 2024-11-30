import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

// Updated TextReveal Component
const TextReveal = ({ text, className, staggerDelay = 0.05 }) => {
  if (!text || typeof text !== "string") return null;

  const words = text.trim().split(" ").filter(Boolean);
  if (words.length === 0) return null;

  return (
    <motion.div initial="hidden" animate="visible" className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: index * staggerDelay,
            type: "tween",
            duration: 0.5,
          }}
          style={{
            display: "inline-block",
            marginRight: "0.25em",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

TextReveal.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  staggerDelay: PropTypes.number,
};

TextReveal.defaultProps = {
  className: "",
  staggerDelay: 0.05,
};

// Education data
const education = [
  {
    period: "2023 - Present",
    degree: "Bachelor of Information and Communication Technology",
    school: "Rangsit University",
    description:
      "Studying a broad range of IT subjects, including programming, networking, and system management, with an interest in web technologies and artificial intelligence.",
    achievements: ["Awarded 50% scholarship for academic excellence"],
  },
  {
    period: "2022",
    degree: "Programming Basic and UI/UX courses",
    school: "Fairway Technology Myanmar",
    description: "Beginning of my programming and web development journey",
    achievements: [],
  },
  {
    period: "2016 - 2020",
    degree: "MBBS",
    school: "University of Medicine 1, Yangon",
    description:
      "Studied medicine for 3.5 years before deciding to step away from the program.",
    achievements: [
      "Completed preclinical courses, basic science courses",
      "Participated at some voluntary works in medical community",
    ],
  },
];

// Animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const MyStory = () => {
  const [activeSection, setActiveSection] = React.useState("about");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={fadeInUpVariants}>
          <div className="inline-flex items-center justify-center space-x-2 mt-10 mb-4">
            <span className="text-2xl">✨</span>
            <span className="text-sm font-medium text-indigo-600">
              Welcome to my journey
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-900 bg-clip-text text-transparent mb-6">
            My Story
          </h1>
          <TextReveal
            text="A passionate developer with a love for creating beautiful and functional web experiences. Here's a glimpse into my journey."
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
          />
        </motion.div>

        <div className="flex justify-center mb-12 space-x-4">
          {["about", "education"].map((section) => (
            <motion.button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeSection === section
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {activeSection === "about" && (
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 backdrop-blur-lg bg-opacity-90"
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  About Me
                </h2>
              </div>
              <div className="prose prose-base md:prose-lg text-gray-600 max-w-none space-y-4">
                <TextReveal
                  text="Hello! I'm a full-stack developer passionate about building efficient and user-friendly web solutions. My journey into tech has been shaped by curiosity and a drive to solve complex problems creatively."
                  className="mb-4 text-sm md:text-base"
                />
                <TextReveal
                  text="When I'm not coding, you'll find me exploring new technologies, listening to podcasts or sharing through technical blog posts. I believe in continuous learning and pushing the boundaries of what's possible with code."
                  className="mb-4 text-sm md:text-base"
                />
                <TextReveal
                  text="My goal is to create impactful digital solutions that make a difference in people's lives while maintaining high standards of code quality and user experience."
                  className="mb-4 text-sm md:text-base"
                />
              </div>
            </motion.div>
          )}

          {activeSection === "education" && (
            <motion.div variants={fadeInUpVariants}>
              <div className="flex justify-center md:justify-start items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Education Journey
                </h2>
              </div>
              <div className="space-y-6 pl-6 md:pl-0">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.6, ease: "easeOut" },
                      },
                    }}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 ml-4 md:ml-6 border-l-4 border-gray-200 hover:border-indigo-500 transition-colors duration-300">
                      <div className="absolute w-3 md:w-4 h-3 md:h-4 bg-indigo-500 rounded-full left-[-6px] md:left-[-8px] top-8 transform -translate-x-1/2" />
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-gray-800">
                            {edu.school}
                          </h3>
                          <p className="text-indigo-600 font-medium text-sm md:text-base">
                            {edu.degree}
                          </p>
                        </div>
                        <span className="text-gray-500 text-sm md:text-base mt-2 md:mt-0">
                          {edu.period}
                        </span>
                      </div>
                      <TextReveal
                        text={edu.description}
                        className="text-sm md:text-base text-gray-600 mb-4"
                      />
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="px-2 md:px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs md:text-sm font-medium"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MyStory;
