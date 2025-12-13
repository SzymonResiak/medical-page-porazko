"use client";

import { ReactNode, memo } from "react";
import { IconCircle } from "./IconCircle";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BREAKPOINTS } from "@/data/constants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: "default" | "primary";
}

export const Button = memo(function Button({
  children,
  leftIcon,
  rightIcon,
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  const isMobile = useMediaQuery(BREAKPOINTS.TABLET - 1);
  const variantClasses =
    variant === "default" ? "bg-dark-gray" : "bg-accent";

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
            className={`${variantClasses} text-off-white rounded-[20px] p-3 tablet:p-5 text-xs tablet:text-2xl`}
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
});
