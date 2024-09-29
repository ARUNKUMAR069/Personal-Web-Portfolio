import React from "react";

const PortfolioImage = ({ image = "/src/images/portfolio.webp" }) => {
  return (
    <div className="rounded-full flex justify-center">
      <img className="rounded-full w-[80%] h-[70%] " src={image} alt="" />
    </div>
  );
};

export default PortfolioImage;
