import { ReactNode, memo } from "react";

interface IconCircleProps {
  icon: ReactNode;
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl";
  backgroundColor?: string;
  iconColor?: string;
  className?: string;
}

const sizeClasses = {
  "2xs": "w-[30px] h-[30px] [&_svg]:w-[15px] [&_svg]:h-[15px]",
  xs: "w-[38px] h-[38px] [&_svg]:w-[19px] [&_svg]:h-[19px]",
  sm: "w-[45px] h-[45px] [&_svg]:w-[22px] [&_svg]:h-[22px]",
  md: "w-[50px] h-[50px] [&_svg]:w-[25px] [&_svg]:h-[25px]",
  lg: "w-[60px] h-[60px] [&_svg]:w-[30px] [&_svg]:h-[30px]",
  xl: "w-[75px] h-[75px] [&_svg]:w-[37px] [&_svg]:h-[37px]",
} as const;

// Helper to determine if background is dark
const isDarkBackground = (color: string): boolean => {
  const darkColors = ["#2E2E2E", "#2A2A2A", "#17554C", "#338075", "#006AFF"];
  return darkColors.some((c) => color.toUpperCase() === c.toUpperCase());
};

export const IconCircle = memo(function IconCircle({
  icon,
  size = "md",
  backgroundColor = "#FFFFFF",
  iconColor,
  className,
}: IconCircleProps) {
  // Auto-detect icon color based on background if not provided
  const resolvedIconColor =
    iconColor ?? (isDarkBackground(backgroundColor) ? "#FCFCFC" : "#2E2E2E");

  return (
    <div
      className={`rounded-full flex items-center justify-center transition-colors ${sizeClasses[size]} ${className ?? ""}`}
      style={{ backgroundColor, color: resolvedIconColor }}
    >
      {icon}
    </div>
  );
});
