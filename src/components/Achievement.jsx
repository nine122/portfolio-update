import { motion } from "framer-motion";

const certificates = [
  {
    title: "1",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-123456",
    image: "/api/placeholder/120/120",
    skills: ["Cloud Architecture", "AWS Services", "Security"],
  },
  {
    title: "Meta Frontend Developer",
    issuer: "Meta",
    date: "2023",
    credentialId: "META-789012",
    image: "/api/placeholder/120/120",
    skills: ["React", "JavaScript", "Web Development"],
  },
];

const achievements = [
  {
    title: "Moke ser pyai pwal winner",
    organization: "TechFest 2023",
    date: "2023",
    description: "First place ",
    icon: "🏆",
  },
  {
    title: "Yoke chaw pyai pwal winner",
    organization: "Developer Community",
    date: "2022",
    description: "Recognized for significant look and handsome",
    icon: "🌟",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const Achievements = ({ onBack }) => {
  const handleBackClick = () => {
    if (onBack) {
      onBack(); // Notify parent to set `iscerti` to true
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md py-3 px-6 flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-700">
          Certificates & Achievements
        </h1>
        <button
          onClick={handleBackClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 font-medium"
        >
          Back to Main
        </button>
      </nav>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Certificates & Achievements
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my professional certifications and notable
            achievements in the tech industry.
          </p>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Professional Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <motion.img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="w-24 h-24 object-cover rounded-lg shadow-md"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 mb-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 mb-4">
                      Issued: {cert.date} • ID: {cert.credentialId}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Notable Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-lg text-2xl">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-500">{achievement.date}</p>
                    <p className="text-gray-600 mb-2">
                      {achievement.organization}
                    </p>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
