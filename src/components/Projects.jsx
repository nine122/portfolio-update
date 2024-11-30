import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Import images
import movie from "../assets/Movie.png";
import football from "../assets/Football.png";
import recipe from "../assets/recipe.png";
import ai from "../assets/AI.png";

const ProjectCard = ({ project, index }) => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="w-full px-2 sm:px-4 relative md:static sticky top-0 h-screen flex items-center justify-center md:h-auto md:block mb-8 sm:mb-16"
      style={{
        zIndex: 10 + index,
        opacity,
        y,
        scale,
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="relative group w-full"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl blur-lg"
          animate={{
            scale: [1, 1.01, 1],
            rotate: [0, 0.5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <div
          className="relative bg-white rounded-xl p-4 sm:p-6 shadow-md 
                      border border-gray-100 backdrop-blur-sm
                      transform transition-all duration-300"
        >
          <motion.div
            className="relative overflow-hidden rounded-lg mb-4 sm:mb-6"
            variants={imageVariants}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-64 object-cover rounded-lg"
              variants={contentVariants}
              loading="lazy"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>

          <motion.div variants={contentVariants}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              {project.description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg
                          bg-indigo-500 
                          text-white font-medium text-sm sm:text-base
                          hover:bg-indigo-600
                          focus:ring-4 focus:ring-indigo-300
                          transform transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Live Demo
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.a>
              )}
              {project.githubLink && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg
                          bg-white 
                          text-gray-800
                          border border-gray-300
                          font-medium text-sm sm:text-base
                          hover:bg-gray-100
                          focus:ring-4 focus:ring-gray-200
                          transform transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Code
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.704-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
    githubLink: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Projects = () => {
  const [isSticky, setIsSticky] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSticky(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const works = [
    {
      id: 1,
      title: "Recipe Creator",
      description:
        "Users can create accounts, upload their own recipes, and explore others'.",
      image: recipe,
      githubLink: "https://github.com/your-username/recipe-creator",
    },
    {
      id: 2,
      title: "Cinema Admin Website",
      description: "Admins can perform CRUD operations on cinema data.",
      image: movie,
      link: "https://movie-project-fronten.onrender.com/",
      githubLink: "https://github.com/nine122/movie-project",
    },
    {
      id: 3,
      title: "Mini AI",
      description: "A simple AI you can ask anything.",
      image: ai,
      link: "https://nine122.github.io/emailAI/",
      githubLink: "https://github.com/nine122/emailAI",
    },
    {
      id: 4,
      title: "Football Analysis",
      description: "website to analyze football stats",
      image: football,
      link: "https://nine122.xyz",
      githubLink: "https://github.com/nine122/nine-analysis",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 sm:py-20">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <motion.h2
          className={`text-3xl sm:text-4xl font-bold text-center mt-6 sm:mt-8 mb-10 sm:mb-16 text-gray-800 ${
            isSticky ? "sticky top-20" : ""
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Selected Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {works.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
