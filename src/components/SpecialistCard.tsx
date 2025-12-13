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
}: SpecialistCardProps) => {
  return (
    <div className="group relative w-full h-full">
      <div className="rounded-[20px] p-4 tablet:p-5 desktop:p-6 desktop-lg:p-10 relative overflow-hidden h-full flex flex-col">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-right-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
        <div className="relative flex flex-col h-full min-h-0">
          {/* Header z ikonką - zawsze widoczny, stała wysokość */}
          <div className="flex items-center gap-2 tablet:gap-3 mb-2 tablet:mb-3 desktop:mb-4 flex-shrink-0">
            <div className="hidden tablet:block flex-shrink-0">
              <IconCircle icon={icon} size="md" />
            </div>
            <div className="block tablet:hidden flex-shrink-0">
              <IconCircle icon={icon} size="xs" />
            </div>
            <p className="text-dark-gray text-xs tablet:text-sm desktop:text-sm desktop-lg:text-base line-clamp-2">
              {shortDescription}
            </p>
          </div>

          {/* Content - rozciąga się */}
          <div className="flex-grow min-h-0 overflow-hidden">
            <h2 className="text-xl tablet:text-2xl font-bold text-dark-gray desktop:text-3xl desktop-lg:text-4xl">
              {title}
            </h2>
            <h3 className="text-lg tablet:text-xl text-dark-gray desktop:text-2xl desktop-lg:text-3xl">{name}</h3>
            <p className="mt-1 text-dark-gray text-xs tablet:text-sm desktop:text-sm desktop-lg:text-base line-clamp-3">
              {description}
            </p>
          </div>

          {/* Button - zawsze na dole */}
          <div className="flex justify-end mt-auto pt-2 tablet:pt-3 desktop:pt-4 flex-shrink-0">
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
