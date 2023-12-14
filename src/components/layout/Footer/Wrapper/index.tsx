import { linkStyle } from "@/components/ui/classes";
import { cn } from "@/libs/utils";
import Link from "next/link";

interface WrapperProps {
  icon?: any;
  href?: string;
  linkText?: string;
  children?: string;
  rel?: string;
  target?: string;
  isMail?: boolean;
}

export const Wrapper: React.FC<WrapperProps> = ({
  icon,
  children,
  href,
  linkText,
  rel,
  target,
  isMail,
}) => (
  <div className="flex items-center mb-2 text-xs sm:text-sm">
    {icon && icon}
    {href &&
      (isMail ? (
        <a
          className={cn(
            linkStyle,
            "text-alto opacity-90 transition-colors duration-300 hover:text-white hover:opacity-100 text-xs xs:text-xs sm:text-sm"
          )}
          href={href}
        >
          {" "}
          {linkText}
        </a>
      ) : (
        <Link
          className={cn(
            linkStyle,
            "text-alto opacity-90 transition-colors duration-300 hover:text-white hover:opacity-100 text-xs xs:text-xs sm:text-sm"
          )}
          href={href}
          rel={rel}
          target={target}
          prefetch={false}
        >
          {linkText}
        </Link>
      ))}
    {children}
  </div>
);
