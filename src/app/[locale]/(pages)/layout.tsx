import { LayoutProps } from "@/libs/types";
import { SolidHeader } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default async function Layout({ children }: LayoutProps) {
  return (
    <>
      <SolidHeader />
      <main className="max-w-screen-3xl w-full flex flex-col items-center min-h-screen text-center mx-auto my-0 mt-[80px] sm:mt-[120px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
