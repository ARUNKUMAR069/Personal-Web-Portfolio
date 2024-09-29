import {
  FaCode,
  FaMobileAlt,
  FaSearch,
  FaProjectDiagram,
} from "react-icons/fa";
import Card4 from "./Card4"; // Import the Card4 component

export const AboutLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-5   p-5  justify-center items-center " >
      {/* Card 1 - About Arun Kumar */}
      <div className="flex-1">
        <Card4
          title="About Me"
          description="I'm Arun Kumar, currently pursuing B.Tech CSE at CT Group of Institutions. Passionate about coding and content creation, I aim to make technology accessible and user-friendly for all."
          icon={<FaCode />}
          
        />
      </div>

      {/* Card 2 - Frontend Developer */}
      <div className="flex-1">
        <Card4
          title="Frontend Developer"
          description="I specialize in creating seamless digital experiences, combining coding expertise with design creativity to build user-centric solutions."
          icon={<FaMobileAlt />}
        />
      </div>

      {/* Card 3 - Contact Info */}
      <div className="flex-1">
        <Card4
          title="Contact Info"
          description="Phone: 9877275894 |
           Email: madhavarora132005@gmail.com |
            City: Hoshiarpur"
          icon={<FaSearch />}
        />
      </div>

      {/* Card 4 - Freelance Availability */}
      <div className="flex-1">
        <Card4
          title="Freelance Availability"
          description="Available for freelance projects. Let’s create something amazing together and make tech magic happen!"
          icon={<FaProjectDiagram />}
        />
      </div>
    </div>
  );
};
