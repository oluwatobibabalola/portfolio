import { Link } from "react-router-dom";
import { ArrowUp } from "../icons";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "../ui/typewritter-effect";
import { fadeInAnimationSettings } from "../../animations/config";
import { fadeIn } from "../../animations/variants";

const words = [
  {
    text: "Hi,",
  },
  {
    text: "I'm",
  },
  {
    text: "Oluwatobi",
  },
  {
    text: "Babalola",
  },
];
export const HeroSection = () => {
  return (
    <section className="flex-col items-center justify-center pt-10 space-y-6 text-center">
      <TypewriterEffectSmooth words={words} />
      <motion.h2
        className="text-2xl font-semibold md:text-6xl text-primary-foreground"
        variants={fadeIn({ direction: "right" })}
        {...fadeInAnimationSettings}
      >
        A digital product designer. I design impactful solutions that bridge
        user needs and business goals.
      </motion.h2>
      <motion.h4
        className="px-6 text-base font-normal md:text-xl md:px-28 text-secondary-foreground"
        variants={fadeIn({ direction: "left" })}
        {...fadeInAnimationSettings}
      >
        In my 6+ years of experience, I have designed product and team
        experiences, planned features and road maps to drive impactful outcomes
        and foster growth within cross-functional teams at companies like
        Farmerline and mPharma.
      </motion.h4>
      <motion.div
        className="flex items-center justify-center gap-x-4"
        variants={fadeIn({ direction: "up" })}
        {...fadeInAnimationSettings}
      >
        <div>
          <Link to="mailto:oluwatobibabalola18@gmail.com">
            <Button>
              <span className="text-xs group-hover:text-accent-foreground md:text-sm">
                Email me
              </span>
              <ArrowUp className="duration-300 ease-in-out group-hover:rotate-45 text-secondary-foreground group-hover:text-accent-foreground size-6 md:size-8" />
            </Button>
          </Link>
        </div>
        <div>
          <Link to="https://www.linkedin.com">
            <Button>
              <span className="text-xs group-hover:text-accent-foreground md:text-base">
                LinkedIn
              </span>{" "}
              <ArrowUp className="duration-300 ease-in-out text-secondary-foreground group-hover:text-accent-foreground size-6 md:size-8 group-hover:rotate-45" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
