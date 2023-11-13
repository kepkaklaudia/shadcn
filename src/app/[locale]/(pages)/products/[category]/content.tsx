"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

import { SortByType, SortByDirection } from "@/libs/types";
import { useSortSelect } from "./hooks/useSortSelect";
import { useTagSelect } from "./hooks/useTagSelect";
import { useViewPreference } from "./hooks/useViewPreference";
import { useScrollToElement } from "./hooks/useScrollToElement";
import useProductsData from "./hooks/useProductsData";
import { Loader } from "@/components/common/Loader";
import { sortAndFilter } from "./sortAndFilter";
import { Stroke } from "@/components/common/stroke";
import CategoriesButtons from "@/components/products/categoriesButtons";
import { Tags } from "@/components/products/tags";
import { ViewSelector } from "@/components/products/viewSelector";
import { SortSection } from "@/components/products/sortSection";
import { TrailerDetailGrid } from "@/components/products/TrailerDetail/grid";
import { TrailerDetailList } from "@/components/products/TrailerDetail/list";
import { Heading } from "@/components/products/heading";
import { SortModal } from "@/components/products/SortModal";

export const Content = ({ category }: { category: string }) => {
  const t = useTranslations("products");
  const router = useRouter();
  const searchParams = useSearchParams();

  const sortType = searchParams.get("sortType");
  const sortDirection = searchParams.get("sortDirection");
  const [sortBy, setSortBy] = useState<{
    type: SortByType;
    direction: SortByDirection;
  }>({
    type: (sortType as SortByType) || "",
    direction: (sortDirection as SortByDirection) || "",
  });
  const searchTags = searchParams.getAll("tag");

  const [selectedTags, setSelectedTags] = useState<string[]>(
    searchTags && searchTags.length > 0 ? (searchTags as string[]) : []
  );

  const [showModal, setShowModal] = useState(false);
  const scrollHereRef = useRef<HTMLDivElement>(null);

  const { handleSort } = useSortSelect({
    selectedTags,
    sortBy,
    setSortBy,
    category,
    router,
  });
  const { handleTagClick } = useTagSelect({
    sortBy,
    selectedTags,
    setSelectedTags,
    category,
    router,
  });

  const { view, handleViewChange } = useViewPreference();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        localStorage.setItem("scrollState", "manual");
      }, 600);
    }
  }, []);

  useScrollToElement(scrollHereRef, category, view);

  const { data, isLoading, error, isPaused } = useProductsData();

  if (isPaused) {
    return (
      <p>
        {t("Data couldn't be downloaded")}
        <br />
        {t("Check your internet connection")}
      </p>
    );
  }

  if (isLoading && !data) {
    return <Loader />;
  }

  if (error) {
    return (
      <p>
        {t("Data couldn't be downloaded")}
        <br />
        {t("Please try again later")}
      </p>
    );
  }

  const productsArray = data?.products || [];

  const searchedProducts = sortAndFilter({
    productsArray,
    sortBy,
    selectedTags,
    category,
  });

  const tagsData = data ? data.tags : [];

  return (
    <>
      <CategoriesButtons category={category} />
      <div>
        <div className="grid-cols-[1fr] grid gap-[30px] px-[50px] py-5 lg:gap-0 lg:grid-cols-[1fr_1fr] lg:p-[50px]">
          <div className="flex flex-col gap-5">
            <Tags
              handleTagClick={handleTagClick}
              tags={tagsData}
              selectedTags={selectedTags}
            />
            <ViewSelector handleViewChange={handleViewChange} view={view} />
          </div>
          <SortSection
            sortBy={sortBy}
            setSortBy={setSortBy}
            handleSort={handleSort}
            selectedTags={selectedTags}
            setShowModal={setShowModal}
          />
        </div>
        <SortModal
          showModal={showModal}
          setShowModal={setShowModal}
          sortBy={sortBy}
          setSortBy={setSortBy}
          setSelectedTags={setSelectedTags}
          handleSort={handleSort}
        />
      </div>
      <div ref={scrollHereRef} />
      <Stroke
        src={"/assets/strokes/stroke.svg"}
        additionalClass="my-[50px]  sm:my-20 lg:my-[100px] mx-auto "
      />
      <Heading category={category as keyof Messages["products"]["heading"]} />
      {view === "grid" ? (
        <TrailerDetailGrid products={searchedProducts} />
      ) : (
        <TrailerDetailList products={searchedProducts} />
      )}
    </>
  );
};
