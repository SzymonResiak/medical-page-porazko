"use client";

import { usePathname } from "next/navigation";
import { DentistCard } from "@/components/DentistCard";
import { InternistCard } from "@/components/InternistCard";
import { ImageCard } from "@/components/ImageCard";
import { Animation } from "@/components/Animation";

export const StaticCards = () => {
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  const isDentist = pathname === "/dentist";
  const isInternist = pathname === "/internist";

  const renderLeftCard = () => {
    if (isInternist) {
      return <ImageCard imageSrc="/images/toothbrush-bg.png" imageAlt="Stomatologia" />;
    }
    return <DentistCard showBackButton={isDentist} priority={true} />;
  };

  const renderRightCard = () => {
    if (isDentist) {
      return <ImageCard imageSrc="/images/medicine-bg.png" imageAlt="Nefrologia" />;
    }
    return <InternistCard showBackButton={isInternist} priority={!isMainPage} />;
  };

  const isSubpage = isDentist || isInternist;

  return (
    <div className="w-full">
      <div className="grid gap-4 desktop:gap-5 desktop-lg:gap-6 grid-cols-1 desktop:grid-cols-2 w-full auto-rows-fr">
        <div className="w-full h-[260px] tablet:h-[300px] desktop:h-[280px] desktop-lg:h-[340px]">
          {renderLeftCard()}
        </div>
        <div className="w-full h-[260px] tablet:h-[300px] desktop:h-[280px] desktop-lg:h-[340px]">
          {renderRightCard()}
        </div>
      </div>
      {isSubpage && <Animation />}
    </div>
  );
};
