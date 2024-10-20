import { Sheet, SheetTrigger, SheetContent, SheetHeader } from "../ui/sheet";
import { Link, NavLink, useLocation } from "react-router-dom";
import profilePic from "../../assets/profile-pic.png";
import { useEffect, useState } from "react";
import { MenuBurger } from "../icons";

export const MobileNavbar = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to top on every route change
  }, [location]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="block md:hidden">
        <MenuBurger />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link to={"/"} onClick={() => setIsOpen(false)}>
              <img
                className="object-cover rounded-full md:size-16 size-10 -scale-x-100"
                src={profilePic}
                alt="Olowatobi Babalola"
              />
            </Link>
            <div className="flex flex-col items-start">
              <h2 className="text-sm font-medium md:text-base text-primary-foreground">
                Oluwatobi Babalola
              </h2>
              <p className="text-xs font-normal md:text-sm text-secondary-foreground">
                Product & Interaction Designer
              </p>
            </div>
          </div>
        </SheetHeader>
        <ul className="flex flex-col mt-12 space-y-8 text-base font-normal">
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/case-studies"
              className={({ isActive }) =>
                isActive || location.pathname.includes("case-studies")
                  ? "text-accent-foreground "
                  : "transition-colors text-secondary-foreground hover:text-accent-foreground w-full "
              }
            >
              my case studies
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
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
                setIsOpen(false);
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
              onClick={() => setIsOpen(false)}
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
      </SheetContent>
    </Sheet>
  );
};
