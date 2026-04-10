import { CardImage } from "@/components/CardImage";

const SERVICES = [
  {
    imageName: "konsultacja",
    title: "Badania i konsultacje",
    description: "Kompleksowe badania stomatologiczne",
  },
  {
    imageName: "leczenie",
    title: "Leczenie zachowawcze",
    description: "Leczenie próchnicy, estetyczne wypełnienia",
  },
  {
    imageName: "profilaktyka",
    title: "Profilaktyka i higienizacja",
    description: "Skaling, piaskowanie, fluoryzacja",
  },
  {
    imageName: "stomDziecieca",
    title: "Stomatologia dziecięca",
    description: "Leczenie małych pacjentów",
  },
  {
    imageName: "stomEstetyczna",
    title: "Stomatologia estetyczna",
    description: "Wybielanie, poprawa estetyki uśmiechu",
  },
  {
    imageName: "endodoncja",
    title: "Endodoncja",
    description: "Leczenie kanałowe w powiększeniu",
  },
  {
    imageName: "stomChirurgia",
    title: "Chirurgia stomatologiczna",
    description: "Ekstrakcje, zabiegi chirurgiczne",
  },
  {
    imageName: "protetyka",
    title: "Protetyka",
    description: "Korony, mosty, protezy",
  },
] as const;

export const Services = () => {
  return (
    <div>
      <p className="text-[length:var(--fs-h1)] leading-[150%]">
        Kompleksowa opieka stomatologiczna
      </p>
      <p className="text-[length:var(--fs-h1)] font-bold leading-none">
        znajdź usługę dla siebie
      </p>
      <p className="mt-5 text-[length:var(--fs-h2)] desktop:leading-[54px] leading-[150%]">
        Pełna oferta stomatologiczna dopasowana do Twoich potrzeb
      </p>
      <div className="mt-10 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-5 desktop:gap-[30px]">
        {SERVICES.map((service) => (
          <CardImage
            key={service.imageName}
            imageName={service.imageName}
            title={service.title}
            description={service.description}
            // className={(index + 1) % 4 === 0 ? "desktop:col-span-3" : ""}
            // sizes={(index + 1) % 4 === 0 ? "100vw" : "(max-width: 48rem) 100vw, (max-width: 75rem) 50vw, 33vw"}
          />
        ))}
      </div>
    </div>
  );
};
