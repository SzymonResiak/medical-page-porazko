"use client";

import Link from "next/link";
import Image from "next/image";
import { IconCircle } from "./IconCircle";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";
import { BackIcon } from "./icons/BackIcon";
import { Button } from "./Button";
import { ReactNode } from "react";

interface SpecialistCardProps {
  imageSrc: string;
  imageAlt: string;
  icon: ReactNode;
  shortDescription: string;
  title: string;
  name: string;
  description: string;
  link: string;
  showBackButton?: boolean;
  priority?: boolean;
  imagePosition?: "right-top" | "left-bottom" | "center";
}

export const SpecialistCard = ({
  imageSrc,
  imageAlt,
  icon,
  shortDescription,
  title,
  name,
  description,
  link,
  showBackButton = false,
  priority = false,
  imagePosition = "right-top",
}: SpecialistCardProps) => {
  return (
    <div className="group relative w-full h-full">
      <div className="rounded-[16px] tablet:rounded-[20px] p-3 tablet:p-6 tablet-landscape:p-6 desktop:p-8 relative overflow-hidden h-full flex flex-col specialist-card-wrapper">
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
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
        <div className="relative flex flex-col h-full min-h-0">
          {/* Header: icon + tagline */}
          <div className="flex items-center gap-2 tablet:gap-3 mb-1 tablet:mb-3 flex-shrink-0">
            <div className="flex-shrink-0">
              <IconCircle icon={icon} size="2xs" backgroundColor="#FFFFFF" className="tablet:!w-[38px] tablet:!h-[38px]" />
            </div>
            <p className="text-dark-gray text-[11px] tablet:text-sm desktop:text-base leading-tight line-clamp-2">
              {shortDescription}
            </p>
          </div>

          {/* Content */}
          <div className="flex-grow min-h-0 flex flex-col justify-center">
            <h2 className="text-xl tablet:text-2xl tablet-landscape:text-3xl desktop:text-4xl font-bold text-dark-gray">
              {title}
            </h2>
            <h3 className="text-base tablet:text-lg tablet-landscape:text-xl desktop:text-2xl text-dark-gray">
              {name}
            </h3>
            <p className="hidden tablet:block mt-2 text-dark-gray text-sm desktop:text-base leading-relaxed max-w-[65%]">
              {description}
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-end mt-auto pt-2 flex-shrink-0">
            {showBackButton ? (
              <Link href="/">
                <Button rightIcon={<BackIcon />} />
              </Link>
            ) : (
              <Link href={link}>
                <Button rightIcon={<ArrowRightIcon />}>
                  dowiedz się więcej
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
