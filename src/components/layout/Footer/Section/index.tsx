import { ReactNode } from "react";

interface SectionProps {
  heading: string;
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  heading,
  children,
  className,
}) => {
  return (
    <section className={`text-left ${className}`}>
      <h2 className="font-semibold my-5 lg:mt-0 text-sm sm:text-base">
        {heading}
      </h2>
      {children}
    </section>
  );
};
