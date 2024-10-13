import { ReactNode, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
};
export const ProjectTitle = ({ children, ...props }: Props) => {
  return (
    <p
      {...props}
      className="mt-6 mb-4 text-xl font-medium text-tertiary-accent-foreground"
    >
      {children}
    </p>
  );
};
