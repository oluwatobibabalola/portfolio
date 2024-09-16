import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const SectionHeader = ({ children }: Props) => {
  return (
    <p className="text-3xl font-medium mb-14 text-primary-foreground">
      {children}
    </p>
  );
};
