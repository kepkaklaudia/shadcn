"use client";

import { useLocale } from "next-intl";

import "./styles.css";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { linkStyle } from "@/components/ui/classes";
import { cn } from "@/libs/utils";

export const LanguageSelector = () => {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <NavigationMenu className="absolute -translate-y-2/4 -right-20 top-2/4">
      <NavigationMenuList>
        <NavigationMenuItem className={cn(linkStyle, "mb-2.5 after:-mt-2.5 after:h-0.5" )}>
          <NavigationMenuTrigger >{locale.toUpperCase()}</NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col w-full gap-2">
            <Link href={`${pathname}`} locale="pl" legacyBehavior passHref>
              <NavigationMenuLink className="w-[50px] text-center hover:bg-alto transition-colors">PL</NavigationMenuLink>
            </Link>
            <Link href={`${pathname}`} locale="en" legacyBehavior passHref>
              <NavigationMenuLink className="w-[50px] text-center hover:bg-alto transition-colors">EN</NavigationMenuLink>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
