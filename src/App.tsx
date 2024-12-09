import { FC } from "react";
import Layout from "./components/layout/Layout";
import StarsBackground from "./components/starsBackground/StarsBackground";
import AboutSection from "./sections/aboutSection/AboutSection";
import ContactSection from "./sections/contactSection/ContactSection";
import ExperienceSection from "./sections/experienceSection/ExperienceSection";
import HeroSection from "./sections/heroSection/HeroSection";
import ProjectsSection from "./sections/projectsSection/ProjectsSection";
import SkillsSection from "./sections/skillsSection/SkillsSection";

const App: FC = () => {
  return (
    <Layout>
      <StarsBackground />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
};

export default App;
