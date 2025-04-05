import { cn } from "@/styles/typography";
import Image from "next/image";

export type CircleIconProps = {
  src: string;
  alt: string;
  className?: string;
  bgClassName?: string;
  size?: number;
};

export const CircleIcon = ({ 
  className,
  bgClassName,
  src,
  alt,
  size = 24
}: CircleIconProps) => {
  return (
    <div className={cn("rounded-full flex items-center justify-center aspect-square overflow-hidden", bgClassName)}>
      <div className={cn("relative flex items-center justify-center", className)}>
        <Image 
          src={src} 
          alt={alt} 
          width={size} 
          height={size}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
};
