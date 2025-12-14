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
  <div className={`p-2 tablet-landscape:p-4 desktop:p-6 desktop-lg:px-20 desktop-lg:py-8 pb-[calc(0.5rem+env(safe-area-inset-bottom))] bg-off-white ${
    isMainPage ? "min-h-[100dvh] flex flex-col main-content-homepage tablet-landscape:h-[100dvh] tablet-landscape:overflow-hidden desktop:h-[100dvh] desktop:overflow-hidden" : ""
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
      <div className="flex-grow flex flex-col justify-end pt-2 desktop:pt-3 pb-[env(safe-area-inset-bottom)]">
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

      {/* Wrapper z flexbox - order zmienia kolejność na różnych breakpointach */}
      <div className="flex flex-col">
        {/* Children: na mobile order-1 (na górze), na desktop order-2 (pod kartami) */}
        <div className="order-1 tablet-landscape:order-2 desktop:order-2 tablet-landscape:mt-4 desktop:mt-6">
          <PageTransition>{children}</PageTransition>
        </div>

        {/* Karty: na mobile order-2 (na dole), na desktop order-1 (na górze) */}
        {isValidRoute && (
          <div className={`order-2 tablet-landscape:order-1 desktop:order-1 ${isSubpage ? "hidden tablet-landscape:block desktop:block" : ""}`}>
            <StaticCards />
          </div>
        )}
      </div>

      <ConditionalFooter isValidRoute={isValidRoute} />
    </MainContent>
  );
};
