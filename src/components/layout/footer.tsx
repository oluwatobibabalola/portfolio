import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col items-center max-w-2xl py-10 space-y-4 md:max-w-96 lg:max-w-xl xl:max-w-2xl "
    >
      <p className="text-2xl font-semibold text-center md:text-3xl text-primary-foreground">
        Thank you for reading through. I would be happy to chat if you have
        questions.
      </p>
      <p className="text-sm font-normal text-secondary-foreground">
        Feel free to reach out via{" "}
        <Link
          to="https://www.linkedin.com"
          target="_blank"
          className="text-accent-foreground"
        >
          LinkedIn.
        </Link>{" "}
      </p>
    </footer>
  );
};
