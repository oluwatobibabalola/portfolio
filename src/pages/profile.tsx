import profilePic from "../assets/profile-pic.png";
import { PageBody } from "../components/layout/page-body";
import { education } from "../data/education";
import { experience } from "../data/experience";
export const Profile = () => {
  return (
    <PageBody className="items-start pt-12 pb-0 border-b-0 ">
      <div className="grid grid-cols-2 md:gap-x-20">
        <h1 className="col-span-2 text-base font-medium md:text-xl text-primary-foreground">
          Hi there 👋🏾
        </h1>
        <h2 className="col-span-2 pt-4 pb-8 text-2xl font-semibold md:text-6xl text-primary-foreground ">
          I am Oluwatobi and
          <br />I like to think in systems.
        </h2>
        <div className="grid col-span-2 md:col-span-1 gap-y-4">
          <p className="text-base font-normal leading-8 md:text-xl text-secondary-foreground ">
            I am a Senior Product Designer with over 6 years of experience,
            leading the design of numerous successful products. My journey has
            allowed me to collaborate closely with product management,
            development teams, executives, and other key stakeholders. I excel
            in executing all phases of design work, from aligning with business
            initiatives to conducting rigorous user testing.
          </p>
          <p className="text-base font-normal leading-8 md:text-xl text-secondary-foreground">
            One of my core strengths is my ability to think in systems. I have a
            knack for analyzing and understanding the interconnected parts of a
            whole system, which helps me identify problems, recognize dynamics,
            and anticipate how solutions will impact the entire ecosystem. This
            systemic thinking is integral to my approach to design. I believe in
            examining ambiguity and sitting with problems long enough to truly
            understand them before offering any solutions.
          </p>
          <p className="text-base font-normal leading-8 md:text-xl text-secondary-foreground">
            My design philosophy is rooted in the belief that technology should
            augment human relationships, not replace them. I strive to create
            designs that enhance human connections and improve interactions.
          </p>
          <p className="text-base font-normal leading-8 md:text-xl text-secondary-foreground">
            Thank you for visiting my portfolio. If you share my passion for
            thoughtful, human-centered design, I would love to connect and
            explore how we can create impactful solutions together.
          </p>
        </div>
        <div className="w-full col-span-2 mt-10 md:mt-0 md:col-span-1">
          <img
            className="object-cover w-full rounded-xl md:w-fit"
            src={profilePic}
            alt="Olowatobi Babalola"
          />
        </div>
      </div>
      <div className="grid py-16 border-y border-y-border-color gap-y-8">
        <div className="grid gap-y-4">
          <p className="text-2xl font-semibold md:text-3xl text-primary-foreground">
            What I do
          </p>
          <p className="text-base font-normal leading-8 md:text-xl text-secondary-foreground">
            Interaction Design. Product Design. User Research. UX Design.
            Usability Testing. Prototyping.
          </p>
        </div>
        <div className="grid gap-y-4">
          <p className="text-2xl font-semibold md:text-3xl text-primary-foreground">
            What I use
          </p>
          <p className="text-base font-normal leading-8 md:text-xl text-secondary-foreground">
            Figma. Figjam. Jira. Miro. Canva. Notion. Slack. Google Workspace.
            Microsoft Workspace. Maze Testing. Agile Methodology
          </p>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="w-full ">
        <h4 className="pb-6 text-2xl font-semibold md:text-3xl text-primary-foreground">
          Experience
        </h4>
        {experience.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col py-4 border-b gap-y-2 md:flex-row gap-x-16 border-b-border-color"
            >
              <div className="w-40">
                <p className="py-2 text-sm font-normal text-secondary-foreground">
                  {item.duration}
                </p>
              </div>
              <div className="grid gap-y-2 ">
                <p className="text-base font-normal md:text-xl text-secondary-foreground">
                  {item.role}
                </p>
                <p className="text-sm font-normal text-secondary-foreground">
                  {item.location}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* EDUCATION */}
      <div className="w-full md:pb-20">
        <h4 className="pb-6 text-2xl font-semibold md:text-3xl text-primary-foreground">
          Education
        </h4>
        {education.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col py-4 border-b gap-x-16 border-b-border-color md:flex-row gap-y-2"
            >
              <div className="w-40">
                <p className="py-2 text-sm font-normal text-secondary-foreground">
                  {item.duration}
                </p>
              </div>
              <div className="grid gap-y-2 ">
                <p className="text-base font-normal md:text-xl text-secondary-foreground">
                  {item.institution}
                </p>
                <p className="text-sm font-normal text-secondary-foreground">
                  {item.programme}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="h-0 lg:mx-56 bg-border-color" />
    </PageBody>
  );
};
