import { motion } from "framer-motion";
import { otherProjects } from "../../data/other-projects";
import { SectionHeader } from "../ui/section-header";
import { fadeInAnimationSettings } from "../../animations/config";
import { fadeIn } from "../../animations/variants";

export const OtherProjects = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 space-y-10 md:px-16">
      <SectionHeader>Other Projects</SectionHeader>
      <div className="flex flex-col items-center justify-between gap-x-10 md:flex-row gap-y-6 ">
        {otherProjects.map((project) => {
          return (
            <motion.div
              key={project.id}
              className="flex flex-col space-y-1 "
              variants={fadeIn({
                direction:
                  project.id === 1 ? "right" : project.id === 2 ? "up" : "left",
                duration: 1.5,
              })}
              {...fadeInAnimationSettings}
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
          );
        })}
      </div>
    </div>
  );
};
