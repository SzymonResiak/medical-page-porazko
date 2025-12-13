import Image from "next/image";

interface ImageCardProps {
  imageSrc: string;
  imageAlt: string;
}

export const ImageCard = ({ imageSrc, imageAlt }: ImageCardProps) => {
  return (
    <div className="group relative w-full h-full">
      <div className="rounded-[20px] relative overflow-hidden h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="object-cover object-center"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  );
};
