import { Link, useParams } from "react-router-dom";
import { mainProjects } from "../data/main-projects";
import { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
const sections = [
  {
    id: "section1",
    title: "Project Summary",
  },
  { id: "section2", title: "Context" },
  { id: "section3", title: "Discovery" },
  {
    id: "section4",
    title: "Design Process",
  },
  { id: "section5", title: "Post Launch" },
];
export const Project = () => {
  const { projectId } = useParams();
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleNow = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id);

        setVisibleSections((prev) => {
          const newVisible = [...new Set([...prev, ...visibleNow])];
          return newVisible.filter((id) => visibleNow.includes(id));
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const project = mainProjects.find(
    (project) => project.id === Number(projectId)
  );
  return (
    <section className="flex mt-10">
      <aside className="sticky w-1/5 h-screen p-4 overflow-auto top-32">
        <Link to={"/"}>
          <Button>Back</Button>
        </Link>
        <nav>
          <ul>
            {sections.map((section) => (
              <li key={section.id} className="mb-2">
                <Link
                  to={`#${section.id}`}
                  className={`block p-2 rounded ${
                    visibleSections[0] === section.id
                      ? "text-accent-foreground"
                      : "hover:text-accent-foreground"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(section.id);
                  }}
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div className="flex-1 pl-4 pr-60">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="mb-16">
            <h1 className="mb-4 text-3xl font-semibold text-primary-foreground">
              Improve cart conversion from 26.3% to 40%.
            </h1>
            <h2 className="text-xl font-medium text-secondary-accent-foreground">
              {section.title}
            </h2>
            <div className="">
              {project?.summary?.map((summary) => {
                return (
                  <p
                    key={summary.id}
                    className="mt-2 text-sm text-secondary-foreground"
                  >
                    {summary.desc}
                  </p>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};
