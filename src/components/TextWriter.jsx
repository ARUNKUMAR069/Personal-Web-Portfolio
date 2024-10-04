import React from "react";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"; // Additional Icons
import { motion } from "framer-motion"; // For animations, ensure to install framer-motion

const TextWriter = ({ yourname = "Arun Kumar" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* Portfolio Profile Section */}
      <motion.div
        className="text-center my-10 w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Hi, I'm {yourname}
        </h1>
        <h2 className="text-2xl text-gray-100">
          <ReactTyped
            strings={[
              "Web Developer 💻",
              "JavaScript Enthusiast 🚀",
              "React Developer ⚛️",
              "Tech Blogger ✍️",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h2>
      </motion.div>

      {/* Download CV Button */}
      <motion.div
        className="mt-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <a
          href="path-to-your-cv.pdf"
          download="YourName-CV"
          className="btn btn-primary bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
        >
          Download CV
        </a>
      </motion.div>

      {/* Social Links using react-icons */}
      <motion.div
        className="flex justify-center mt-8 space-x-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-blue-700 hover:text-blue-900 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href={"https://github.com/your-profile"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-gray-800 hover:text-black transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-blue-400 hover:text-blue-600 transition duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:your-email@example.com"
          className="text-4xl text-red-600 hover:text-red-800 transition duration-300"
        >
          <FaEnvelope />
        </a>
      </motion.div>
    </div>
  );
};

export default TextWriter;
