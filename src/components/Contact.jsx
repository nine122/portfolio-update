import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get("message");

    window.location.href = `mailto:neskokaung122@gmail.com?subject=New Message&body=${encodeURIComponent(
      message
    )}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 400 },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <>
      <motion.section
        className="min-h-screen py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#E0E7FF,transparent)] opacity-30" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={containerVariants}
              className="backdrop-blur-sm bg-white/80 p-8 rounded-2xl border border-gray-100 shadow-xl shadow-indigo-100/20"
            >
              <motion.h2
                className="text-4xl font-bold mb-6 bg-black bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Contact Me
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg mb-8"
                variants={itemVariants}
              >
                I'm always interested in hearing about new projects and
                opportunities. Let's create something amazing together.
              </motion.p>
              <motion.div className="space-y-6" variants={itemVariants}>
                <motion.a
                  href="mailto:neskokaung122@gmail.com"
                  className="block text-lg text-gray-600 hover:text-indigo-800 transition-colors duration-300 italic underline"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  neskokaung122@gmail.com
                </motion.a>
                <div className="flex space-x-6">
                  <motion.a
                    href="https://github.com/nine122"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-50 to-white border border-gray-200 flex items-center justify-center hover:border-indigo-500 hover:text-indigo-600 transition-colors duration-300 shadow-lg shadow-gray-200/50"
                    variants={socialIconVariants}
                    whileHover="hover"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/kaung-htet-naing-4896bb212/"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-50 to-white border border-gray-200 flex items-center justify-center hover:border-indigo-500 hover:text-indigo-600 transition-colors duration-300 shadow-lg shadow-gray-200/50"
                    variants={socialIconVariants}
                    whileHover="hover"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 backdrop-blur-sm bg-white/80 p-8 rounded-2xl border border-gray-100 shadow-xl shadow-indigo-100/20"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <motion.input
                  type="text"
                  placeholder="Name"
                  className="w-full px-6 py-4 bg-white rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-200 transition-all duration-300"
                  name="name"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <motion.input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 bg-white rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-200 transition-all duration-300"
                  name="email"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <motion.textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-6 py-4 bg-white rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-200 transition-all duration-300"
                  name="message"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
              <motion.button
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-xl hover:from-indigo-500 hover:to-indigo-600 transition-all duration-300 font-medium text-lg shadow-lg shadow-indigo-500/25"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.section>

      <motion.footer
        className="py-8 px-4 bg-white text-gray-600 border-t border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">&copy; 2024 developed by Kaung Htet Naing.</p>
        </div>
      </motion.footer>
    </>
  );
};

export default Contact;
