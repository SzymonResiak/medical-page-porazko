import { KidneysIcon } from "@/components/icons/KidneysIcon";
import { SpecialistCard } from "@/components/SpecialistCard";

export const InternistCard = ({
  showBackButton = false,
  priority = false,
}: {
  showBackButton?: boolean;
  priority?: boolean;
}) => {
  return (
    <SpecialistCard
      imageSrc="/images/medicine-bg.png"
      imageAlt="Medicine background"
      icon={<KidneysIcon />}
      shortDescription="Diagnostyka i leczenie chorób wewnętrznych, z naciskiem na choroby nerek."
      title="Internista, nefrolog"
      name="Tomasz Porażko"
      description="Badanie USG jamy brzusznej obejmujące nerki, drogi moczowe, płuca, naczynia oraz przetoki i grafty do hemodializ."
      link="/internist"
      showBackButton={showBackButton}
      priority={priority}
    />
  );
};
