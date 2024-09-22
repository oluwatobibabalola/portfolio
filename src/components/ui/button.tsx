import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Button = ({ children }: Props) => {
  return (
    <button
      className={`inline-flex items-center justify-center group whitespace-nowrap rounded-full border border-border-color text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 px-5  text-secondary-foreground hover:text-accent-foreground hover:bg-accent-foreground/5 hover:border-accent-foreground`}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";
export { Button };
