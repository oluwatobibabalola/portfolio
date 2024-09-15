import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const SectionHeader = ({ children }: Props) => {
  return (
    <p className="text-3xl font-medium text-primary-foreground">{children}</p>
  );
};
