import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { IconCircle } from "./IconCircle";

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
    <div className="w-full rounded-[20px] bg-light-gray p-3">
      <div className="flex items-center gap-3">
        {/* Photo */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="40px"
            priority
          />
        </div>

        {/* Icon */}
        <div className="flex-shrink-0">
          <IconCircle icon={icon} size="2xs" backgroundColor="#FFFFFF" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="text-dark-gray font-bold text-sm truncate">
            {title} · {name}
          </p>
        </div>

        {/* Back button */}
        <Link
          href="/"
          className="flex-shrink-0 bg-dark-gray hover:bg-accent text-off-white rounded-full px-3 py-1.5 text-xs transition-colors duration-300"
        >
          ← Wróć
        </Link>
      </div>
    </div>
  );
};
