import { Link, useParams } from "react-router-dom";
import { mainProjects } from "../data/main-projects";
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { ArrowBack } from "../components/icons";
import { SubHeading } from "../components/ui/sub-heading";
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
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setCurrentId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
        sectionRefs.current[section.id] = element;
      }
    });

    return () => {
      sections.forEach((section) => {
        if (sectionRefs.current[section.id]) {
          observer.unobserve(sectionRefs.current[section.id]!);
        }
      });
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setCurrentId(id);
  };
  const project = mainProjects.find(
    (project) => project.id === Number(projectId)
  );
  return (
    <section className="mt-16 ">
      <aside className="fixed w-1/5 h-screen p-4 overflow-auto left-5">
        <Link to={"/"}>
          <Button>
            <ArrowBack className="mr-1" /> Back
          </Button>
        </Link>
        <nav className="mt-10">
          <ul>
            {sections.map((section) => (
              <li key={section.id} className="mb-4 ">
                <Link
                  to={`#${section.id}`}
                  className={` ${
                    currentId === section.id
                      ? "text-accent-foreground"
                      : "hover:text-accent-foreground text-secondary-foreground text-base  font-normal"
                  }`}
                  onClick={() => handleClick(section.id)}
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div className="flex flex-col mx-56 mt-4 border-b max-w-7xl border-b-border-color pb-14">
        <h1 className="mb-2 text-4xl font-semibold text-primary-foreground">
          {project?.title}
        </h1>
        <div id="project-summary">
          <SubHeading> Project Summary</SubHeading>
          <div className="flex flex-col space-y-2 ">
            {project?.summary?.map((summary) => {
              return (
                <p
                  key={summary.id}
                  className="text-sm font-normal leading-6 text-secondary-foreground"
                >
                  {summary.desc}
                </p>
              );
            })}
          </div>
        </div>
        <div id="context">
          <SubHeading> Context</SubHeading>
          <div>
            <img
              src={project?.asset.src}
              alt={project?.asset.alt}
              className="object-contain "
            />
            <p className="mt-6 text-sm font-normal leading-6 text-secondary-foreground">
              {project?.context_desc}{" "}
            </p>
          </div>
        </div>
        <div id="discovery">
          <SubHeading> Discovery</SubHeading>
          <p className="text-sm font-normal leading-6 text-secondary-foreground">
            {project?.discovery}
          </p>
        </div>
        <div id="design-process">
          <SubHeading> Design Process</SubHeading>
          <p className="text-sm font-normal leading-6 text-secondary-foreground">
            {project?.design_process}
          </p>
        </div>
      </div>
    </section>
  );
};
