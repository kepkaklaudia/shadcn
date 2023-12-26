import { getTranslations } from "next-intl/server";
import { Content } from "@/app/[locale]/(pages)/product/[id]/content";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: Props) {
  const t = await getTranslations("metaData.productPage");
  return {
    title: `${t(`title`)} ${id} | Balhanger`,
    description: `${id} Balhanger ${t(`description`)} `,
  };
}

export default function ProductPage({ params }: Props) {
  return <Content id={params.id} />;
}
