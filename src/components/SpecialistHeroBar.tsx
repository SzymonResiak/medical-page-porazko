import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { IconCircle } from "./IconCircle";
import { BackIcon } from "./icons/BackIcon";

interface SpecialistHeroBarProps {
  imageSrc: string;
  imageAlt: string;
  icon: ReactNode;
  title: string;
  name: string;
}

export const SpecialistHeroBar = ({
  imageSrc,
  imageAlt,
  icon,
  title,
  name,
}: SpecialistHeroBarProps) => {
  return (
    <div className="w-full rounded-[20px] overflow-hidden relative">
      <div className="flex items-center gap-4 tablet:gap-6 p-3 tablet:p-4 desktop:p-5 bg-light-gray relative z-10">
        {/* Photo */}
        <div className="relative w-12 h-12 tablet:w-16 tablet:h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="64px"
            priority
          />
        </div>

        {/* Icon + Info */}
        <div className="hidden tablet:block flex-shrink-0">
          <IconCircle icon={icon} size="xs" backgroundColor="#FFFFFF" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-dark-gray font-bold text-sm tablet:text-lg desktop:text-xl truncate">
            {title}
          </p>
          <p className="text-dark-gray text-xs tablet:text-base desktop:text-lg truncate">
            {name}
          </p>
        </div>

        {/* Back button */}
        <Link href="/" className="flex-shrink-0">
          <div className="flex items-center gap-2 bg-dark-gray hover:bg-accent text-off-white rounded-full px-4 py-2 tablet:px-5 tablet:py-2.5 transition-colors duration-300 cursor-pointer">
            <BackIcon />
            <span className="text-xs tablet:text-sm">Wróć</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
