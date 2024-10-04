import { FaGithub, FaLinkedin, FaUserCircle } from "react-icons/fa";
import { RxVercelLogo } from "react-icons/rx";
import "react";
import { Card1 } from "./Card1";
import { Card2 } from "./Card2";
import Html from "../images/Html.png"
import CSS from "../images/CSS.png"
import JS from "../images/JavaScript.png"
import Node from "../images/Nodejs.png"
import React from "../images/React.png"
import Python from "../images/Python.png"
import SQL from "../images/SQL.png"
import Cpp from "../images/C++.png"
export const Skills = () => {
  return (
    <div className="flex flex-col gap-5  mt-5 p-5">
      {/* TOP  Start*/}
      <div className="basis-full rounded-xl border border-dashed p-10  bg-gradient-to-r from-slate-300 via-white to-pink-100   flex flex-wrap  gap-9 justify-center items-center ">
        <Card2
          title="HTML"
          description="Projects Done using HTML and foundational web technologies."
          import ={Html}
        />
        <Card2
          title="CSS"
          description="Projects showcasing advanced layouts and responsive designs using CSS."
          image={CSS}
        />
        <Card2
          title="JavaScript"
          description="Interactive and dynamic web projects built using vanilla JavaScript."
          image={JS}
        />
        <Card2
          title="Node.js"
          description="Server-side applications built using Node.js and JavaScript."
          image={Node}
        />
        <Card2
          title="React.js"
          description="Front-end applications created with React, focusing on UI components and state management."
          image={React}
        />
        <Card2
          title="Python"
          description="Scripts and web applications built with Python, including automation and data processing."
          image={Python}
        />
        <Card2
          title="SQL"
          description="Database management and query operations using SQL for efficient data storage."
          image={SQL}
        />
        <Card2
          title="C++"
          description="High-performance applications and system-level programming done with C++."
          image={Cpp}
        />
      </div>
      {/* Bottom end */}

      {/* Bottom Start */}
      <div className="flex flex-wrap gap-5 lg:flex-nowrap">
        <div className="basis-full rounded-xl border border-dashed p-5 lg:basis-1/4 bg-gradient-to-r from-slate-300 via-white to-pink-100  text-white">
          <div className="flex flex-col items-center text-center">
            <FaGithub className="text-4xl mb-4" />
            <Card1
              title="GitHub Profile"
              description="An overview of managing repositories and collaborating on code using GitHub."
            />
          </div>
        </div>

        <div className="basis-full rounded-xl border border-dashed p-5 lg:basis-1/4 bg-gradient-to-r from-slate-300 via-white to-pink-100  text-white">
          <div className="flex flex-col items-center text-center">
            <FaLinkedin className="text-4xl mb-4" />
            <Card1
              title="LinkedIn Profile"
              description="Tips for building a professional LinkedIn profile to showcase your skills and connect with peers."
            />
          </div>
        </div>

        <div className="basis-full rounded-xl border border-dashed p-5 lg:basis-1/4 bg-gradient-to-r from-slate-300 via-white to-pink-100  text-white">
          <div className="flex flex-col items-center text-center">
            <RxVercelLogo className="text-4xl mb-4" />
            <Card1
              title="Vercel Deployment"
              description="A guide on deploying your projects seamlessly on Vercel for hosting and scaling web applications."
            />
          </div>
        </div>

        <div className="basis-full rounded-xl border border-dashed p-5 lg:basis-1/4 bg-gradient-to-r from-slate-300 via-white to-pink-100  text-white">
          <div className="flex flex-col items-center text-center">
            <FaUserCircle className="text-4xl mb-4" />
            <Card1
              title="Personal Web Portfolio"
              description="Learn how to create a personal portfolio to showcase your projects and skills online."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

//   Color pallete used
//  bg-gradient-to-r from-metal-500 to-black
// Margin from top used
