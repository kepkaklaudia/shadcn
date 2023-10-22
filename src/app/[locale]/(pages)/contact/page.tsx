import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Border } from "@/components/common/border";
import { Stroke } from "@/components/common/stroke";
import { MotionOpacity } from "@/components/motion/motionOpacity";
import { MotionSpring } from "@/components/motion/motionSpring";
import { ContactData } from "@/components/contact/ContactData";
import { cn } from "@/libs/utils";
import { heading } from "@/components/ui/classes";

export async function generateMetadata() {
  const t = await getTranslations("metaData.contactPage");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      <div className="w-4/5 flex flex-col items-start text-left">
        <MotionOpacity>
          <h2 className={cn(heading, "m-0 xs:mb-[50px]")}>{t("Contact")}</h2>
          <ContactData />
        </MotionOpacity>
      </div>
      <Border additionalClass="mx-0 xs:mx-0 my-10 xs:my-[70px]" />
      <div className="w-4/5 flex flex-col items-start text-left">
        <MotionSpring>
          <h2 className="text-sm underline underline-offset-4 font-semibold sm:text-base mx-0 my-5 lg:mt-0">
            {t("Complaints and returns")}
          </h2>
          <p className="m-0 text-sm md:text-base">
            {t("We strongly encourage you")}
          </p>
        </MotionSpring>
      </div>
      <Stroke
        additionalClass="mx-auto my-[50px] xs:my-[50px] sm:my-20 lg:my-[100px]"
        src={"/assets/strokes/black.svg"}
      />
      <div className="w-4/5 flex flex-col items-start text-left">
        <MotionOpacity>
          <h2 id="contactForm" className={cn(heading, "m-0 xs:mb-[50px]")}>
            {t("We are at your service")}
          </h2>
        </MotionOpacity>
      </div>
      {/* <ContactForm />*/}
    </>
  );
}
