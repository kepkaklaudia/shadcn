import { getTranslations } from "next-intl/server";
import { Content } from "@/app/[locale]/(pages)/[...rest]/content";

export async function generateMetadata() {
  const t = await getTranslations("metaData.notFound");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function NotFound() {
  return <Content />;
}
