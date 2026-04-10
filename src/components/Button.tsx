"use client";

import { ReactNode, memo } from "react";
import { IconCircle } from "./IconCircle";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: "default" | "primary";
  textClassName?: string;
  mobileIconSize?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl";
}

const ScalableIconCircle = ({
  icon,
  backgroundColor,
}: {
  icon: ReactNode;
  backgroundColor: string;
}) => (
  <div
    className="hidden tablet:flex items-center justify-center rounded-full flex-shrink-0 aspect-square"
    style={{
      height: "clamp(2rem, 4.5vh, 3.2rem)",
      width: "clamp(2rem, 4.5vh, 3.2rem)",
      backgroundColor,
    }}
  >
    <div
      className="[&_svg]:w-full [&_svg]:h-full text-off-white"
      style={{ width: "50%", height: "50%" }}
    >
      {icon}
    </div>
  </div>
);

export const Button = memo(function Button({
  children,
  leftIcon,
  rightIcon,
  variant = "default",
  textClassName = "",
  className = "",
  mobileIconSize = "xs",
  ...props
}: ButtonProps) {
  const variantClasses =
    variant === "default" ? "bg-dark-gray group-hover/btn:bg-accent" : "bg-accent";
  const iconBg = variant === "default" ? "#2E2E2E" : "#006AFF";

  return (
    <button className={`group/btn cursor-pointer ${className}`} {...props}>
      <div className="flex items-center justify-center">
        {leftIcon && (
          <>
            <ScalableIconCircle icon={leftIcon} backgroundColor={iconBg} />
            <div className="tablet:hidden">
              <IconCircle
                icon={leftIcon}
                size={mobileIconSize}
                backgroundColor={iconBg}
              />
            </div>
          </>
        )}
        {children && (
          <div
            className={`${variantClasses} text-off-white rounded-[20px] p-3 tablet:p-[clamp(0.4rem,1vh,0.8rem)] text-xs tablet:text-[clamp(0.7rem,1.6vh,1.2rem)] transition-colors duration-300 ${textClassName}`}
          >
            {children}
          </div>
        )}
        {rightIcon && (
          <>
            <ScalableIconCircle icon={rightIcon} backgroundColor={iconBg} />
            <div className="tablet:hidden">
              <IconCircle
                icon={rightIcon}
                size="xs"
                backgroundColor={iconBg}
              />
            </div>
          </>
        )}
      </div>
    </button>
  );
});
