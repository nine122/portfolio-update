// import PropTypes from "prop-types";
// import { motion, useScroll, useTransform } from "framer-motion";

// // Import images
// import movie from "../assets/Movie.png";
// import football from "../assets/Football.png";
// import recipe from "../assets/recipe.png";
// import ai from "../assets/AI.png";

// const ProjectCard = ({ project }) => {
//   const { scrollYProgress } = useScroll({
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
//   const scale = useTransform(
//     scrollYProgress,
//     [0, 0.2, 0.8, 1],
//     [0.8, 1, 1, 0.8]
//   );

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//       scale: 0.9,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//         when: "beforeChildren",
//         staggerChildren: 0.2,
//       },
//     },
//     hover: {
//       y: -5,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const contentVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const imageVariants = {
//     hover: {
//       scale: 1.01, // Reduced from 1.02 to 1.01 for even subtler image growth
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <motion.div
//       className="w-full px-4 mb-16"
//       style={{ opacity, y, scale }}
//       viewport={{ once: true, margin: "-100px" }}
//     >
//       <motion.div
//         className="relative group"
//         variants={cardVariants}
//         initial="hidden"
//         whileInView="visible"
//         whileHover="hover"
//       >
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur-lg"
//           animate={{
//             scale: [1, 1.01, 1],
//             rotate: [0, 0.5, 0],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//         />

//         <div
//           className="relative bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 shadow-lg
//                       border border-gray-100 dark:border-gray-700 backdrop-blur-sm
//                       transform transition-all duration-300"
//         >
//           <motion.div
//             className="relative overflow-hidden rounded-lg mb-6"
//             variants={imageVariants}
//           >
//             <motion.img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-64 object-cover"
//               variants={contentVariants}
//               loading="lazy"
//             />

//             <motion.div
//               className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent
//                         opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             />
//           </motion.div>

//           <motion.div variants={contentVariants}>
//             <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
//               {project.title}
//             </h3>

//             <p className="text-gray-600 dark:text-gray-300 mb-6">
//               {project.description}
//             </p>

//             {project.link && (
//               <motion.a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center px-6 py-3 rounded-lg
//                         bg-indigo-600
//                         text-white font-medium
//                         hover:bg-indigo-500
//                         focus:ring-4 focus:ring-indigo-500/20
//                         transform transition-all duration-300"
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//               >
//                 View Project
//                 <svg
//                   className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </motion.a>
//             )}
//           </motion.div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// ProjectCard.propTypes = {
//   project: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     link: PropTypes.string,
//   }).isRequired,
// };

// const Projects = () => {
//   const works = [
//     {
//       id: 1,
//       title: "Recipe Creator",
//       description:
//         "Users can create accounts, upload their own recipes, and explore others'.",
//       image: recipe,
//     },
//     {
//       id: 2,
//       title: "Cinema Admin Website",
//       description: "Admins can perform CRUD operations on cinema data.",
//       image: movie,
//       link: "https://movie-project-fronten.onrender.com/",
//     },
//     {
//       id: 3,
//       title: "Mini AI",
//       description: "A simple AI you can ask anything.",
//       image: ai,
//       link: "https://nine122.github.io/emailAI/",
//     },
//     {
//       id: 4,
//       title: "Football Analysis",
//       description: "A website to calculate football odds.",
//       image: football,
//       link: "https://nine122.xyz",
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
//       <div className="max-w-6xl mx-auto px-4">
//         <motion.h2
//           className="text-5xl font-bold text-center mb-16 bg-white bg-clip-text text-transparent"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Selected Work
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {works.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

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
      className="w-full px-4 relative md:static sticky top-0 h-screen flex items-center justify-center md:h-auto md:block"
      style={{
        zIndex: 10 + index, // Ensuring proper stacking order on scroll
        opacity,
        y: y, // Apply scroll effect on all cards
        scale: scale, // Apply scale transformation on all cards
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="relative group"
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
          className="relative bg-white rounded-xl p-6 shadow-md 
                      border border-gray-100 backdrop-blur-sm
                      transform transition-all duration-300"
        >
          <motion.div
            className="relative overflow-hidden rounded-lg mb-6"
            variants={imageVariants}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
              variants={contentVariants}
              loading="lazy"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>

          <motion.div variants={contentVariants}>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-6">{project.description}</p>
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg
                        bg-indigo-500 
                        text-white font-medium
                        hover:bg-indigo-600
                        focus:ring-4 focus:ring-indigo-300
                        transform transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Project
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
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
    },
    {
      id: 2,
      title: "Cinema Admin Website",
      description: "Admins can perform CRUD operations on cinema data.",
      image: movie,
      link: "https://movie-project-fronten.onrender.com/",
    },
    {
      id: 3,
      title: "Mini AI",
      description: "A simple AI you can ask anything.",
      image: ai,
      link: "https://nine122.github.io/emailAI/",
    },
    {
      id: 4,
      title: "Football Analysis",
      description: "A website to calculate football odds.",
      image: football,
      link: "https://nine122.xyz",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className={`text-4xl font-bold text-center mt-8 mb-16 text-gray-800 ${
            isSticky ? "sticky top-20" : ""
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Selected Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
