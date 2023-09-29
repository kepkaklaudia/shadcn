import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { SectionImage } from "@/components/homepage/CreateTrailers/SectionImage";
import { Title } from "@/components/common/title";
import { Border } from "@/components/common/border";
import { Link } from "@/libs/i18n/navigation";

export const CreateTrailers = () => {
  const t = useTranslations("homepage.createTrailers");

  return (
    <>
      <section className=" w-full mx-auto">
        <Border additionalClass="md:mt-auto md:mb-[100px] mt-10 mb-[60px]" />
        <Title heading={t("Creating trailers")} subheading={t("Learn more")} />
        <SectionImage />
        <Button
          className="lg:mt-5 lg:mb-[50px] lg:mx-auto no-overline w-[120px] mx-auto my-0"
          asChild
        >
          <Link href="/about-us">{t("Check out")}</Link>
        </Button>
      </section>
    </>
  );
};
