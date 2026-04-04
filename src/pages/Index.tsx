import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StackSection from "@/components/StackSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import { useLanguage } from "../App";

const Index = () => {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection lang={lang} />
      <div className="glow-line" />
      <AboutSection lang={lang} />
      <div className="glow-line" />
      <StackSection lang={lang} />
      <div className="glow-line" />
      <ProjectsSection lang={lang} />
      <div className="glow-line" />
      <ExperienceSection lang={lang} />
      <div className="glow-line" />
      <EducationSection lang={lang} />
      <div className="glow-line" />
      <ContactSection lang={lang} />
      <FooterSection lang={lang} />
    </div>
  );
};

export default Index;
