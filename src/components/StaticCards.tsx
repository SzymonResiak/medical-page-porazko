"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
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

const transition = { duration: 0.5, ease: [0.4, 0, 0.2, 1] };
const exitAnim = { opacity: 0, scale: 0.95, transition: { duration: 0.3 } };

export const StaticCards = () => {
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  const isDentist = pathname === "/dentist";
  const isInternist = pathname === "/internist";

  const showDentist = isMainPage || isDentist;
  const showInternist = isMainPage || isInternist;
  const isSubpage = isDentist || isInternist;

  return (
    <LayoutGroup>
      <div className={`w-full ${isMainPage ? "flex-grow tablet-landscape:flex-grow-0 desktop:flex-grow-0 flex-shrink-0 min-h-0" : ""}`}>
        <div className={
          isMainPage
            ? "grid gap-3 tablet-landscape:gap-4 desktop:gap-4 desktop-lg:gap-6 grid-cols-1 tablet-landscape:grid-cols-2 desktop:grid-cols-2 w-full tablet-landscape:min-h-[540px] desktop:min-h-[540px] overflow-hidden"
            : "w-full"
        }>
          <AnimatePresence mode="popLayout">
            {showDentist && (
              <motion.div
                key="dentist"
                layoutId="card-dentist"
                transition={transition}
                exit={exitAnim}
                className={
                  isMainPage
                    ? "w-full h-[35vh] phone-landscape:h-[40vh] tablet-landscape:min-h-[540px] desktop:min-h-[540px] min-h-[540px] overflow-hidden"
                    : "w-full"
                }
              >
                {isDentist ? (
                  <>
                    <div className="tablet-landscape:hidden desktop:hidden">
                      <SpecialistHeroCard {...HERO_DATA.dentist} />
                    </div>
                    <div className="hidden tablet-landscape:block desktop:block min-h-[540px]">
                      <DentistCard priority showBackButton />
                    </div>
                  </>
                ) : (
                  <DentistCard priority />
                )}
              </motion.div>
            )}

            {showInternist && (
              <motion.div
                key="internist"
                layoutId="card-internist"
                transition={transition}
                exit={exitAnim}
                className={
                  isMainPage
                    ? "w-full h-[35vh] phone-landscape:h-[40vh] tablet-landscape:min-h-[540px] desktop:min-h-[540px] min-h-[540px] overflow-hidden"
                    : "w-full"
                }
              >
                {isInternist ? (
                  <>
                    <div className="tablet-landscape:hidden desktop:hidden">
                      <SpecialistHeroCard {...HERO_DATA.internist} />
                    </div>
                    <div className="hidden tablet-landscape:block desktop:block min-h-[540px]">
                      <InternistCard showBackButton />
                    </div>
                  </>
                ) : (
                  <InternistCard />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {isSubpage && <Animation className="mt-3 desktop:mt-4" />}
      </div>
    </LayoutGroup>
  );
};
