import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="max-w-screen-3xl w-full flex flex-col items-center min-h-screen text-center mx-auto my-0">
        {children}
      </main>
      <Footer />
    </>
  );
}
