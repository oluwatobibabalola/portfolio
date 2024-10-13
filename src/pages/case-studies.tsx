import { Link } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import muttiPhoto from "../assets/mymutti.com.png";
import bloomApp from "../assets/pharm-care.png";
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
          <div className="grid gap-y-4">
            <div className="flex flex-col items-center justify-center mb-20 text-center gap-y-4 ">
              <Link
                to="https://mymutti.com/"
                target="_blank"
                className="text-sm font-normal text-secondary-foreground"
              >
                mymutti.com
              </Link>
              <Link to={"mutti"}>
                <p className="max-w-lg text-4xl font-semibold text-primary-foreground">
                  Improve cart conversion from 26.3% to 40%.
                </p>
              </Link>
              <div>
                <img
                  src={muttiPhoto}
                  alt="Mutti logo"
                  className="object-contain "
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mb-20 text-center gap-y-4 ">
              <Link
                to="/"
                target="_blank"
                className="text-sm font-normal text-secondary-foreground"
              >
                Internal tool
              </Link>
              <Link to={"case-studies/mutti"}>
                <p className="max-w-lg text-4xl font-semibold text-primary-foreground">
                  Customer activity report tool for pharmacists.
                </p>
              </Link>
              <div>
                <img
                  src={bloomApp}
                  alt="Bloom app logo"
                  className="object-contain "
                />
              </div>
            </div>
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
