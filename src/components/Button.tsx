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
  const variantClasses = variant === "default" ? "bg-dark-gray" : "bg-accent";
  const iconBg = variant === "default" ? "#2E2E2E" : "#006AFF";
  const iconHoverBg = variant === "default" ? "#1a1a1a" : "#0052cc";
  const isMobile = useMediaQuery(BREAKPOINTS.TABLET - 1);

  return (
    <button className={`${className} cursor-pointer group`} {...props}>
      <div className="flex items-center justify-center">
        {leftIcon && (
          <>
            <div>
              <IconCircle
                icon={leftIcon}
                size={isMobile ? "sm" : "xl"}
                backgroundColor={iconBg}
                hoverBackgroundColor={iconHoverBg}
              />
            </div>
          </>
        )}
        {children && (
          <div
            className={`${variantClasses} text-off-white rounded-[20px] p-3 desktop:p-5 text-xs desktop:text-xl transition-colors duration-300 ease-in-out ${
              variant === "default"
                ? "group-hover:bg-[#1a1a1a]"
                : "group-hover:bg-[#0052cc]"
            }`}
          >
            {children}
          </div>
        )}
        {rightIcon && (
          <>
            <div>
              <IconCircle
                icon={rightIcon}
                size={isMobile ? "sm" : "xl"}
                backgroundColor={iconBg}
                hoverBackgroundColor={iconHoverBg}
              />
            </div>
          </>
        )}
      </div>
    </button>
  );
});
