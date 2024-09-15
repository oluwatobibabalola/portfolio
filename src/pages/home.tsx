import { HeroSection } from "../components/layout/hero-section";
import { OtherProjects } from "../components/layout/other-projects";
import { Projects } from "../components/layout/projects";

export const Home = () => {
  return (
    <div className="max-w-5xl pb-12 space-y-12 border-b border-b-border-color">
      <HeroSection />
      <Projects />
      <OtherProjects />
    </div>
  );
};
