import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

// Import your certificate images
import web from "../assets/certificates/U-web.jpg";
import react from "../assets/certificates/U-react.jpg";
import fairway from "../assets/certificates/fairway.jpg";
import ds from "../assets/certificates/ds.jpg";
import seminar from "../assets/certificates/seminar.jpg";
import seminar2 from "../assets/certificates/seminar2.jpg";

const certificates = [
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2024",
    image: web,
    skills: ["Javascript", "Node", "React", "PostgreSQL"],
    type: "detailed",
  },
  {
    title: "React Complete Guide",
    issuer: "Udemy",
    date: "2024",
    image: react,
    skills: ["React", "Hooks", "Redux", "Next.js"],
    type: "detailed",
  },
  {
    title: "UI/UX Design",
    issuer: "Fairway Technology",
    date: "2022",
    image: fairway,
    type: "detailed",
  },
  {
    title: "SAP Analytics Cloud",
    issuer: "ASEAN Data Science",
    date: "2023",
    image: ds,
    type: "minor",
  },
  {
    title: "Tech Seminar",
    issuer: "Local Conference",
    date: "2023",
    image: seminar,
    type: "minor",
  },
  {
    title: "Professional Workshop",
    issuer: "Industry Event",
    date: "2022",
    image: seminar2,
    type: "minor",
  },
];

const Achievements = ({ onBack }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleBackClick = () => {
    onBack && onBack();
  };

  const handleCertificateClick = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">My Certifications</h1>
        <button
          onClick={handleBackClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Back to Profile
        </button>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Certificates & Learning Journey
        </motion.h2>

        {/* Detailed Certificates */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-gray-700">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates
              .filter((cert) => cert.type === "detailed")
              .map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => handleCertificateClick(cert)}
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg text-gray-800">
                      {cert.title}
                    </h4>
                    <p className="text-gray-600">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Minor Certificates */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h3 className="text-2xl font-semibold mb-8 text-gray-700">
            Additional Workshops & Seminars
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certificates
              .filter((cert) => cert.type === "minor")
              .map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                  onClick={() => handleCertificateClick(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3 text-center">
                    <p className="text-sm text-gray-700">{cert.title}</p>
                    <p className="text-xs text-gray-500">{cert.date}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2">
                <div>
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedCertificate.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {selectedCertificate.issuer}
                  </p>
                  <p className="text-gray-500 mb-6">
                    Issued: {selectedCertificate.date}
                  </p>
                  {selectedCertificate.skills && (
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Achievements.propTypes = {
  onBack: PropTypes.func,
};

Achievements.defaultProps = {
  onBack: () => {},
};

export default Achievements;
