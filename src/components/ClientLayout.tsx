"use client";

import { FooterLandingPage } from "@/components/FooterLandingPage";
import { Footer } from "@/components/Footer";
import { usePathname } from "next/navigation";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { StaticCards } from "@/components/StaticCards";
import { PageTransition } from "@/components/PageTransition";
import { FloatingIsland } from "@/components/FloatingIsland";

interface ClientLayoutProps {
  children: React.ReactNode;
}

// Lista poprawnych ścieżek - 404 będzie miała inną ścieżkę
const VALID_ROUTES = ["/", "/dentist", "/internist"];

const MainContent = ({ children, isMainPage }: { children: React.ReactNode; isMainPage: boolean }) => (
  <div className={`p-2 tablet-landscape:p-4 desktop:p-6 desktop-lg:px-20 desktop-lg:py-8 bg-off-white flex flex-col ${
    isMainPage ? "h-[100dvh] overflow-hidden main-content-homepage" : "min-h-screen"
  }`}>
    {children}
  </div>
);

const ConditionalFooter = ({ isValidRoute }: { isValidRoute: boolean }) => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  // Dla stron 404/błędów nie pokazujemy footera
  if (!isValidRoute) {
    return (
      <div className="mt-auto pt-3 flex-shrink-0">
        <p className="text-center text-sm text-dark-gray mt-1">
          © 2025 SPLIN – Wszelkie prawa zastrzeżone.
        </p>
      </div>
    );
  }

  if (isMainPage) {
    return (
      <div className="flex-grow flex flex-col justify-end pt-2 desktop:pt-3">
        <FooterLandingPage />
        <p className="text-right text-xs tablet:text-sm text-dark-gray mt-1">
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
  const isMainPage = pathname === "/";
  const isSubpage = pathname === "/dentist" || pathname === "/internist";

  return (
    <MainContent isMainPage={isMainPage}>
      {/* FloatingIsland - na podstronach: mobile + tablet portrait */}
      {isSubpage && <FloatingIsland />}

      {/* Mobile + tablet portrait: treść na górze */}
      <div className="tablet-landscape:hidden desktop:hidden">
        <PageTransition>{children}</PageTransition>
      </div>

      {/* Karty: homepage = zawsze, podstrony = tylko tablet landscape+ / desktop */}
      {isValidRoute && (
        <div className={isSubpage ? "hidden tablet-landscape:block desktop:block" : ""}>
          <StaticCards />
        </div>
      )}

      {/* Tablet landscape + desktop: treść pod kartami */}
      <div className="hidden tablet-landscape:block desktop:block mt-4 desktop:mt-6">
        <PageTransition>{children}</PageTransition>
      </div>
      <ConditionalFooter isValidRoute={isValidRoute} />
    </MainContent>
  );
};
