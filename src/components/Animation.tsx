import Image from "next/image";

interface AnimationProps {
  src: string;
  alt: string;
  className?: string;
}

export const Animation = ({ src, alt, className = "" }: AnimationProps) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <Image src={src} alt={alt} width={72} height={72} unoptimized />
    </div>
  );
};
