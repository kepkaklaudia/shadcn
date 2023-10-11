import { getTranslations } from "next-intl/server";
import { Content } from "@/app/[locale]/partners/content";

export async function generateMetadata() {
  const t = await getTranslations("metaData.partners");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Partners() {
  return (
    <>
      <Content />
    </>
  );
}
