import { getTranslations } from "next-intl/server";
import { Content } from "@/app/[locale]/(pages)/products/[category]/content";

interface Props {
  params: { category: keyof Messages["metaData"]["productsPage"] };
}

export async function generateMetadata({ params: { category } }: Props) {
  const t = await getTranslations("metaData.productsPage");

  return {
    title: t(`${category}.title`),
    description: t(`${category}.description`),
  };
}

export default function ProductsPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <>
      <Content category={params.category} />
    </>
  );
}
