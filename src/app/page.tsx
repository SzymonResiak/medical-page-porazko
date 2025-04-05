import { ToothIcon } from "@/components/icons/ToothIcon";
import { KidneysIcon } from "@/components/icons/KidneysIcon";
import { SpecialistCard } from "@/components/SpecialistCard";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-xl tablet:text-4xl desktop:text-[3.5rem] font-bold text-center p-3 mb-4 tablet:mb-12 text-[#2E2E2E]">
        Jakiego wsparcia zdrowotnego potrzebujesz?
      </h1>

      <div className="grid gap-5 flex justify-center">
        <div className="grid gap-5 grid-cols-1 desktop-2:grid-cols-2 mx-auto">
          <SpecialistCard
            imageSrc="/images/toothbrush-bg.png"
            imageAlt="Toothbrush background"
            icon={<ToothIcon />}
            shortDescription="Stomatologia dla całej Twojej rodziny pełen zakres usług."
            title="Stomatolog"
            name="Justyna Porażko"
            description="Dla każdego pacjenta przygotowywany jest indywidualny plan leczenia w oparciu o badanie kliniczne oraz badania obrazowe."
            link="/dentist"
          />

          <SpecialistCard
            imageSrc="/images/medicine-bg.png"
            imageAlt="Medicine background"
            icon={<KidneysIcon />}
            shortDescription="Diagnostyka i leczenie chorób wewnętrznych, z naciskiem na choroby nerek."
            title="Internista, nefrolog"
            name="Tomasz Porażko"
            description="Badanie USG jamy brzusznej obejmujące nerki, drogi moczowe, płuca, naczynia oraz przetoki i grafty do hemodializ."
            link="/dentist"
          />
        </div>
      </div>
    </div>
  );
}
