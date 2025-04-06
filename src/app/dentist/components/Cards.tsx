import { Button } from "@/components/Button";
import { BackIcon } from "@/components/icons/BackIcon";
import { ToothIcon } from "@/components/icons/ToothIcon";
import { SpecialistCard } from "@/components/SpecialistCard";
import Image from "next/image";
import Link from "next/link";

export const Cards = () => {
  return (
    <div className="grid gap-5 flex justify-center mb-8">
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

        <div className="group relative max-w-md desktop:max-w-full h-full">
          <div className="rounded-[20] p-4 tablet:p-5 desktop:p-17 relative overflow-hidden h-full min-h-[400px]">
            <Image
              src="/images/dentist.png"
              alt="Medical services"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute bottom-4 right-4">
              <Link href="/">
                <Button rightIcon={<BackIcon />}></Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
