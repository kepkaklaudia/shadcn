"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Section } from "@/components/layout/Footer/Section";
import { Wrapper } from "@/components/layout/Footer/Wrapper";
import "@/components/layout/Footer/styles.css";

export const Footer = () => {
  const t = useTranslations("layout.footer");
  const locale = useLocale();

  return (
    <>
      <footer className="footer relative bg-shaft text-white flex flex-col mt-auto flex-wrap overflow-hidden items-center justify-center px-[30px] py-2.5 xs:pt-[30px] sm:px-[50px] ">
        <div
          id="footer"
          className="relative max-w-screen-3xl grid w-full items-start  justify-items-start lg:grid-cols-[1fr_1fr_1fr_auto]  md:grid-cols-[repeat(3,1fr)] xs:grid-cols-[repeat(2,1fr)]  grid-cols-[1fr]  mx-auto my-2.5 lg:gap-[30px]"
        >
          <Section heading={"Balhanger"}>
            <Wrapper href={`/${locale}/about-us`} linkText={t("About us")} />
            <Wrapper href={`/${locale}/partners`} linkText={t("Partners")} />
            <Wrapper
              isMail={true}
              href="mailto:info@balhanger.com"
              linkText="info@balhanger.com"
            />
            <Wrapper> Wsola, Gombrowicza 4</Wrapper>
            <Wrapper>26-660 Jedlińsk</Wrapper>
          </Section>
          <Section
            className=" flex flex-col flex-wrap  xs:col-start-2 xs:row-start-1  "
            heading={t("Service and complaints")}
          >
            <Wrapper
              isMail={true}
              href="mailto:serwis@balhanger.com"
              linkText="serwis@balhanger.com"
            />
            <Wrapper
              href={`/${locale}/contact/#contactForm`}
              linkText={t("Contact form")}
            />
          </Section>
          <div className="xs:col-start-1 xs:row-start-2"></div>
          <Image
            src={"/assets/layout/Balhanger_LOGO.svg"}
            height={40}
            width={245}
            className="lg:col-start-4 col-start-3 row-start-1 w-[200px] h-auto mt-5 hidden md:flex"
            alt="Logo"
          />
          <Section
            className="xs:col-start-1 xs:row-start-2 col-start-1 row-start-2"
            heading={t("Sales Representative")}
          >
            <Wrapper>Radoslaw Spychala</Wrapper>
            <Wrapper
              href="mailto:r.spychala@balhanger.com"
              linkText="r.spychala@balhanger.com"
            />
          </Section>
          <Section
            className="xs:col-start-2 xs:row-start-2 col-start-1 row-[4]"
            heading={t("Assembly plant")}
          >
            <Wrapper
              href="mailto:info@balhanger.com"
              linkText="info@balhanger.com"
            />
          </Section>

          <Section
            className="xs:col-start-1 xs:row-start-3 lg:col-start-3 lg:row-start-2"
            heading={t("Statute")}
          >
            <Wrapper
              rel="noopener noreferrer"
              target="_blank"
              href={"https://kratki.com/pl/polityka-prywatnosci"}
              linkText={t("Privacy policy")}
            />
          </Section>
        </div>
        <section className="max-w-screen-3xl flex w-full items-center justify-items-center justify-between text-[10px] gap-[30px] relative pt-2.5 border-t-2 border-t-greyOpacity border-solid">
          <div className="flex gap-5">
            <Image
              src={"/assets/layout/linkdin.svg"}
              height={35}
              width={35}
              className="cursor-pointer hover:transition-transform hover:duration-200 hover:scale-110"
              alt="Logo"
            />
            <Image
              src={"/assets/layout/facebook.svg"}
              height={35}
              width={35}
              className="cursor-pointer hover:transition-transform hover:duration-200 hover:scale-110"
              alt="Logo"
            />
          </div>
          <div className="xs:flex xs:h-[12px] hidden">
            A product of{" "}
            <Image
              src={"/assets/layout/Balhanger_LOGO.svg"}
              height={12}
              width={110}
              alt="Logo"
            />
          </div>
          <div>© 2024</div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
