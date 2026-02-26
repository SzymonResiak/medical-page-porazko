"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { DentistCard } from "@/components/DentistCard";
import { InternistCard } from "@/components/InternistCard";
import { SpecialistHeroCard } from "@/components/SpecialistHeroCard";
import { Animation } from "@/components/Animation";
import { ToothIcon } from "@/components/icons/ToothIcon";
import { KidneysIcon } from "@/components/icons/KidneysIcon";

const HERO_DATA = {
  dentist: {
    imageSrc: "/images/toothbrush-bg.png",
    imageAlt: "Stomatolog",
    icon: <ToothIcon />,
    shortDescription: "Stomatologia dla całej Twojej rodziny – pełen zakres usług.",
    title: "Stomatolog",
    name: "Justyna Porażko",
    description: "Dla każdego pacjenta przygotowywany jest indywidualny plan leczenia w oparciu o badanie kliniczne oraz badania obrazowe.",
  },
  internist: {
    imageSrc: "/images/medicine-bg.png",
    imageAlt: "Internista, nefrolog",
    icon: <KidneysIcon />,
    shortDescription: "Diagnostyka i leczenie chorób wewnętrznych, z naciskiem na choroby nerek.",
    title: "Internista, nefrolog",
    name: "Tomasz Porażko",
    description: "Badanie USG jamy brzusznej obejmujące nerki, drogi moczowe, płuca, naczynia oraz przetoki i grafty do hemodializ.",
    imagePosition: "left-bottom" as const,
  },
};

const cardEntrance = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
};

const cardExit = {
  exit: { opacity: 0, y: -20, transition: { duration: 0.25 } },
};

export const StaticCards = () => {
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  const isDentist = pathname === "/dentist";
  const isInternist = pathname === "/internist";
  const isSubpage = isDentist || isInternist;

  return (
    <div className={`w-full ${isMainPage ? "flex-grow tablet-landscape:flex-grow-0 desktop:flex-grow-0 flex-shrink-0 min-h-0" : ""}`}>
      <AnimatePresence mode="popLayout">
        {isMainPage && (
          <motion.div
            key="landing-cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.3 } }}
            className="grid gap-3 tablet-landscape:gap-4 desktop:gap-4 desktop-lg:gap-6 grid-cols-1 tablet-landscape:grid-cols-2 desktop:grid-cols-2 w-full tablet-landscape:min-h-[540px] desktop:min-h-[540px] overflow-hidden"
          >
            <div className="w-full h-[35vh] phone-landscape:h-[40vh] tablet-landscape:min-h-[540px] desktop:min-h-[540px] min-h-[540px] overflow-hidden">
              <DentistCard priority />
            </div>
            <div className="w-full h-[35vh] phone-landscape:h-[40vh] tablet-landscape:min-h-[540px] desktop:min-h-[540px] min-h-[540px] overflow-hidden">
              <InternistCard />
            </div>
          </motion.div>
        )}

        {isDentist && (
          <motion.div key="dentist-hero" {...cardEntrance} {...cardExit}>
            <div className="tablet-landscape:hidden desktop:hidden">
              <SpecialistHeroCard {...HERO_DATA.dentist} />
            </div>
            <div className="hidden tablet-landscape:block desktop:block min-h-[540px]">
              <DentistCard priority showBackButton />
            </div>
          </motion.div>
        )}

        {isInternist && (
          <motion.div key="internist-hero" {...cardEntrance} {...cardExit}>
            <div className="tablet-landscape:hidden desktop:hidden">
              <SpecialistHeroCard {...HERO_DATA.internist} />
            </div>
            <div className="hidden tablet-landscape:block desktop:block min-h-[540px]">
              <InternistCard showBackButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isSubpage && <Animation className="mt-3 desktop:mt-4" />}
    </div>
  );
};
