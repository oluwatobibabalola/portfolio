import profilePic from "../assets/profile-pic.png";
import { education } from "../data/education";
import { experience } from "../data/experience";
export const Profile = () => {
  return (
    <div className="py-12 mx-10 space-y-12 ">
      <div className="grid grid-cols-2 ">
        <div className="grid gap-y-8">
          <h1 className="text-xl font-medium text-primary-foreground">
            Hi there 👋🏾
          </h1>
          <h2 className="text-6xl font-semibold text-primary-foreground">
            I am Oluwatobi and
            <br />I like to think in systems.
          </h2>
          <p className="text-xl font-normal text-secondary-foreground">
            I am a Senior Product Designer with over 6 years of experience,
            leading the design of numerous successful products. My journey has
            allowed me to collaborate closely with product management,
            development teams, executives, and other key stakeholders. I excel
            in executing all phases of design work, from aligning with business
            initiatives to conducting rigorous user testing.
          </p>
          <p className="text-xl font-normal text-secondary-foreground">
            One of my core strengths is my ability to think in systems. I have a
            knack for analyzing and understanding the interconnected parts of a
            whole system, which helps me identify problems, recognize dynamics,
            and anticipate how solutions will impact the entire ecosystem. This
            systemic thinking is integral to my approach to design. I believe in
            examining ambiguity and sitting with problems long enough to truly
            understand them before offering any solutions.
          </p>
          <p className="text-xl font-normal text-secondary-foreground">
            My design philosophy is rooted in the belief that technology should
            augment human relationships, not replace them. I strive to create
            designs that enhance human connections and improve interactions.
          </p>
          <p className="text-xl font-normal text-secondary-foreground">
            Thank you for visiting my portfolio. If you share my passion for
            thoughtful, human-centered design, I would love to connect and
            explore how we can create impactful solutions together.
          </p>
        </div>
        <div className="flex justify-end mt-44 h-[600px] ">
          <img
            className="object-cover "
            src={profilePic}
            alt="Olowatobi Babalola"
          />
        </div>
      </div>
      <div className="grid py-16 border-y border-y-border-color gap-y-8">
        <div className="grid gap-y-4">
          <p className="text-3xl font-semibold text-primary-foreground">
            What I do
          </p>
          <p className="text-xl font-normal text-secondary-foreground">
            Interaction Design. Product Design. User Research. UX Design.
            Usability Testing. Prototyping.
          </p>
        </div>
        <div className="grid gap-y-4">
          <p className="text-3xl font-semibold text-primary-foreground">
            What I use
          </p>
          <p className="text-xl font-normal text-secondary-foreground">
            Figma. Figjam. Jira. Miro. Canva. Notion. Slack. Google Workspace.
            Microsoft Workspace. Maze Testing. Agile Methodology
          </p>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="">
        <h4 className="pb-6 text-3xl font-semibold text-primary-foreground">
          Experience
        </h4>
        {experience.map((item) => {
          return (
            <div
              key={item.id}
              className="flex py-4 border-b gap-x-16 border-b-border-color"
            >
              <div className="w-40">
                <p className="py-2 text-sm font-normal text-secondary-foreground">
                  {item.duration}
                </p>
              </div>
              <div className="grid gap-y-2 ">
                <p className="text-xl font-normal text-secondary-foreground">
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
      <div className="pb-20">
        <h4 className="pb-6 text-3xl font-semibold text-primary-foreground">
          Education
        </h4>
        {education.map((item) => {
          return (
            <div
              key={item.id}
              className="flex py-4 border-b gap-x-16 border-b-border-color"
            >
              <div className="w-40">
                <p className="py-2 text-sm font-normal text-secondary-foreground">
                  {item.duration}
                </p>
              </div>
              <div className="grid gap-y-2 ">
                <p className="text-xl font-normal text-secondary-foreground">
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
      <hr className="h-0 mx-56 bg-border-color" />
    </div>
  );
};
