type CardProps = {
  title: string;
  desc: string;
};
export const Card = ({ title, desc }: CardProps) => {
  return (
    <div className=" border border-[#EAEAEA] rounded-lg px-6 pt-5 pb-3 flex flex-col gap-y-3 bg-[#F7F7F8]">
      <p className="text-sm font-semibold text-secondary-accent-foreground">
        {" "}
        {title}
      </p>
      <p className="text-sm font-normal text-secondary-foreground"> {desc}</p>
    </div>
  );
};
