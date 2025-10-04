import { ImageCard } from "@/components/ImageCard";
import { InternistCard } from "@/components/InternistCard";

export const Cards = () => {
  return (
    <div className="grid gap-5 flex justify-center mb-8">
      <div className="grid gap-5 desktop-2:gap-12 grid-cols-1 desktop-2:grid-cols-2 mx-auto">
        <ImageCard />
        <InternistCard showBackButton={true} priority={true} />
      </div>
    </div>
  );
};
