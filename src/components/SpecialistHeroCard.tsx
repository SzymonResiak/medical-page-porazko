import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { IconCircle } from "./IconCircle";
import { BackIcon } from "./icons/BackIcon";
import { Button } from "./Button";

interface SpecialistHeroCardProps {
  imageSrc: string;
  imageAlt: string;
  icon: ReactNode;
  shortDescription: string;
  title: string;
  name: string;
  description: string;
  imagePosition?: "right-top" | "left-bottom" | "center";
}

export const SpecialistHeroCard = ({
  imageSrc,
  imageAlt,
  icon,
  shortDescription,
  title,
  name,
  description,
  imagePosition = "right-top",
}: SpecialistHeroCardProps) => {
  return (
    <div className="w-full rounded-[20px] overflow-hidden relative h-[250px] tablet:h-[280px] desktop:h-[300px]">
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className={`object-cover ${
          imagePosition === "left-bottom"
            ? "object-left-bottom"
            : imagePosition === "center"
            ? "object-center"
            : "object-right-top"
        }`}
        sizes="100vw"
        priority
      />

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between p-5 tablet:p-8 desktop:p-10">
        {/* Top: icon + description */}
        <div className="flex items-center gap-3">
          <IconCircle icon={icon} size="xs" backgroundColor="#FFFFFF" />
          <p className="text-dark-gray text-xs tablet:text-sm desktop:text-base">
            {shortDescription}
          </p>
        </div>

        {/* Bottom: title + name + back button */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-dark-gray font-bold text-xl tablet:text-3xl desktop:text-4xl">
              {title}
            </h2>
            <h3 className="text-dark-gray text-base tablet:text-xl desktop:text-2xl">
              {name}
            </h3>
            <p className="mt-1 text-dark-gray text-xs tablet:text-sm desktop:text-base max-w-lg">
              {description}
            </p>
          </div>

          <Link href="/" className="flex-shrink-0 ml-4">
            <Button rightIcon={<BackIcon />} />
          </Link>
        </div>
      </div>
    </div>
  );
};
