import { Link, useParams } from "react-router-dom";
import { mainProjects } from "../data/main-projects";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { ArrowBack } from "../components/icons";
import { SubHeading } from "../components/ui/sub-heading";
import { useInView } from "react-intersection-observer";

const sections = [
  {
    id: "project-summary",
    title: "Project Summary",
  },
  { id: "context", title: "Context" },
  { id: "discovery", title: "Discovery" },
  {
    id: "design-process",
    title: "Design Process",
  },
];

export const Project = () => {
  const { projectId } = useParams();
  const [currentId, setCurrentId] = useState("project-summary");

  const project = mainProjects.find(
    (project) => project.id === Number(projectId)
  );

  // Helper to manage the intersection and scrolling logic for each section
  const useSectionInView = (id: string) => {
    const { ref, inView } = useInView({
      threshold: 0.6,
      triggerOnce: false,
    });

    useEffect(() => {
      if (inView) {
        setCurrentId(id);
      }
    }, [inView, id]);

    return ref;
  };

  // Section refs using the helper hook
  const projectSummaryRef = useSectionInView("project-summary");
  const contextRef = useSectionInView("context");
  const discoveryRef = useSectionInView("discovery");
  const designProcessRef = useSectionInView("design-process");

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setCurrentId(id);
  };

  return (
    <section className="relative mt-16 ">
      <aside className="fixed w-1/5 h-screen p-4 overflow-auto left-36">
        <Link to={"/"}>
          <Button>
            <ArrowBack className="mr-1" /> Back
          </Button>
        </Link>
        <nav className="mt-10">
          <ul>
            {sections.map((section) => (
              <li key={section.id} className="mb-4">
                <button
                  className={`${
                    currentId === section.id
                      ? "text-accent-foreground"
                      : "hover:text-accent-foreground text-secondary-foreground text-base font-normal"
                  }`}
                  onClick={() => handleClick(section.id)}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="flex flex-col mx-56 mt-4 border-b max-w-7xl border-b-border-color pb-14">
        <h1 className="mb-6 text-4xl font-semibold text-primary-foreground">
          {project?.heading}
        </h1>

        <div id="project-summary" ref={projectSummaryRef}>
          <SubHeading> Project Summary</SubHeading>
          <div className="flex flex-col space-y-2">
            {project?.summary?.map((summary) => (
              <p
                key={summary.id}
                className="text-sm font-normal leading-6 text-secondary-foreground"
              >
                {summary.desc}
              </p>
            ))}
          </div>
        </div>

        <div id="context" ref={contextRef}>
          <SubHeading> Context</SubHeading>
          <div>
            <img
              src={project?.asset.src}
              alt={project?.asset.alt}
              className="object-contain"
            />
            <p className="mt-6 text-sm font-normal leading-6 text-secondary-foreground">
              {project?.context_desc}
            </p>
          </div>
        </div>

        <div id="discovery" ref={discoveryRef}>
          <SubHeading> Discovery</SubHeading>
          <p className="text-sm font-normal leading-6 text-secondary-foreground">
            {project?.discovery}
          </p>
        </div>

        <div id="design-process" ref={designProcessRef}>
          <SubHeading> Design Process</SubHeading>
          <p className="text-sm font-normal leading-6 text-secondary-foreground">
            {project?.design_process}
          </p>
        </div>
      </div>
    </section>
  );
};
