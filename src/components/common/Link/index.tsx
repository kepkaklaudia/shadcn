import Link from "next/link";
import "./styles.css";
export const StyledLink = ({
  href,
  children,
  className,
  rel,
  target,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  rel?:string;
  target?:string
}) => {
  return (
    <Link rel={rel} target={target} className={`link text-background ${className}`} href={href}>
      {children}
    </Link>
  );
};
