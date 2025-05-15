import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Switch } from "../components/Switch";
import { Footer } from "../components/Footer";
import { Background } from "../components/Background";

export const Home = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle */}
    <Switch />
    {/* Background effects */}
    <Background />
    {/* Navbar */}
    <NavBar />

    {/* Main content */}
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    {/* Footer */}
    <Footer />
  </div>;
};