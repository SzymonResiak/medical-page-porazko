"use client";

import { useState } from "react";
import { IconCircle } from "./IconCircle";
import { TopIcon } from "./icons/TopIcon";
import { DownIcon } from "./icons/DownIcon";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface AccordionProps {
  header: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}

export const Accordion = ({
  header,
  children,
  icon,
  className = "",
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery(700);

  return (
    <div className={`w-full rounded-lg bg-[#EAEAEA]  ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-2.5 tablet:p-5 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 tablet:gap-5">
          <IconCircle icon={icon} size={isMobile ? "2xs" : "lg"} />
          <h3 className="text-sm tablet:text-3xl font-normal text-gray-900">
            {header}
          </h3>
        </div>
        <IconCircle
          icon={isOpen ? <TopIcon /> : <DownIcon />}
          backgroundColor={isOpen ? "#2E2E2E" : "#FFFFFF"}
          size={isMobile ? "2xs" : "sm"}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-2 tablet:p-4 text-gray-600 bg-white">{children}</div>
      </div>
    </div>
  );
};
