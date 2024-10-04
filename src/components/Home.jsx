import React from "react";
import TextWriter from "./TextWriter";
import PortfolioImage from "./PortfolioImage";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row flex-wrap bg-[#527385]">
      {/* Left Side */}
      <div className="left w-full lg:w-1/2 flex justify-center items-center p-4">
        <TextWriter className="w-full h-auto" />
      </div>
      {/* END */}
      {/* Right Side */}
      <div className="right w-full lg:w-1/2 flex justify-center items-center p-4">
        <PortfolioImage />
      </div>
      {/* END */}
    </div>
  );
};

export default Home;
