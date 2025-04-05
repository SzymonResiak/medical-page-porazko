import { Button } from "@/components/Button";
import { BackIcon } from "@/components/icons/BackIcon";
import { ToothIcon } from "@/components/icons/ToothIcon";
import { SpecialistCard } from "@/components/SpecialistCard";
import Image from "next/image";
import Link from "next/link";

export const Cards = () => {
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
      />

      <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
        <Image
          src="/images/dentist.png"
          alt="Medical services"
          className="object-cover"
          fill
          quality={100}
        />
        <div className="absolute bottom-4 right-4">
          <Link href="/">
            <Button rightIcon={<BackIcon />}></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
