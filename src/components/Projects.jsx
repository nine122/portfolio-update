import { motion } from "framer-motion";
import { useState } from "react";
import movie from "../assets/Movie.png";
import football from "../assets/Football.png";
import recipe from "../assets/recipe.png";
import ai from "../assets/AI.png";

function Projects() {
  const works = [
    {
      id: 1,
      title: "Recipe Creater",
      category: "Not deployed yet!",
      description:
        "Users can create accounts and create their own recipe and view the others.'",
      tech: ["React", "MongoDb", "Express.js", "Node.js"],
      image: recipe,
    },
    {
      id: 2,
      title: "Cinema Admin Website",
      category: "Web Development",
      description: "Admin can do CRUD processes for the cinema website.",
      tech: ["React", "MongoDb", "Express.js", "Node.js"],
      image: movie,
      link: "https://movie-project-fronten.onrender.com/",
    },
    {
      id: 3,
      title: "Mini Ai",
      category: "Web Development",
      description: "You can ask anything you want to my AI.",
      tech: ["Javascript", "Gemini API"],
      image: ai,
      link: "https://nine122.github.io/emailAI/",
    },
    {
      id: 4,
      title: "Football Analysis",
      category: "Web Development",
      description: "Football odds calculation website.",
      tech: ["React", "MongoDb", "Express.js", "Node.js"],
      image: football,
      link: "https://nine122.xyz",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Selected Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <motion.div
              key={work.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => {
                if (work.link) {
                  window.open(work.link, "_blank"); // Opens in a new tab
                }
              }}
            >
              <div className="relative h-64">
                <img
                  src={work.image}
                  alt={work.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-indigo-600 font-medium">
                  {work.category}
                </span>
                <h3 className="text-xl font-bold mt-2">{work.title}</h3>
                <p className="text-gray-600 mt-2">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
