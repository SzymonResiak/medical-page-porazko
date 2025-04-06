"use client";

import "./globals.css";
import { FooterLandingPage } from "@/components/FooterLandingPage";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

interface RootLayoutProps {
  children: React.ReactNode;
}

const MainContent = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen p-3 desktop:p-12 bg-[#FCFCFC] desktop-2:px-20 desktop-2:pt-25 desktop-2:pb-8">
    {children}
  </div>
);

const ConditionalFooter = () => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  return (
    <>
      {isMainPage ? <FooterLandingPage /> : <Footer />}
      <p className="text-right text-sm text-[#2E2E2E] mt-1">
        © 2025 XYZ – Wszelkie prawa zastrzeżone.
      </p>
    </>
  );
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <body className="antialiased">
        <main>
          <MainContent>
            {children}
            <ConditionalFooter />
          </MainContent>
        </main>
      </body>
    </html>
  );
}
