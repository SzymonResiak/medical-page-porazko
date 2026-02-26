"use client";

import { usePathname } from "next/navigation";
import { DentistCard } from "@/components/DentistCard";
import { InternistCard } from "@/components/InternistCard";
import { SpecialistHeroCard } from "@/components/SpecialistHeroCard";
import { Animation } from "@/components/Animation";
import { ToothIcon } from "@/components/icons/ToothIcon";
import { KidneysIcon } from "@/components/icons/KidneysIcon";

const DentistSubpage = () => (
  <div className="w-full">
    <div className="tablet-landscape:hidden desktop:hidden">
      <SpecialistHeroCard
        imageSrc="/images/toothbrush-bg.png"
        imageAlt="Stomatolog"
        icon={<ToothIcon />}
        shortDescription="Stomatologia dla całej Twojej rodziny – pełen zakres usług."
        title="Stomatolog"
        name="Justyna Porażko"
        description="Dla każdego pacjenta przygotowywany jest indywidualny plan leczenia w oparciu o badanie kliniczne oraz badania obrazowe."
      />
    </div>
    <div className="hidden tablet-landscape:block desktop:block">
      <div className="w-full min-h-[540px] overflow-hidden">
        <DentistCard priority={true} showBackButton />
      </div>
    </div>
    <Animation className="mt-3 desktop:mt-4" />
  </div>
);

const InternistSubpage = () => (
  <div className="w-full">
    <div className="tablet-landscape:hidden desktop:hidden">
      <SpecialistHeroCard
        imageSrc="/images/medicine-bg.png"
        imageAlt="Internista, nefrolog"
        icon={<KidneysIcon />}
        shortDescription="Diagnostyka i leczenie chorób wewnętrznych, z naciskiem na choroby nerek."
        title="Internista, nefrolog"
        name="Tomasz Porażko"
        description="Badanie USG jamy brzusznej obejmujące nerki, drogi moczowe, płuca, naczynia oraz przetoki i grafty do hemodializ."
        imagePosition="left-bottom"
      />
    </div>
    <div className="hidden tablet-landscape:block desktop:block">
      <div className="w-full min-h-[540px] overflow-hidden">
        <InternistCard showBackButton />
      </div>
    </div>
    <Animation className="mt-3 desktop:mt-4" />
  </div>
);

export const StaticCards = () => {
  const pathname = usePathname();

  if (pathname === "/dentist") return <DentistSubpage />;
  if (pathname === "/internist") return <InternistSubpage />;

  // Main page: two cards side by side
  return (
    <div className="w-full flex-grow tablet-landscape:flex-grow-0 desktop:flex-grow-0 flex-shrink-0 min-h-0">
      <div className="grid gap-3 tablet-landscape:gap-4 desktop:gap-4 desktop-lg:gap-6 grid-cols-1 tablet-landscape:grid-cols-2 desktop:grid-cols-2 w-full tablet-landscape:min-h-[540px] desktop:min-h-[540px] overflow-hidden">
        <div className="w-full h-[35vh] phone-landscape:h-[40vh] tablet-landscape:min-h-[540px] desktop:min-h-[540px] min-h-[540px] overflow-hidden">
          <DentistCard priority={true} />
        </div>
        <div className="w-full h-[35vh] phone-landscape:h-[40vh] tablet-landscape:min-h-[540px] desktop:min-h-[540px] min-h-[540px] overflow-hidden">
          <InternistCard />
        </div>
      </div>
    </div>
  );
};
