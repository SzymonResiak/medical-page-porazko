import Image from "next/image";

// Importujemy wszystkie obrazy z prefixem card-
import cardKonsultacja from "../../public/images/card-konsultacja.png";
import cardLeczenie from "../../public/images/card-leczenie.png";
import cardProfilaktyka from "../../public/images/card-profilaktyka.png";
import cardStomDziecieca from "../../public/images/card-stom-dziecieca.png";
import cardStomEstetyczna from "../../public/images/card-stom-estetyczna.png";
import cardEndodoncja from "../../public/images/card-endodoncja.png";
import cardStomChirurgia from "../../public/images/card-stom-chirurgia.png";
import cardProtetyka from "../../public/images/card-protetyka.png";

const cardImages = {
  konsultacja: cardKonsultacja,
  leczenie: cardLeczenie,
  profilaktyka: cardProfilaktyka,
  stomDziecieca: cardStomDziecieca,
  stomEstetyczna: cardStomEstetyczna,
  endodoncja: cardEndodoncja,
  stomChirurgia: cardStomChirurgia,
  protetyka: cardProtetyka,
} as const;

type CardImageType = keyof typeof cardImages;

interface CardImageProps {
  imageName: CardImageType;
  message: string;
  description: string;
  className?: string;
}

export const CardImage = ({
  imageName,
  message,
  description,
  className,
}: CardImageProps) => {
  return (
    <div
      className={
        "relative overflow-hidden rounded-[1.875rem] bg-white " +
        "border border-gray-300 transition-all duration-300 p-[1.875rem] " +
        className
      }
    >
      <div className="relative w-full h-auto aspect-[3/2] mb-[1.875rem] px-[1.875rem]">
        <Image
          src={cardImages[imageName]}
          alt={message}
          fill
          className="object-contain rounded-[1.875rem]"
          sizes="(max-width: 48rem) 100vw, (max-width: 75rem) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col w-full">
        <h3 className="text-[1.125rem] mobile:text-[1rem] tablet:text-[1.25rem] font-semibold text-gray-900 mb-[0.5rem]">
          {message}
        </h3>
        <p className="text-[0.875rem] mobile:text-[0.75rem] tablet:text-[1rem] font-normal text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};
