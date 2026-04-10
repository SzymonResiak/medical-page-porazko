"use client";

import { useEffect } from "react";
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

const VALID_ROUTES = ["/", "/dentist", "/internist"];

const Copyright = ({ className = "" }: { className?: string }) => (
  <p className={`text-[length:var(--fs-h4)] text-dark-gray ${className}`}>
    © 2026 SPLIN – Wszelkie prawa zastrzeżone.
  </p>
);

const MainContent = ({ children, isMainPage }: { children: React.ReactNode; isMainPage: boolean }) => (
  <div className={`bg-off-white ${
    isMainPage ? "h-[100dvh] overflow-hidden" : ""
  }`}>
    <div className={`max-w-[1600px] mx-auto p-5 tablet-landscape:p-4 desktop:px-6 desktop:pt-[100px] desktop:pb-6 desktop-lg:px-12 desktop-lg:pt-[100px] desktop-lg:pb-8 desktop-3:px-16 desktop-3:pt-[100px] desktop-3:pb-10 desktop-4k:pt-[100px] desktop-4k:pb-12 pb-[calc(2.5rem+env(safe-area-inset-bottom))] ${
      isMainPage ? "h-full flex flex-col main-content-homepage" : ""
    }`}>
      {children}
    </div>
  </div>
);

const ConditionalFooter = ({ isValidRoute }: { isValidRoute: boolean }) => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  // Dla stron 404/błędów nie pokazujemy footera
  if (!isValidRoute) {
    return (
      <div className="mt-auto pt-3 flex-shrink-0">
        <Copyright className="text-center mt-1" />
      </div>
    );
  }

  if (isMainPage) {
    return (
      <div className="flex-shrink-0 pt-2 desktop:pt-3 desktop-3:pt-5 desktop-4k:pt-6 pb-[env(safe-area-inset-bottom)]">
        <FooterLandingPage />
        <Copyright className="text-right text-xs tablet:text-sm mt-1" />
      </div>
    );
  }

  return (
    <ScrollAnimation>
      <Footer />
      <Copyright className="text-right mt-[50px] mb-[50px]" />
    </ScrollAnimation>
  );
};

export const ClientLayout = ({ children }: ClientLayoutProps) => {
  const pathname = usePathname();
  const isValidRoute = VALID_ROUTES.includes(pathname);
  const isMainPage = pathname === "/";
  const isSubpage = pathname === "/dentist" || pathname === "/internist";

  useEffect(() => {
    requestAnimationFrame(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }, [pathname]);

  return (
    <MainContent isMainPage={isMainPage}>
      {/* FloatingIsland - na podstronach: mobile + tablet portrait */}
      {isSubpage && <FloatingIsland />}

      {/* Wrapper z flexbox - order zmienia kolejność na różnych breakpointach */}
      <div className={`flex flex-col ${isMainPage ? "flex-grow min-h-0" : ""}`}>
        {/* Karty: zawsze na górze na subpages, na homepage: mobile=dół, desktop=góra */}
        {isValidRoute && (
          <div className={`${isSubpage ? "order-1" : "order-2 tablet:order-1"} ${isMainPage ? "flex-grow min-h-0 flex flex-col" : ""}`}>
            <StaticCards />
          </div>
        )}

        {/* Children: na subpages zawsze pod kafelkiem */}
        <div id="page-content" className={`${isSubpage ? "order-2" : "order-1 tablet:order-2 tablet:mt-3 desktop:mt-4"}`}>
          <PageTransition>{children}</PageTransition>
        </div>
      </div>

      <ConditionalFooter isValidRoute={isValidRoute} />
    </MainContent>
  );
};
