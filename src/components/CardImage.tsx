import Image from "next/image";

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
  title: string;
  description: string;
  className?: string;
  sizes?: string;
}

export const CardImage = ({
  imageName,
  title,
  description,
  className,
  sizes = "(max-width: 48rem) 100vw, (max-width: 75rem) 50vw, 33vw",
}: CardImageProps) => {
  return (
    <div
      className={
        "flex flex-col gap-[10px] rounded-[30px] bg-[#FCFCFC] " +
        "border-[0.5px] border-[rgba(128,128,128,0.55)] p-[35px] " +
        (className ?? "")
      }
    >
      <div className="relative w-full aspect-[3/2] rounded-[20px] overflow-hidden flex-shrink-0">
        <Image
          src={cardImages[imageName]}
          alt={title}
          fill
          className="object-cover"
          sizes={sizes}
        />
      </div>
      <h3 className="text-[length:var(--fs-h3)] font-bold leading-[34px] text-dark-gray">
        {title}
      </h3>
      <p className="text-[length:var(--fs-h4)] font-normal leading-[27px] text-[rgba(46,46,46,0.7)]">
        {description}
      </p>
    </div>
  );
};
