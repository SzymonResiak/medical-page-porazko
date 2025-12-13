"use client";

import { useState, memo, useCallback } from "react";
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
  const isMobile = useMediaQuery(BREAKPOINTS.TABLET - 1);

  const handleToggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <div className={`w-full rounded-[20px] bg-light-gray ${className}`}>
      <button
        onClick={handleToggle}
        className="flex w-full items-center justify-between p-2.5 tablet:p-5 text-left"
        aria-expanded={isExpanded}
      >
        {icon && <IconCircle icon={icon} size={isMobile ? "2xs" : "lg"} />}
        <h3 className="text-sm tablet:text-3xl font-normal text-dark-gray flex-1 mx-2 tablet:mx-5">
          {header}
        </h3>
        <IconCircle
          icon={isExpanded ? <TopIcon /> : <DownIcon />}
          backgroundColor={isExpanded ? "#2E2E2E" : "#FFFFFF"}
          size={isMobile ? "2xs" : "sm"}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-2 tablet:p-5 bg-white border border-light-gray rounded-b-[20px] text-dark-gray">
          {children}
        </div>
      </div>
    </div>
  );
});
