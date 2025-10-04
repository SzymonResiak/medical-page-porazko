import { DentistCard } from "@/components/DentistCard";
import { ImageCard } from "@/components/ImageCard";

export const Cards = () => {
  return (
    <div className="grid gap-5 flex justify-center mb-8">
      <div className="grid gap-5 desktop-2:gap-12 grid-cols-1 desktop-2:grid-cols-2 mx-auto">
        <DentistCard showBackButton={true} priority={true} />
        <ImageCard />
      </div>
    </div>
  );
};
