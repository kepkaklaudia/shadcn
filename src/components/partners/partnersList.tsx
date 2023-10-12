import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { PartnersListProps } from "@/libs/types";

export const PartnersList = ({
  mapRef,
  infoWindowRef,
  markerRef,
  partners,
  filteredPartners,
  buildContent,
}: PartnersListProps) => {
  const t = useTranslations("partners");

  const initial = { opacity: 0, y: 0 };
  const animate = { opacity: 1, y: 0 };
  const transition = { duration: 0.2 };

  function focusOnPoint({ lat, lng }: { lat: number; lng: number }) {
    if (mapRef.current && markerRef.current && infoWindowRef.current) {
      const targetLatLng = { lat: lat, lng: lng };
      infoWindowRef.current?.close();
      mapRef.current.panTo(targetLatLng);
      infoWindowRef.current?.setContent(
        buildContent(
          partners.find(
            (partner) =>
              partner.position.lat === lat && partner.position.lng === lng
          )
        )
      );
      infoWindowRef.current?.setPosition(targetLatLng);
      infoWindowRef.current?.open(mapRef.current as google.maps.Map);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
  const linkStyle =
    "text-shuttle hover:text-black break-all text-left p-[3px] text-sm underline";

  const titleStyle =
    "cursor-pointer no-underline after:content-[''] after:block after:w-0 after:h-[0.5px]  after:transition-all after:duration-300 after:m-auto hover:after:w-full hover:after:bg-black hover-text-black hover-opacity-1 text-sm xs:text-base font-normal text-black text-left transition-colors duration-300  break-all text-left p-[3px]";

  return (
    <AnimatePresence>
      {filteredPartners.length === 0 ? (
        <motion.p initial={initial} animate={animate} transition={transition}>
          {t("No results")}
        </motion.p>
      ) : (
        filteredPartners.map((partner, index) => (
          <motion.div
            key={index}
            className="flex gap-2 justify-items-start bg-white mb-[15px] p-2.5 border-b-grey border-b border-solid"
            initial={initial}
            animate={animate}
            transition={transition}
            onClick={() =>
              focusOnPoint({
                lat: partner.position.lat,
                lng: partner.position.lng,
              })
            }
          >
            <Image
              className="w-[50px] h-[50px] object-contain sm:w-[60px] sm:h-[60px]"
              src={`${partner.src}`}
              width={60}
              height={60}
              alt={partner.src}
            />
            <div className="flex flex-col items-start flex-wrap text-sm text-shaft">
              <h3 className={titleStyle}>{partner.companyName}</h3>
              <p className="text-xs text-left mb-0 sm:text-sm">
                {partner.address}
              </p>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                {partner.website}
              </a>
              <a href={`tel:${partner.tel}`} className={linkStyle}>
                {partner.tel}
              </a>
              <a href={`mailto:${partner.email}`} className={linkStyle}>
                {partner.email}
              </a>
            </div>
          </motion.div>
        ))
      )}
    </AnimatePresence>
  );
};
