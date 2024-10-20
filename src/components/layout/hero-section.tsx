import { Link } from "react-router-dom";
import { ArrowUp } from "../icons";
import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <section className="flex-col items-center justify-center pt-10 space-y-6 text-center">
      <h1 className="text-base font-medium md:text-xl text-primary-foreground">
        Hi, I’m Oluwatobi Babalola{" "}
      </h1>
      <h2 className="text-2xl font-semibold md:text-6xl text-primary-foreground">
        A digital product designer. I design impactful solutions that bridge
        user needs and business goals.
      </h2>
      <h4 className="px-6 text-base font-normal md:text-xl md:px-28 text-secondary-foreground">
        In my 6+ years of experience, I have designed product and team
        experiences, planned features and road maps to drive impactful outcomes
        and foster growth within cross-functional teams at companies like
        Farmerline and mPharma.
      </h4>
      <div className="flex items-center justify-center gap-x-4">
        <Link to="mailto:oluwatobibabalola18@gmail.com">
          <Button>
            <span className="text-xs group-hover:text-accent-foreground md:text-sm">
              Email me
            </span>
            <ArrowUp className=" text-secondary-foreground group-hover:text-accent-foreground size-6 md:size-8" />
          </Button>
        </Link>
        <Link to="https://www.linkedin.com">
          <Button>
            <span className="text-xs group-hover:text-accent-foreground md:text-base">
              LinkedIn
            </span>{" "}
            <ArrowUp className=" text-secondary-foreground group-hover:text-accent-foreground size-6 md:size-8" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
