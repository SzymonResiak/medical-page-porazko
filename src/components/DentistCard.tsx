import { ToothIcon } from "@/components/icons/ToothIcon";
import { SpecialistCard } from "@/components/SpecialistCard";

interface DentistCardProps {
  priority?: boolean;
}

export const DentistCard = ({ priority = false }: DentistCardProps) => {
  return (
    <SpecialistCard
      imageSrc="/images/toothbrush-bg.png"
      imageAlt="Toothbrush background"
      icon={<ToothIcon />}
      shortDescription="Stomatologia dla całej Twojej rodziny – pełen zakres usług."
      title="Stomatolog"
      name="Justyna Porażko"
      description="Dla każdego pacjenta przygotowywany jest indywidualny plan leczenia w oparciu o badanie kliniczne oraz badania obrazowe."
      link="/dentist"
      priority={priority}
    />
  );
};
