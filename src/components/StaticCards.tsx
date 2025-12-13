"use client";

import { usePathname } from "next/navigation";
import { DentistCard } from "@/components/DentistCard";
import { InternistCard } from "@/components/InternistCard";
import { ImageCard } from "@/components/ImageCard";
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
    return <InternistCard showBackButton={isInternist} priority={!isMainPage} />;
  };

  const isSubpage = isDentist || isInternist;

  return (
    <div className="w-full flex-grow tablet-landscape:flex-grow-0 desktop:flex-grow-0 flex-shrink-0 min-h-0">
      <div className="grid gap-3 tablet-landscape:gap-4 desktop:gap-4 desktop-lg:gap-6 grid-cols-1 tablet-landscape:grid-cols-2 desktop:grid-cols-2 w-full tablet-landscape:h-[55vh] desktop:h-[60vh]">
        <div className="w-full h-[35vh] phone-landscape:h-[40vh] tablet-landscape:h-full desktop:h-full min-h-[180px] phone-landscape:min-h-[120px]">
          {renderLeftCard()}
        </div>
        <div className="w-full h-[35vh] phone-landscape:h-[40vh] tablet-landscape:h-full desktop:h-full min-h-[180px] phone-landscape:min-h-[120px]">
          {renderRightCard()}
        </div>
      </div>
      {isSubpage && <Animation className="mt-3 desktop:mt-4" />}
    </div>
  );
};
