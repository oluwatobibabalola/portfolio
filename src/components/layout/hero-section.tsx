import { ArrowUp } from "../icons";
import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <section className="flex-col items-center justify-center py-10 space-y-6 text-center">
      <h1 className="text-xl font-medium text-primary-foreground">
        Hi, I’m Oluwatobi Babalola{" "}
      </h1>
      <h2 className="text-6xl font-semibold text-primary-foreground">
        A digital product designer. I design impactful solutions that bridge
        user needs and business goals.
      </h2>
      <h4 className="text-xl font-normal px-28 text-secondary-foreground">
        In my 6+ years of experience, I have designed product and team
        experiences, planned features and road maps to drive impactful outcomes
        and foster growth within cross-functional teams at companies like
        Farmerline and mPharma.
      </h4>
      <div className="flex items-center justify-center gap-x-4">
        <Button>
          <span className=" group-hover:text-accent-foreground">Email me</span>
          <ArrowUp className=" text-secondary-foreground group-hover:text-accent-foreground" />
        </Button>
        <Button>
          <span className=" group-hover:text-accent-foreground">LinkedIn</span>{" "}
          <ArrowUp className=" text-secondary-foreground group-hover:text-accent-foreground" />
        </Button>
      </div>
    </section>
  );
};
