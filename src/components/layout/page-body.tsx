import { ReactNode } from "react";
import { cn } from "../../utils";

type Props = {
  className?: string;
  children?: ReactNode;
};
export const PageBody = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        "max-w-5xl pb-12  flex flex-col items-center gap-y-12 border-b border-b-border-color",
        className
      )}
    >
      {children}
    </div>
  );
};
