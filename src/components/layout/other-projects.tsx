import { otherProjects } from "../../data/other-projects";
import { SectionHeader } from "../ui/section-header";

export const OtherProjects = () => {
  return (
    <div className="flex flex-col items-center justify-center px-16 space-y-10">
      <SectionHeader>Other Projects</SectionHeader>
      <div className="flex items-center justify-between gap-x-10 ">
        {otherProjects.map((project) => {
          return (
            <div key={project.id} className="flex flex-col space-y-1 ">
              <p className="text-sm font-normal text-secondary-foreground">
                {project.year}
              </p>
              <p className="text-xl font-medium text-primary-foreground">
                {project.desc}
              </p>
              <p className="text-sm font-normal text-secondary-foreground">
                {project.type}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
