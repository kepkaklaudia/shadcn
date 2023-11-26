"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

export const MenuContent = () => {
  const t = useTranslations("layout.header");
  const locale = useLocale();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    setScreenWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (screenWidth === 0) {
    return null;
  }

  const menuItems = [
    {
      id: 1,
      href: `/${locale}/products/luggage`,
      imageSrc: "/assets/categories/luggage.webp",
      alt: "luggage",
      title: t("Luggage"),
    },
    {
      id: 2,
      href: `/${locale}/products/car-transporters`,
      imageSrc: "/assets/categories/car-transporters.webp",
      alt: "car-transporters",
      title: t("Car transporters"),
    },
    {
      id: 3,
      href: `/${locale}/products/boat`,
      imageSrc: "/assets/categories/boat.webp",
      alt: "boat",
      title: t("Boat / Motorcycle"),
    },
    {
      id: 4,
      href: `/${locale}/products/special`,
      imageSrc: "/assets/categories/special.webp",
      alt: "special",
      title: t("Special / Building"),
    },
  ];

  return (
    <>
      {screenWidth > 767.98 ? (
        <div className="lg:top-[50px] fixed h-auto w-screen mt-0 left-0 top-[45px]">
          <div className="grid grid-cols-[repeat(4,1fr)] bg-headerOpacity shadow-trailerMenu backdrop-blur-[6px] mt-6 border-b-white border-b border-solid">
            {menuItems.map((item) => (
              <NavigationMenuLink
                key={item.id}
                className="flex flex-col items-center flex-wrap transition-colors pb-6 hover:bg-greyOpacity hover:backdrop-blur-[6px] active:text-black active:bg-bg-greyOpacity active:backdrop-blur-[6px];
                "
                href={item.href}
              >
                <Image
                  className="w-full max-w-[235px] h-auto aspect-[1.8/1] px-1.5 py-0"
                  width={235}
                  height={165}
                  alt={item.alt}
                  src={item.imageSrc}
                />
                <p className="text-base lg:text-lg whitespace-break-spaces font-sm font-medium text-center m-0 px-1.5 py-0">
                  {item.title}
                </p>
              </NavigationMenuLink>
            ))}
          </div>
        </div>
      ) : (
        <>
          {menuItems.map((item) => (
            <NavigationMenuLink key={item.id} href={item.href}>
              {item.title}
            </NavigationMenuLink>
          ))}
        </>
      )}
    </>
  );
};
