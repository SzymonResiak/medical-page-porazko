"use client";

import { useState, memo } from "react";
import { IconCircle } from "./IconCircle";
import { TopIcon } from "./icons/TopIcon";
import { DownIcon } from "./icons/DownIcon";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BREAKPOINTS } from "@/data/constants";

interface AccordionProps {
  header: string;
  children: React.ReactNode;
  isOpen?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export const Accordion = memo(function Accordion({
  header,
  children,
  icon,
  isOpen = false,
  className = "",
}: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(isOpen);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery(BREAKPOINTS.TABLET - 1);

  return (
    <div className={`w-full rounded-[20px] bg-light-gray ${className}`}>
      <button
        onClick={() => setIsExpanded((v) => !v)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex w-full items-center justify-between p-2.5 tablet:p-5 text-left cursor-pointer"
        aria-expanded={isExpanded}
      >
        {icon && <IconCircle icon={icon} size={isMobile ? "2xs" : "lg"} />}
        <h3 className="heading-h5-regular flex-1">{header}</h3>
        <IconCircle
          icon={isExpanded ? <TopIcon /> : <DownIcon />}
          backgroundColor={
            isHovered ? "#2E2E2E" : isExpanded ? "#2E2E2E" : "#FFFFFF"
          }
          size={isMobile ? "2xs" : "sm"}
        />
      </button>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-2 tablet:p-5 bg-white border border-light-gray rounded-b-[20px] text-dark-gray">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
});
