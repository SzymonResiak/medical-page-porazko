"use client";

import { FooterLandingPage } from "@/components/FooterLandingPage";
import { Footer } from "@/components/Footer";
import { usePathname } from "next/navigation";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { StaticCards } from "@/components/StaticCards";
import { PageTransition } from "@/components/PageTransition";

interface ClientLayoutProps {
  children: React.ReactNode;
}

// Lista poprawnych ścieżek - 404 będzie miała inną ścieżkę
const VALID_ROUTES = ["/", "/dentist", "/internist"];

const MainContent = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen p-3 desktop:p-12 bg-off-white desktop-lg:px-20 desktop-lg:pt-16 desktop-lg:pb-8 flex flex-col">
    {children}
  </div>
);

const ConditionalFooter = ({ isValidRoute }: { isValidRoute: boolean }) => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  // Dla stron 404/błędów nie pokazujemy footera
  if (!isValidRoute) {
    return (
      <div className="mt-8 desktop-lg:mt-24">
        <p className="text-center text-sm text-dark-gray mt-1">
          © 2025 SPLIN – Wszelkie prawa zastrzeżone.
        </p>
      </div>
    );
  }

  if (isMainPage) {
    return (
      <div className="mt-8 desktop-lg:mt-24">
        <FooterLandingPage />
        <p className="text-right text-sm text-dark-gray mt-1">
          © 2025 SPLIN – Wszelkie prawa zastrzeżone.
        </p>
      </div>
    );
  }

  return (
    <ScrollAnimation>
      <Footer />
      <p className="text-right text-sm text-[#2E2E2E] mt-1">
        © 2025 SPLIN – Wszelkie prawa zastrzeżone.
      </p>
    </ScrollAnimation>
  );
};

export const ClientLayout = ({ children }: ClientLayoutProps) => {
  const pathname = usePathname();
  const isValidRoute = VALID_ROUTES.includes(pathname);

  return (
    <MainContent>
      <div className="w-full flex flex-col gap-8 desktop-lg:gap-24 flex-grow">
        {isValidRoute && <StaticCards />}
        <PageTransition>{children}</PageTransition>
      </div>
      <ConditionalFooter isValidRoute={isValidRoute} />
    </MainContent>
  );
};
