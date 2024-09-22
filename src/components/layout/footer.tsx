import { Link } from "react-router-dom";
import { ArrowUp } from "../icons";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col items-center max-w-2xl py-10 space-y-6"
    >
      <p className="text-3xl font-semibold text-center text-primary-foreground">
        Thank you for reading through. I would be happy to chat if you have
        questions.
      </p>
      <div className="flex items-center justify-around gap-x-4">
        <div className="flex flex-col gap-y-1">
          <p className="text-sm font-normal text-secondary-foreground">Email</p>
          <Link
            to="mailto:oluwatobibabalola18@gmail.com"
            className="flex items-center text-lg text-primary-foreground hover:text-accent-foreground group"
          >
            oluwatobibabalola18@gmail.com
            <ArrowUp className=" text-primary-foreground group-hover:text-accent-foreground" />
          </Link>
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="text-sm font-normal text-secondary-foreground">
            LinkedIn
          </p>
          <Link
            to="https://www.linkedin.com"
            className="flex items-center text-lg text-primary-foreground hover:text-accent-foreground group"
          >
            Oluwatobi Babalola
            <ArrowUp className=" text-primary-foreground group-hover:text-accent-foreground" />
          </Link>
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="text-sm font-normal text-secondary-foreground">
            Resume/CV
          </p>
          <Link
            className="flex items-center text-lg text-primary-foreground hover:text-accent-foreground group"
            to="/src/assets/cv.pdf"
            download="Oluwatobi-Babalola.pdf"
            target="_blank"
          >
            Oluwatobi’s CV
            <ArrowUp className=" text-primary-foreground group-hover:text-accent-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
