"use client";

import Link from "next/link";
import Image from "next/image";
import { IconCircle } from "./IconCircle";
import { Button } from "./Button";
import { ReactNode } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface SpecialistCardProps {
  imageSrc: string;
  imageAlt: string;
  icon: ReactNode;
  shortDescription: string;
  title: string;
  name: string;
  description: string;
  link: string;
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
}: SpecialistCardProps) => {
  const isMobile = useMediaQuery(700);

  return (
    <div className="group relative max-w-md">
      <div className="rounded-lg p-4 tablet:p-5 relative overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          quality={100}
        />
        <div className="relative">
          <div className="flex items-center gap-2 tablet:gap-4 mb-4 mobile-2:mb-12 mobile-3:mb-19">
            <div>
              <IconCircle icon={icon} size={isMobile ? "xs" : "md"} />
            </div>
            <p className="text-[#2E2E2E] text-xs tablet:text-sm">
              {shortDescription}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2E2E2E]">{title}</h2>
            <h3 className="text-xl text-[#2E2E2E]">{name}</h3>
            <p className="mt-1 tablet:mt-2 text-[#2E2E2E] text-xs tablet:text-base">
              {description}
            </p>
          </div>
          <div className="flex justify-end">
            <Link href={link}>
              <Button className="mt-4 mobile-2:mt-12 mobile-3:mt-19">
                dowiedz się więcej
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
