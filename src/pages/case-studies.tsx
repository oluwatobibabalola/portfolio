import { Link } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { otherProjects } from "../data/other-projects";
import { PageBody } from "../components/layout/page-body";
import { mainProjects } from "../data/main-projects";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";
export const CaseStudies = () => {
  return (
    <PageBody className=" md:pb-40">
      <h1 className="pt-10 text-2xl font-semibold md:text-6xl text-primary-foreground">
        Case studies
      </h1>

      <Tabs defaultValue="main-projects">
        <TabsList className="flex items-center justify-center space-x-2.5 mb-20  md:mb-28 ">
          <TabsTrigger value="main-projects">Case studies</TabsTrigger>
          <TabsTrigger value="other-projects">Other projects</TabsTrigger>
        </TabsList>
        <TabsContent value="main-projects">
          <div className="grid gap-y-4">
            <div className="grid gap-y-4">
              {mainProjects.map((project) => {
                return (
                  <motion.div
                    key={project.id}
                    className="flex flex-col items-center justify-center mb-20 text-center gap-y-4 "
                    variants={fadeIn({ direction: "up" })}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <p className="text-sm font-normal text-secondary-foreground">
                      {project.name}
                    </p>
                    <Link to={project.link}>
                      <p className="px-4 text-2xl font-semibold md:px-0 md:max-w-2xl md:text-4xl text-primary-foreground">
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
                  </motion.div>
                );
              })}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="other-projects">
          <div className="flex flex-col ">
            {otherProjects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="flex flex-col items-center justify-between w-full border-b md:flex-row border-b-border-color last:border-none "
                >
                  <motion.div
                    className="flex flex-col py-8 space-y-1 "
                    variants={fadeIn({ direction: "right" })}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                  >
                    <p className="text-sm font-normal text-secondary-foreground">
                      {project.year}
                    </p>
                    <p className="text-base font-medium md:text-xl text-primary-foreground">
                      {project.desc}
                    </p>
                    <p className="text-sm font-normal text-secondary-foreground">
                      {project.type}
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex items-center w-full pb-6 md:pb-0 md:w-5/6 md:justify-end "
                    variants={fadeIn({ direction: "left" })}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                  >
                    <img
                      src={project.asset.src}
                      alt={project.asset.alt}
                      className="object-contain "
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </PageBody>
  );
};
