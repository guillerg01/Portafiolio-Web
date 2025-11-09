import { Header } from "@/components/Header";
import { HeroSection } from "@/app/sections/hero/Hero";
import { AboutSection } from "@/app/sections/about/AboutSection";
import { ExperienceSection } from "@/app/sections/experience/ExperienceSection";
import { SkillsSection } from "@/app/sections/skills/SkillsSection";
import { ProjectsSection } from "@/app/sections/projects/ProjectsSection";
import { ContactSection } from "@/app/sections/contact/ContactSection";

export default function Home() {
  return (
    <div className="relative h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden bg-[rgb(14,14,16)] text-white scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-[#F7AB0A]/70">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
