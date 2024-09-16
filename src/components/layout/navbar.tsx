import { Link } from "react-router-dom";
import profilePic from "../../assets/profile-pic.png";
export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full pt-6 bg-white/70 backdrop-blur-md ">
      <nav className="w-full py-8 border rounded-full shadow-sm px-14 backdrop-blur-md bg-white/30 border-border-color">
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
              <Link
                to="/"
                className="transition-colors text-secondary-foreground hover:text-accent-foreground"
              >
                my case studies
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="transition-colors text-secondary-foreground hover:text-accent-foreground"
              >
                my profile
              </Link>
            </li>
            <li>
              <Link
                to="#footer"
                className="transition-colors text-secondary-foreground hover:text-accent-foreground"
              >
                get in touch
              </Link>
            </li>
            <li>
              <button className="transition-colors text-secondary-foreground hover:text-accent-foreground">
                my resume
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
