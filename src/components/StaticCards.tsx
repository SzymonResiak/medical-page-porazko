"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { DentistCard } from "@/components/DentistCard";
import { InternistCard } from "@/components/InternistCard";
import { SpecialistHeroCard } from "@/components/SpecialistHeroCard";
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
    imagePosition: "top" as const,
  },
};

const cardEntrance = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.15 },
};

const cardExit = {
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.25 } },
};

export const StaticCards = () => {
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  const isDentist = pathname === "/dentist";
  const isInternist = pathname === "/internist";
  const isSubpage = isDentist || isInternist;

  return (
    <div className={`w-full ${isMainPage ? "flex-grow flex-shrink min-h-0 flex flex-col" : ""}`}>
      <AnimatePresence mode="popLayout">
        {isMainPage && (
          <motion.div
            key="landing-cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.25 } }}
            className="grid grid-rows-2 tablet:grid-rows-1 tablet:grid-cols-2 gap-2 tablet:gap-3 tablet-landscape:gap-4 desktop-lg:gap-6 desktop-3:gap-8 desktop-4k:gap-12 w-full flex-grow min-h-0 tablet:max-h-[55vh]"
          >
            <div className="w-full min-h-0 tablet:min-h-[300px] overflow-hidden">
              <DentistCard priority />
            </div>
            <div className="w-full min-h-0 tablet:min-h-[300px] overflow-hidden">
              <InternistCard />
            </div>
          </motion.div>
        )}

        {isDentist && (
          <motion.div key="dentist-hero" {...cardEntrance} {...cardExit}>
            <div className="tablet-landscape:hidden desktop:hidden">
              <SpecialistHeroCard {...HERO_DATA.dentist} />
            </div>
            <div className="hidden tablet-landscape:block desktop:block min-h-[300px]">
              <DentistCard priority showBackButton />
            </div>
          </motion.div>
        )}

        {isInternist && (
          <motion.div key="internist-hero" {...cardEntrance} {...cardExit}>
            <div className="tablet-landscape:hidden desktop:hidden">
              <SpecialistHeroCard {...HERO_DATA.internist}  />
            </div>
            <div className="hidden tablet-landscape:block desktop:block min-h-[300px]">
              <InternistCard showBackButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
