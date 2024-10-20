import { ReactNode, HTMLAttributes } from "react";
import { cn } from "../../../utils";

type Props = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  className?: string;
};
export const Paragraph = ({ children, className, ...props }: Props) => {
  return (
    <p
      {...props}
      className={cn(
        "text-base font-normal leading-6 text-tertiary-accent-foreground",
        className
      )}
    >
      {children}
    </p>
  );
};
