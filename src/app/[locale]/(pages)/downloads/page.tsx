import { getTranslations } from "next-intl/server";
import { Content } from "@/app/[locale]/(pages)/downloads/content";

export async function generateMetadata() {
  const t = await getTranslations("metaData.downloads");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function DownloadsPage() {
  return (
    <>
      <Content />
    </>
  );
}
