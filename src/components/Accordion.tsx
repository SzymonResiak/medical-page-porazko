"use client";

import { useState } from "react";
import { IconCircle } from "./IconCircle";
import { TopIcon } from "./icons/TopIcon";
import { DownIcon } from "./icons/DownIcon";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface AccordionProps {
  header: string;
  children: React.ReactNode;
  isOpen?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export const Accordion = ({
  header,
  children,
  icon,
  isOpen = false,
  className = "",
}: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);
  const isMobile = useMediaQuery(700);

  return (
    <div className={`w-full rounded-[20] bg-[#EAEAEA] ${className}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between p-2.5 tablet:p-5 text-left"
        aria-expanded={isExpanded}
      >
        {icon && <IconCircle icon={icon} size={isMobile ? "2xs" : "lg"} />}
        <h3 className="text-sm tablet:text-3xl font-normal text-[#2E2E2E] flex-1 mx-2 tablet:mx-5">
          {header}
        </h3>
        <IconCircle
          icon={isExpanded ? <TopIcon /> : <DownIcon />}
          backgroundColor={isExpanded ? "#2E2E2E" : "#FFFFFF"}
          size={isMobile ? "2xs" : "sm"}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isExpanded ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-2 tablet:p-5 bg-white border border-[#EAEAEA] rounded-b-[20] text-[#2E2E2E]">
          {children}
        </div>
      </div>
    </div>
  );
};
