import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const About = ({ onCertiClick }) => {
  const skills = [
    {
      name: "Frontend",
      icon: "💻",
      items: [
        { name: "Javascript", icon: "⚡" },
        { name: "Typescript", icon: "🔷" },
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "🔲" },
        { name: "Tailwind", icon: "🎨" },
        { name: "Framermotion", icon: "🎥" },
      ],
    },
    {
      name: "Backend",
      icon: "🔧",
      items: [
        { name: "Python", icon: "🐍" },
        { name: "Node.js", icon: "📦" },
        { name: "Express.js", icon: "🚂" },
        { name: "MongoDB", icon: "🍃" },
      ],
    },
    {
      name: "Tools",
      icon: "🛠️",
      items: [
        { name: "Git", icon: "📝" },
        { name: "GitHub", icon: "🐱" },
        { name: "Digital Ocean", icon: "🌊" },
        { name: "ChatGPT :3", icon: "🤖" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const SkillCard = ({ category }) => {
    const cardVariants = {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          staggerChildren: 0.1,
        },
      },
      hover: {
        scale: 1.02,
        transition: {
          duration: 0.2,
        },
      },
    };

    const skillItemVariants = {
      hidden: {
        opacity: 0,
        x: -20,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.3,
        },
      },
      hover: {
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        transition: {
          duration: 0.2,
        },
      },
    };

    const iconVariants = {
      hover: {
        rotate: [0, -10, 10, -10, 10, 0],
        transition: {
          duration: 0.5,
        },
      },
    };

    if (!category) return null;

    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="bg-white/80 rounded-xl border border-gray-200 shadow-sm"
      >
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <motion.span
              variants={iconVariants}
              whileHover="hover"
              className="text-3xl"
            >
              {category.icon}
            </motion.span>
            <h3 className="text-2xl font-bold text-gray-800">
              {category.name}
            </h3>
          </div>

          <motion.div
            className="grid gap-4 grid-cols-1 md:grid-cols-2"
            variants={containerVariants}
          >
            {category.items.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillItemVariants}
                whileHover="hover"
                custom={index}
                className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 border border-gray-100"
              >
                <motion.span
                  className="text-xl"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.icon}
                </motion.span>
                <span className="text-gray-800 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    );
  };

  SkillCard.propTypes = {
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          icon: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };

  const buttonVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Continuous subtle float animation
  const floatAnimation = {
    animate: {
      y: [-4, 4, -4],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Trophy bounce animation
  const trophyAnimation = {
    animate: {
      rotate: [0, 10, -10, 10, 0],
      scale: [1, 1.1, 1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Arrow animation
  const arrowAnimation = {
    animate: {
      x: [0, 5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const handleButtonClick = () => {
    if (onCertiClick) {
      onCertiClick();
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mt-20 mb-10">
            My Tech Stacks
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((category) => (
            <SkillCard key={category.name} category={category} />
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          initial="initial"
          animate="animate"
          variants={floatAnimation}
        >
          <Link to="/achievements" className="inline-block">
            <motion.button
              onClick={handleButtonClick}
              className="group relative overflow-hidden rounded-xl bg-indigo-500 px-8 py-4 text-white shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Button content */}
              <div className="flex items-center gap-3 relative">
                <motion.span
                  className="text-2xl"
                  variants={trophyAnimation}
                  animate="animate"
                >
                  🏆
                </motion.span>
                <span className="text-lg font-semibold">
                  View My Certificates
                </span>
                <motion.span
                  className="ml-2"
                  variants={arrowAnimation}
                  animate="animate"
                >
                  →
                </motion.span>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-indigo-400/30 to-purple-400/0 blur-xl opacity-50" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

About.propTypes = {
  onCertiClick: PropTypes.func,
};

export default About;
