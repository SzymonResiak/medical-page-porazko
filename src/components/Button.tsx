"use client";

import { ReactNode } from "react";
import { IconCircle } from "./IconCircle";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: "default" | "primary";
}

export const Button = ({
  children,
  leftIcon,
  rightIcon,
  variant = "default",
  className = "",
  ...props
}: ButtonProps) => {
  const isMobile = useMediaQuery(700);
  const variantClasses =
    variant === "default" ? "bg-[#2E2E2E]" : "bg-[#006AFF]";

  return (
    <button className={`${className} cursor-pointer`} {...props}>
      <div className="flex items-center justify-center ">
        {leftIcon && (
          <IconCircle
            icon={leftIcon}
            size={isMobile ? "xs" : "xl"}
            backgroundColor={variant === "default" ? "#2E2E2E" : "#006AFF"}
          />
        )}
        {children && (
          <div
            className={`${variantClasses} text-[#FCFCFC] rounded-[30] p-3 tablet:p-5 text-xs tablet:text-2xl`}
          >
            {children}
          </div>
        )}
        {rightIcon && (
          <IconCircle
            icon={rightIcon}
            size={isMobile ? "xs" : "xl"}
            backgroundColor={variant === "default" ? "#2E2E2E" : "#006AFF"}
          />
        )}
      </div>
    </button>
  );
};
