import { getTranslations } from "next-intl/server";

import { Stroke } from "@/components/common/stroke";
import { Intro } from "@/components/aboutUs/Intro";
import { Features } from "@/components/aboutUs/Features";
import { Border } from "@/components/common/border";
import { ColoredSection } from "@/components/aboutUs/ColoredSection";
import { Summary } from "@/components/aboutUs/summary";
import { CategoriesSection } from "@/components/aboutUs/CategoriesSection";

export async function generateMetadata() {
  const t = await getTranslations("metaData.aboutPage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function AboutPage() {
  return (
    <>
      <Intro />
      <Stroke src={"/assets/strokes/stroke.svg"} />
      <Features />
      <Border additionalClass="mb-[70px]" />
      <ColoredSection />
      <Summary />
      <CategoriesSection />
      {/*    <ContactForm /> */}
    </>
  );
}
