import { ToothIcon } from "@/components/icons/ToothIcon";
import { KidneysIcon } from "@/components/icons/KidneysIcon";
import { SpecialistCard } from "@/components/SpecialistCard";

export const SpecialistCards = () => {
  return (
    <div className="grid gap-5 desktop-2:gap-12 grid-cols-1 desktop-2:grid-cols-2 mx-auto">
      <SpecialistCard
        imageSrc="/images/toothbrush-bg.png"
        imageAlt="Toothbrush background"
        icon={<ToothIcon />}
        shortDescription="Stomatologia dla całej Twojej rodziny pełen zakres usług."
        title="Stomatolog"
        name="Justyna Porażko"
        description="Dla każdego pacjenta przygotowywany jest indywidualny plan leczenia w oparciu o badanie kliniczne oraz badania obrazowe."
        link="/dentist"
        priority={true}
      />

      <SpecialistCard
        imageSrc="/images/medicine-bg.png"
        imageAlt="Medicine background"
        icon={<KidneysIcon />}
        shortDescription="Diagnostyka i leczenie chorób wewnętrznych, z naciskiem na choroby nerek."
        title="Internista, nefrolog"
        name="Tomasz Porażko"
        description="Badanie USG jamy brzusznej obejmujące nerki, drogi moczowe, płuca, naczynia oraz przetoki i grafty do hemodializ."
        link="/internist"
        priority={false}
      />
    </div>
  );
};
