import { BackIcon } from "@/components/icons/BackIcon";
import { KidneysIcon } from "@/components/icons/KidneysIcon";
import { SpecialistCard } from "@/components/SpecialistCard";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";

export const Cards = () => {
  return (
    <div className="grid gap-5 flex justify-center mb-8">
      <div className="grid gap-5 desktop-2:gap-12 grid-cols-1 desktop-2:grid-cols-2 mx-auto">
        <div className="group relative max-w-md desktop:max-w-full h-full">
          <div className="rounded-[20] p-4 tablet:p-5 desktop:p-17 relative overflow-hidden h-full min-h-[400px]">
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

        <SpecialistCard
          imageSrc="/images/medicine-bg.png"
          imageAlt="Medicine background"
          icon={<KidneysIcon />}
          shortDescription="Diagnostyka i leczenie chorób wewnętrznych, z naciskiem na choroby nerek."
          title="Internista, nefrolog"
          name="Tomasz Porażko"
          description="Badanie USG jamy brzusznej obejmujące nerki, drogi moczowe, płuca, naczynia oraz przetoki i grafty do hemodializ."
          link="/internist"
        />
      </div>
    </div>
  );
};
