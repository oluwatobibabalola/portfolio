import { Link } from "react-router-dom";
import { mainProjects } from "../../data/main-projects";
import { SectionHeader } from "../ui/section-header";
export const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center ">
      <SectionHeader> Selected Projects</SectionHeader>

      <div className="space-y-4 ">
        {mainProjects.map((project) => {
          return (
            <div
              key={project.id}
              className="flex flex-col items-center justify-center space-y-4 text-center "
            >
              <Link
                to={project.link}
                target="_blank"
                className="text-sm font-normal text-secondary-foreground"
              >
                {project.name}
              </Link>
              <Link to={`/${project.id}`}>
                <p className="max-w-lg text-4xl font-semibold text-primary-foreground">
                  {project.title}
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
    </section>
  );
};
