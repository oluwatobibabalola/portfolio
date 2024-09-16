import { ReactNode, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
};
export const SubHeading = ({ children, ...props }: Props) => {
  return (
    <p
      {...props}
      className="mt-5 mb-4 text-xl font-medium text-secondary-accent-foreground"
    >
      {children}
    </p>
  );
};
