import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { DownloadsProps } from "@/libs/types";

export const Downloads = ({ pdfGalvanized, pdfPowdered }: DownloadsProps) => {
  const t = useTranslations("product.productDetails.downloads");

  return (
    <div className="flex flex-col justify-center gap-[50px] mt-[50px] mb-20 mx-auto">
      {pdfGalvanized || pdfPowdered ? (
        <h2 className="text-3xl font-medium px-5 py-0">{t("Product cards")}</h2>
      ) : (
        t("No downloads")
      )}
      <div className="flex justify-center gap-10 flex-col items-center">
        {pdfGalvanized && (
          <Link
            className="flex flex-col gap-5 w-[180px] no-underline text-black items-center"
            title={t("Open product card")}
            target="_blank"
            rel="noopener noreferrer"
            href={`/assets/trailers/details/files/${pdfGalvanized}.pdf`}
          >
            <Image
              alt=""
              width="100"
              height="100"
              src="/assets/product/pdf.svg"
            />
            {t("Product card galvanized")}
          </Link>
        )}
        {pdfPowdered && (
          <Link
            className="flex flex-col gap-5 w-[180px] no-underline text-black items-center"
            title={t("Open product card")}
            target="_blank"
            rel="noopener noreferrer"
            href={`/assets/trailers/details/files/${pdfPowdered}.pdf`}
          >
            <Image
              alt=""
              width="100"
              height="100"
              src="/assets/product/pdf.svg"
            />
            {t("Product card powdered")}
          </Link>
        )}
      </div>
    </div>
  );
};
