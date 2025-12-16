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

const MainContent = ({
  children,
  isMainPage,
}: {
  children: React.ReactNode;
  isMainPage: boolean;
}) => (
  <div
    className={`px-2 desktop-lg:px-20 min-h-[100dvh] ${
      !isMainPage ? "py-2 desktop-lg:py-25" : ""
    }`}
  >
    {children}
  </div>
);

const ConditionalFooter = ({ isValidRoute }: { isValidRoute: boolean }) => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

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
      <div className="flex-grow flex flex-col pt-2 desktop:mt-[1.875rem] pb-[env(safe-area-inset-bottom)]">
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

  useEffect(() => {
    requestAnimationFrame(() => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      const isTabletLandscape = window.matchMedia(
        "(min-width: 700px) and (orientation: landscape) and (min-height: 500px)"
      ).matches;
      const areCardsVisible = isDesktop || isTabletLandscape;

      if (isSubpage && !areCardsVisible) {
        const contentElement = document.getElementById("page-content");
        if (contentElement) {
          contentElement.scrollIntoView({ behavior: "instant" });
        }
      } else {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    });
  }, [pathname, isSubpage]);

  return (
    <MainContent isMainPage={isMainPage}>
      {isSubpage && <FloatingIsland />}

      <div className="flex flex-col">
        {isValidRoute && (
          <div
            className={`${
              isSubpage ? "hidden tablet-landscape:block desktop:block" : ""
            }`}
          >
            <StaticCards />
          </div>
        )}
        <div
          id="page-content"
          className={`${isSubpage ? "tablet-landscape:mt-4 desktop:mt-6" : ""}`}
        >
          <PageTransition>{children}</PageTransition>
        </div>
      </div>

      <ConditionalFooter isValidRoute={isValidRoute} />
    </MainContent>
  );
};
