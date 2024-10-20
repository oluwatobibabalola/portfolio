import { Link } from "react-router-dom";
import { HeroSection } from "../components/layout/hero-section";
import { OtherProjects } from "../components/layout/other-projects";
import muttiPhoto from "../assets/mymutti.com.png";
import bloomApp from "../assets/pharm-care.png";
import { PageBody } from "../components/layout/page-body";

export const Home = () => {
  return (
    <PageBody>
      <HeroSection />
      <div className="grid gap-y-4">
        <div className="flex flex-col items-center justify-center mb-20 text-center gap-y-4 ">
          <p className="text-sm font-normal text-secondary-foreground">
            mymutti.com
          </p>
          <Link to={"case-studies/mutti"}>
            <p className="px-10 text-2xl font-semibold md:px-0 md:max-w-lg md:text-4xl text-primary-foreground">
              Product inventory management system for mymutti
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
        <div className="flex flex-col items-center justify-center text-center md:mb-20 gap-y-4 ">
          <p className="text-sm font-normal text-secondary-foreground">
            Internal tool
          </p>
          <Link to={"case-studies/mutti"}>
            <p className="px-10 text-2xl font-semibold md:px-0 md:max-w-lg md:text-4xl text-primary-foreground">
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
      <OtherProjects />
    </PageBody>
  );
};
