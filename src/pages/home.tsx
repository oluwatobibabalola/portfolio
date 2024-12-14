import { Link } from "react-router-dom";
import { HeroSection } from "../components/layout/hero-section";
import { OtherProjects } from "../components/layout/other-projects";
import { PageBody } from "../components/layout/page-body";
import { mainProjects } from "../data/main-projects";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";

export const Home = () => {
  return (
    <PageBody>
      <HeroSection />
      <motion.h6
        variants={fadeIn({ direction: "up" })}
        initial="hidden"
        whileInView="show"
        className="pt-20 text-2xl  md:pt-[197px] font-medium md:text-[32px] leading-[38px] text-primary-foreground"
      >
        Selected projects
      </motion.h6>

      <div className="grid gap-y-4">
        {mainProjects.map((project) => {
          return (
            <Link to={project.link} key={project.id}>
              <motion.div
                className="flex flex-col items-center justify-center mb-20 text-center gap-y-4 "
                variants={fadeIn({ direction: "up" })}
                initial="hidden"
                whileInView="show"
              >
                <p className="text-sm font-normal text-secondary-foreground">
                  {project.name}
                </p>
                <p className="px-4 text-2xl  font-semibold md:px-0 md:max-w-2xl md:text-[40px] md:leading-[56px] text-primary-foreground">
                  {project.heading}
                </p>
                <div>
                  <img
                    src={project.asset.src}
                    alt={project.asset.alt}
                    className="object-contain "
                  />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
      <OtherProjects />
    </PageBody>
  );
};
