import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import img from "../assets/port pic.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 py-12 md:py-0"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <div className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight flex flex-col gap-2">
              <span>I am</span>
              <span className="text-indigo-600">
                <Typewriter
                  words={["Kaung Htet Naing.", "junior web developer."]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>
            <p className="text-xl md:text-xl text-gray-400 max-w-xl py-4 mx-auto md:mx-0">
              Enthusiastic junior MERN stack developer eager to innovate and
              deliver seamless web experiences through modern technologies.
            </p>
            <div className="flex justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 mb-6 bg-black text-white rounded-xl hover:bg-indigo-600 transition-all duration-300 text-base font-medium shadow-lg hover:shadow-xl"
                onClick={() => {
                  navigate("/work");
                }}
              >
                See My Work
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] md:ml-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl transform rotate-3 transition-all duration-300 hover:rotate-6 opacity-90"></div>
            <img
              src={img}
              alt="Kaung Htet Naing - Full Stack Developer"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;