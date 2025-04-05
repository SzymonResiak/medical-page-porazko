"use client";

import { useState } from "react";

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
};

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  icon,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-lg bg-gray-100 mb-4 overflow-hidden">
      <button
        type="button"
        className="flex w-full items-center justify-between px-6 py-5 text-left text-lg font-medium"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          {icon && <div className="text-gray-600">{icon}</div>}
          <span className="text-lg font-semibold">{title}</span>
        </div>
        {isOpen ? (
          <div className="flex items-center justify-center bg-white rounded-full h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="12" x2="6" y2="12"></line>
            </svg>
          </div>
        ) : (
          <div className="flex items-center justify-center bg-white rounded-full h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="12" y1="6" x2="12" y2="18"></line>
              <line x1="18" y1="12" x2="6" y2="12"></line>
            </svg>
          </div>
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-5 pt-0">
          <div className="max-w-none">{children}</div>
        </div>
      )}
    </div>
  );
}

type AccordionProps = {
  children: React.ReactNode;
  className?: string;
};

export function Accordion({ children, className = "" }: AccordionProps) {
  return <div className={`${className}`}>{children}</div>;
}
