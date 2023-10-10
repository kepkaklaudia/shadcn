"use client";

import "./styles.css";
import { Loader } from "@googlemaps/js-api-loader";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import partners from "../../../../public/assets/partners.json";
import { PartnersList } from "@/components/partners/partnersList";

export const Content = () => {
  const t = useTranslations("partners");
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const markerRef = useRef<any | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPartners, setFilteredPartners] = useState(partners);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    filterPartners(event.target.value);
  };

  const filterPartners = (query: string) => {
    const filtered = partners.filter((partner) =>
      Object.values(partner).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredPartners(filtered);
  };

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map, InfoWindow } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement, PinElement } = await loader.importLibrary(
        "marker"
      );

      infoWindowRef.current = new InfoWindow({
        minWidth: 250,
      });

      const center = {
        lat: 52.112795,
        lng: 19.211946,
      };

      const mapOptions: google.maps.MapOptions = {
        center: center,
        zoom: 6,
        mapId: "partners",
      };
      mapRef.current = new Map(
        mapContainerRef.current as HTMLDivElement,
        mapOptions
      );

      partners.forEach((partner) => {
        const pinBackground = new PinElement({
          background: "#5ba5b0",
          glyphColor: "#FFF",
          borderColor: "#005157",
        });

        markerRef.current = new AdvancedMarkerElement({
          position: partner.position,
          map: mapRef.current,
          title: partner.companyName,
          content: pinBackground.element,
        });

        markerRef.current.addListener(
          "click",
          ({ latLng }: { latLng: { lat: number; lng: number } }) => {
            mapRef.current?.panTo(latLng);
            const targetLatLng = {
              lat: partner.position.lat,
              lng: partner.position.lng,
            };
            infoWindowRef.current?.close();
            infoWindowRef.current?.setContent(buildContent(partner));
            infoWindowRef.current?.open(mapRef.current as google.maps.Map);
            infoWindowRef.current?.setPosition(targetLatLng);
          }
        );
      });
    };

    initMap();
  }, []);

  function buildContent(property: any) {
    const content = document.createElement("div");
    content.classList.add("marker");

    content.innerHTML = `
      <h3 class="marker__title">${property.companyName}</h3>
      <div class="marker_flex">
        <div class="marker__image">
          <img class="marker__image" src="${property.src}" width="60" height="60" alt="" />
        </div>
        <div class="marker__wrapper">
          <p class="marker__paragraph">${property.address}</p>
          <a href="${property.website}" target="_blank" rel="noopener noreferrer" class="marker__link">${property.website}</a>
          <a href="tel:${property.tel}" class="marker__link">${property.tel}</a>
          <a href="mailto:${property.email}" class="marker__link">${property.email}</a>
        </div>
      </div>
    `;
    return content;
  }

  return (
    <>
      <div className="relative flex flex-col justify-items-center w-full h-auto -mt-[59px] xs:-mt-[54px] sm:-mt-[109px] lg:-mt-[105px]">
        <div
          className="h-[90vh] min-h-[500px] w-full relative"
          ref={mapContainerRef}
        />

        <div className="min-w-[200px] xs:min-w-[300px] translate-x-0 mt-[30px] mx-auto lg:absolute w-[30%] lg:-translate-x-2/4 lg:z-[1] lg:left-2/4 lg:top-[30px] flex">
          <input
            className="w-full pl-[30px] border-shaft border rounded-[5px] p-1.5"
            placeholder={t("Search partners")}
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <Image
            width={31}
            height={33}
            src="/assets/partners/glass.svg"
            alt=""
            className="absolute -translate-y-2/4 w-5 h-auto left-[5px] top-2/4"
          />
        </div>
        <div className="w-full sm:w-4/5 lg:w-[30%] max-h-none lg:max-h-[50vh] mt-[30px] lg:absolute right-0 top-0 flex max-w-[400px] overflow-y-auto flex-col justify-items-center bg-alabaster lg:rounded-tl-[5px] lg:rounded-bl-[5px]  lg:border lg:border-alto lg:border-solid lg:shadow-map mx-auto mt-[30px] mb-[80px] lg:mt-[80px] lg:px-3 lg:py-2">
          <div className="flex flex-col items-start mt-[5px] mb-5">
            <h1 className="self-start text-xl font-medium">
              {t("Our partners")}
            </h1>
            <Image
              className="w-full h-auto"
              width={300}
              height={6}
              src="/assets/strokes/stroke.svg"
              alt=""
            />
          </div>
          <PartnersList
            mapRef={mapRef}
            infoWindowRef={infoWindowRef}
            markerRef={markerRef}
            partners={partners}
            filteredPartners={filteredPartners}
            buildContent={buildContent}
          />
        </div>
      </div>
    </>
  );
};
