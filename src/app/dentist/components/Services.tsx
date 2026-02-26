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
      <p className="text-2xl desktop-lg:text-7xl">
        Kompleksowa opieka stomatologiczna <br />
        <span className="font-bold block tablet:inline">
          znajdź usługę dla siebie
        </span>
      </p>
      <p className="mt-5 text-lg desktop-lg:text-4xl">
        Pełna oferta stomatologiczna dopasowana do Twoich potrzeb
      </p>
      <div className="mt-10 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 desktop-lg:grid-cols-4 gap-5">
        {SERVICES.map((service) => (
          <CardImage
            key={service.imageName}
            imageName={service.imageName}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};
