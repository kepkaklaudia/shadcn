import { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import { SolidHeader } from "@/components/layout/Header";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <>
      <SolidHeader />
      <main className="mx-auto mb-0 max-w-screen-3xl w-full flex flex-col items-center text-center min-h-[auto]">
        {children}
      </main>
      <Footer />
    </>
  );
}
