import React from "react";
import Card3 from "./Card3";

const Projects = () => {
  return (
    <div className=" gap-5  mt-5 p-5">
      <div className="basis-full rounded-xl border border-dashed p-5  bg-gradient-to-r from-slate-300 via-white to-pink-100   flex flex-wrap  gap-9 justify-center items-center  ">
        <Card3
          title="Gym Fitness Website"
          description="Website for Ftiness"
          image="/src/images/Gym.png"
          projectLink="https://arunkumar069.github.io/GymfitnessWebsite/"
        />
        <Card3
          title="Gym Fitness Website"
          description="Website for Ftiness"
          image="/src/images/Gym.png"
          projectLink="https://arunkumar069.github.io/GymfitnessWebsite/"
        />
        <Card3
          title="Gym Fitness Website"
          description="Website for Ftiness"
          image="/src/images/Gym.png"
          projectLink="https://arunkumar069.github.io/GymfitnessWebsite/"
        />
      </div>
    </div>
  );
};

export default Projects;
