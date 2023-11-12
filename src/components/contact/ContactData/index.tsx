import { useTranslations } from "next-intl";
import { ContactDataItem } from "@/components/contact/ContactData/contactDataItem";

export const ContactData = () => {
  const t = useTranslations("contact.contactData");

  return (
    <section className="grid grid-cols-[1fr] gap-5 mt-[30px] xs:mt-0 lg:grid-cols-[repeat(3,1fr)] xs:gap-[50px] lg:gap-[100px]">
      <ContactDataItem
        title={"Balhanger"}
        firstParagraph={"Wsola, Gombrowicza 4"}
        secondParagraph={"26-660 Jedlińsk"}
        firstLink={"info@balhanger.com"}
        firstHref={"mailto:info@balhanger.com"}
      />
      <ContactDataItem
        title={t("Assembly plant")}
        firstLink={"info@balhanger.com"}
        firstHref={"mailto:info@balhanger.comm"}
      />
      <ContactDataItem
        title={t("Sales Representative")}
        firstLink={"r.spychala@balhanger.com"}
        firstHref={"mailto:r.spychala@balhanger.com"}
      />
    </section>
  );
};
