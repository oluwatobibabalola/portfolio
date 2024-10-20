import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const SectionHeader = ({ children }: Props) => {
  return (
    <p className="my-8 text-2xl font-medium md:text-3xl md:my-14 text-primary-foreground">
      {children}
    </p>
  );
};
