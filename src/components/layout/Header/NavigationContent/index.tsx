"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageSelector } from "@/components/layout/LanguageSelector";
import { MenuContent } from "@/components/layout/Header/NavigationContent/MenuContent";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/libs/utils";
import { linkStyle } from "@/components/ui/classes";
import { Link, pathnames } from "@/libs/i18n/navigation";

export const NavigationContent = () => {
  const t = useTranslations("layout.header");

  const linksContent = [
    { href: `/about-us`, text: t("About us") },
    { href: `/partners`, text: t("Partners") },
    { href: `/downloads`, text: t("Downloads") },
    { href: `/contact`, text: t("Contact") },
  ];

  return (
    <NavigationMenu
      className="max-w-[1920px] md:w-[84%] flex md:justify-between flex-wrap relative
    px-5 md:px-0 w-[90%] justify-end px-5 py-0 mx-auto"
    >
      <div className="w-full">
        <NavigationMenuList className="lg:justify-end justify-between flex-wrap relative my-0 mx-auto">
          <Link href="/">
            <Image
              src={"/assets/layout/Balhanger_LOGO.svg"}
              height={25}
              width={180}
              className=" sm:mx-1.5 sm:my-4 sm:h-6 xs:h-5 h-3.5 w-auto mx-0 my-3.5"
              alt="Logo"
              priority={true}
            />
          </Link>
          {/*<Navbar.Toggle className={styles.navbar__toggle} />*/}
          {/* <div className="collapsed flex 2xl:gap-20 mr-[15%] xl:mr-[10%] lg:gap-[60px] gap-[30px] justify-center mr-0">*/}
          <div className="collapsed mx-auto my-0 flex 2xl:gap-20 lg:gap-[60px]">
            <NavigationMenuItem
              className={cn(linkStyle, "after:-mt-2.5 after:h-0.5")}
            >
              <NavigationMenuTrigger className=" text-white py-2">
                {t("Trailers")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <MenuContent />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <div className="2xl:gap-[60px] flex lg:gap-10 md:gap-3.5 gap-0">
              {linksContent.map((linkContent, index) => (
                <NavigationMenuItem
                  key={index}
                  className={cn(
                    linkStyle,
                    "lg:self-center md:text-sm sm:self-start mb-2.5 after:-mt-2.5 after:h-0.5"
                  )}
                >
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link
                      href={{
                        pathname: linkContent.href as keyof typeof pathnames,
                        params: { id: "" },
                      }}
                    >
                      {linkContent.text}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </div>
          </div>
        </NavigationMenuList>
        <LanguageSelector />
      </div>
    </NavigationMenu>
  );
};
