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
  imagePosition?: "right-top" | "left-bottom" | "center" | "top";
  mobileImageClassName?: string;
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
  mobileImageClassName,
}: SpecialistHeroCardProps) => {
  return (
    <div className="w-full rounded-[30px] overflow-hidden relative h-[360px] tablet:h-[280px] desktop:h-[560px]">
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className={`object-cover ${
          imagePosition === "left-bottom"
            ? "tablet:object-left-bottom"
            : imagePosition === "center"
            ? "object-center"
            : imagePosition === "top"
            ? "object-top"
            : "object-right-top"
        } ${mobileImageClassName ?? "object-left-bottom"}`}
        sizes="100vw"
        priority
      />

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between pt-5 px-5 pb-[30px] tablet:p-8 desktop:p-10">
        {/* Top: icon + description */}
        <div className="flex items-center gap-[10px]">
          <IconCircle icon={icon} size="xs" backgroundColor="#FFFFFF" />
          <p className="text-dark-gray text-[length:var(--fs-h5)] desktop:text-[length:var(--fs-h4)] leading-[150%]">
            {shortDescription}
          </p>
        </div>

        {/* Bottom: title + name + description + back button */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-dark-gray font-bold text-[length:var(--fs-h1)] leading-[150%]">
              {title}
            </h2>
            <h3 className="text-dark-gray text-[length:var(--fs-h2)] leading-[150%]">
              {name}
            </h3>
            <p className="mt-5 tablet:mt-1 text-dark-gray text-[length:var(--fs-h4)] tablet:text-sm desktop:text-[length:var(--fs-h3)] desktop:leading-[34px] max-w-lg">
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
