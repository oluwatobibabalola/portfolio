import { Link } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { mainProjects } from "../data/main-projects";
import { otherProjects } from "../data/other-projects";

export const CaseStudies = () => {
  return (
    <div className="flex flex-col items-center max-w-5xl pb-40 space-y-12 border-b border-b-border-color">
      <h1 className="pt-10 text-6xl font-semibold text-primary-foreground">
        Case studies
      </h1>
      <Tabs defaultValue="main-projects">
        <TabsList className="flex items-center justify-center space-x-2.5  mb-28 ">
          <TabsTrigger value="main-projects">Case studies</TabsTrigger>
          <TabsTrigger value="other-projects">Other projects</TabsTrigger>
        </TabsList>
        <TabsContent value="main-projects">
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
        </TabsContent>
        <TabsContent value="other-projects">
          <div className="flex flex-col ">
            {otherProjects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="flex items-center justify-between w-full border-b border-b-border-color last:border-none "
                >
                  <div className="flex flex-col py-8 space-y-1 ">
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
                  <div className="flex items-center justify-end w-5/6 ">
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
        </TabsContent>
      </Tabs>
    </div>
  );
};
