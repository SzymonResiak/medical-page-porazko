import Image from "next/image";

export const ImageCard = () => {
  return (
    <div className="group relative max-w-md desktop:max-w-full h-full">
      <div className="rounded-[20] p-4 tablet:p-5 desktop:p-17 relative overflow-hidden h-full min-h-[400px]">
        <Image
          src="/images/dentist.png"
          alt="Medical services"
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  );
};
