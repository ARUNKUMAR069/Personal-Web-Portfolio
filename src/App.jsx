
import Home from "./components/Home";
import { Skills } from "./components/SkillsSection";
import { Navbar1 } from "./components/Navbar1";
import Projects from "./components/Projects";
import Heading from "./components/Heading";
import ServicesLayout from "./components/ServicesLayout";
import { ContactForm } from "./components/ContactForm";
import { AboutLayout } from "./components/AboutLayout";

function App() {
  return (
    <div className="bg-[#527385]">
      <Navbar1 />
      <Home />
      <Heading title="My Skills" />
      <Skills />
      <Heading title="My Projects" />
      <Projects />
      <Heading title="Services I provide" />
      <ServicesLayout />
      <Heading title="About" />
      <AboutLayout />
      <Heading title="Contact Me" />
      <ContactForm />
    </div>
  );
}

export default App;
