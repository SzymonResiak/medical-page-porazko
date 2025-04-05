import { cn } from "@/styles/typography";
import { ReactNode } from "react";

interface IconCircleProps {
  icon: ReactNode;
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl";
  backgroundColor?: string;
  className?: string;
}

const sizeClasses = {
  "2xs": "w-[30px] h-[30px] [&_svg]:w-[15px] [&_svg]:h-[15px]",
  xs: "w-[38px] h-[38px] [&_svg]:w-[19px] [&_svg]:h-[19px]",
  sm: "w-[45px] h-[45px] [&_svg]:w-[22px] [&_svg]:h-[22px]",
  md: "w-[50px] h-[50px] [&_svg]:w-[25px] [&_svg]:h-[25px]",
  lg: "w-[60px] h-[60px] [&_svg]:w-[30px] [&_svg]:h-[30px]",
  xl: "w-[75px] h-[75px] [&_svg]:w-[37px] [&_svg]:h-[37px]",
};

export const IconCircle = ({
  icon,
  size = "md",
  backgroundColor = "#FFFFFF",
  className,
}: IconCircleProps) => {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center transition-colors",
        sizeClasses[size],
        className
      )}
      style={{ backgroundColor }}
    >
      {icon}
    </div>
  );
};
