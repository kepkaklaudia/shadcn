"use client";

import { useEffect, useRef, useState } from "react";

import { NavigationContent } from "./NavigationContent";
import { Background } from "./background";
import { handleScroll } from "./functions";
import { cn } from "@/libs/utils";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollHandler = () => {
      handleScroll({
        backgroundRef,
        headerRef,
        setIsScrolled,
      });
    };

    scrollHandler();

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isScrolled]);

  return (
    <>
      <div
        ref={headerRef}
        className={cn(
          "justify-center w-screen flex fixed p-2 items-center justify-center z-50 top-0 right-0 left-0",
          isScrolled ? "bg-shaft" : "md:bg-transparent bg-shaft"
        )}
      >
        <NavigationContent />
      </div>
      <Background />
    </>
  );
};

export const SolidHeader = () => (
  <>
    <div className="bg-shaft">
      <NavigationContent />
    </div>
  </>
);
