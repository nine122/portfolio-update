import { motion } from "framer-motion";

const skills = [
  { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "Python", "MySQL", "MongoDB"],
  },
  { name: "Tools", items: ["Figma"] },
];

function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-slate-200 py-20 px-4 text-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8 ">
          {skills.map((category) => (
            <div
              key={category.name}
              className="space-y-4 shadow-sm rounded-lg shadow-black p-4 md:shadow-none "
            >
              <h3 className="text-xl font-bold ml-4">{category.name}</h3>
              <div className="space-y-2">
                {category.items.map((skill) => (
                  <div
                    key={skill}
                    className="p-4 bg-slate-110 rounded-lg hover:bg-white transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;
