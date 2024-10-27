import { Link } from "react-router-dom";
import { HeroSection } from "../components/layout/hero-section";
import { OtherProjects } from "../components/layout/other-projects";
import { PageBody } from "../components/layout/page-body";
import { mainProjects } from "../data/main-projects";

export const Home = () => {
  return (
    <PageBody>
      <HeroSection />

      <div className="grid gap-y-4">
        {mainProjects.map((project) => {
          return (
            <div
              key={project.id}
              className="flex flex-col items-center justify-center mb-20 text-center gap-y-4 "
            >
              <p className="text-sm font-normal text-secondary-foreground">
                {project.name}
              </p>
              <Link to={project.link}>
                <p className="px-4 text-2xl font-semibold md:px-0 md:max-w-lg md:text-4xl text-primary-foreground">
                  {project.heading}
                </p>
              </Link>
              <div>
                <img
                  src={project.asset.src}
                  alt={project.asset.alt}
                  className="object-contain "
                />
              </div>
            </div>
          );
        })}
      </div>
      <OtherProjects />
    </PageBody>
  );
};
