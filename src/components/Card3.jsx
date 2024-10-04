// Card3.js
import React from "react";
import { FaLink } from "react-icons/fa";
import "../index.css";

const Card3 = ({ title, description, image, projectLink }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 transform transition-transform hover:scale-105 bg-white">
      <img className="w-full h-48 object-cover p-3" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-metal-900">{title}</div>
        <p className="text-gray-600 text-base mb-4">{description}</p>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:text-blue-700 font-bold"
        >
          <FaLink className="mr-2" />
        </a>
      </div>
    </div>
  );
};

export default Card3;
