import { Link, NavLink, useLocation } from "react-router-dom";

import profilePic from "../../assets/profile-pic.png";
import { useEffect } from "react";
export const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to top on every route change
  }, [location]);

  return (
    <div className="sticky top-0 z-50 w-full pt-16 bg-white/70 backdrop-blur-md ">
      <nav className="w-full py-5 border rounded-full shadow-sm px-14 backdrop-blur-md bg-white/30 border-border-color">
        <div className="flex items-center justify-between mx-auto">
          <div className="flex items-center space-x-4">
            <Link to={"/"}>
              <img
                className="object-cover rounded-full size-16 -scale-x-100"
                src={profilePic}
                alt="Olowatobi Babalola"
              />
            </Link>
            <div>
              <h2 className="text-base font-medium text-primary-foreground">
                Oluwatobi Babalola
              </h2>
              <p className="text-sm font-normal text-secondary-foreground">
                Product & Interaction Designer
              </p>
            </div>
          </div>
          <ul className="flex space-x-6 text-base font-normal">
            <li>
              <NavLink
                to="/case-studies"
                className={({ isActive }) =>
                  isActive || location.pathname.includes("case-studies")
                    ? "text-accent-foreground"
                    : "transition-colors text-secondary-foreground hover:text-accent-foreground"
                }
              >
                my case studies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent-foreground"
                    : "transition-colors text-secondary-foreground hover:text-accent-foreground"
                }
              >
                my profile
              </NavLink>
            </li>
            <li>
              <a
                href="#footer"
                className={
                  "transition-colors text-secondary-foreground hover:text-accent-foreground"
                }
                onClick={(e) => {
                  e.preventDefault();
                  const footer = document.getElementById("footer");
                  if (footer) {
                    footer.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                get in touch
              </a>
            </li>
            <li>
              <Link
                to="/src/assets/cv.pdf"
                download="Oluwatobi-Babalola.pdf"
                target="_blank"
              >
                <button className="transition-colors text-secondary-foreground hover:text-accent-foreground">
                  my resume
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
