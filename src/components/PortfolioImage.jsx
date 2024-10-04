import React from "react";
import image from '../images/portfolio.webp';
const PortfolioImage = () => {
  return (
    <div className="rounded-full flex justify-center items-center max-w-full">
      <img
        className="rounded-full w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover"
        src={image}
        alt="Portfolio"
      />
    </div>
  );
};

export default PortfolioImage;
