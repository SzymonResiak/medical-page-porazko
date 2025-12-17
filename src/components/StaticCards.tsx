"use client";

import { usePathname } from "next/navigation";
import { DentistCard } from "@/components/DentistCard";
import { InternistCard } from "@/components/InternistCard";
import { AboutCard } from "@/components/AboutCard";
import { Animation } from "@/components/Animation";

export const StaticCards = () => {
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  const isDentist = pathname === "/dentist";
  const isInternist = pathname === "/internist";

  const renderLeftCard = () => {
    if (isInternist) {
      return <AboutCard variant="internist" />;
    }
    return <DentistCard showBackButton={isDentist} priority={true} />;
  };

  const renderRightCard = () => {
    if (isDentist) {
      return <AboutCard variant="dentist" />;
    }
    return (
      <InternistCard showBackButton={isInternist} priority={!isMainPage} />
    );
  };

  const isSubpage = isDentist || isInternist;

  return (
    <>
      {isMainPage && (
        <div className="p-3 flex items-center justify-center mb-4 tablet-landscape:mb-6 desktop-lg:mb-[1.875rem]">
          <h1 className="text-lg desktop:text-[3.4375rem] font-bold">
            Jakiego wsparcia zdrowotnego potrzebujesz?
          </h1>
        </div>
      )}
      <div className="grid gap-3 desktop-lg:gap-4 desktop-lg:gap-6 grid-cols-1 tablet-landscape:grid-cols-2 desktop-lg:grid-cols-2 w-full overflow-hidden">
        <div>{renderLeftCard()}</div>
        <div>{renderRightCard()}</div>
      </div>
      {isSubpage && <Animation className="my-3 desktop-lg:my-12" />}
    </>
  );
};
