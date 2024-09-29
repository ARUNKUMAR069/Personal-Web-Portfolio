// Card4.js
import { motion } from "framer-motion";
import {
  FaCode,
  FaChartLine,
  FaMobileAlt,
  FaSearch,
  FaProjectDiagram,
  FaShoppingCart,
} from "react-icons/fa";

const Card4 = ({ title, description, icon }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ rotateY: 10 }} // Slightly rotate on hover
    >
      <div className="p-6 bg-gradient-to-r from-pink-200 via-white to-pink-200  rounded-t-lg flex items-center">
        <motion.div
          className=" text-3xl mr-4" // Reduced icon size
          whileHover={{ scale: 1.2 }} // Animate icon on hover
        >
          {icon}
        </motion.div>
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <div className="p-4">
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card4;
