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
    <div className="w-full h-full min-h-[400px] desktop-lg:min-h-[700px]">
      <div className="rounded-[20px] p-4 tablet:p-6 desktop-lg:p-[4.375rem] relative overflow-hidden h-full flex flex-col">
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
          <div className="flex items-center gap-2 tablet:gap-3 tablet-landscape:gap-[1vh] mb-1 tablet:mb-2 tablet-landscape:mb-[2vh] flex-shrink-0">
            <div
              className="hidden tablet:flex items-center justify-center rounded-full bg-white flex-shrink-0 aspect-square w-14 h-14 tablet-landscape:w-auto tablet-landscape:h-auto"
              style={{
                height: "clamp(2.5rem, 5vh, 8rem)",
                width: "clamp(2.5rem, 5vh, 8rem)",
              }}
            >
              <div
                className="[&_svg]:w-full [&_svg]:h-full"
                style={{ width: "50%", height: "50%" }}
              >
                {icon}
              </div>
            </div>
            <div className="block tablet:hidden flex-shrink-0">
              <IconCircle icon={icon} size="xs" />
            </div>
            <p className="body-medium-regular">{shortDescription}</p>
          </div>

          <div className="flex-grow min-h-0 overflow-hidden tablet-landscape:h-[40%] desktop:h-[40%] flex flex-col justify-center pb-1">
            <h2 className="heading-h2-bold">{title}</h2>
            <h3 className="heading-h3-regular">{name}</h3>
            <p className="body-medium-regular">{description}</p>
          </div>

          <div className="flex justify-end mt-auto pt-2 tablet:pt-[0.5vh] flex-shrink-0">
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
