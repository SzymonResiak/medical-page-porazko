import { CardImage } from "@/components/CardImage";

const services = [
  {
    imageName: "konsultacja",
    message: "Badania i konsultacje",
    description: "Kompleksowe badania stomatologiczne",
  },
  {
    imageName: "leczenie",
    message: "Leczenie zachowawcze",
    description: "Leczenie próchnicy, estetyczne wypełnienia",
  },
  {
    imageName: "profilaktyka",
    message: "Profilaktyka i higienizacja",
    description: "Skaling, piaskowanie, fluoryzacja",
  },
  {
    imageName: "stomDziecieca",
    message: "Stomatologia dziecięca",
    description: "Leczenie małych pacjentów",
  },
  {
    imageName: "stomEstetyczna",
    message: "Stomatologia estetyczna",
    description: "Wybielanie, poprawa estetyki uśmiechu",
  },
  {
    imageName: "endodoncja",
    message: "Endodoncja",
    description: "Leczenie kanałowe w powiększeniu",
  },
  {
    imageName: "stomChirurgia",
    message: "Chirurgia stomatologiczna",
    description: "Ekstrakcje, zabiegi chirurgiczne",
  },
  {
    imageName: "protetyka",
    message: "Protetyka",
    description: "Korony, mosty, protezy",
  },
] as const;

const ServicesList = () => {
  return (
    <div className="mt-10 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 desktop-2:grid-cols-4 gap-5">
      {services.map((service) => (
        <CardImage
          key={service.imageName}
          imageName={service.imageName}
          message={service.message}
          description={service.description}
        />
      ))}
    </div>
  );
};

export const Services = () => {
  return (
    <div>
      <p className="text-2xl desktop-2:text-7xl">
        Kompleksowa opieka stomatologiczna <br />
        <span className="font-bold block md:inline">
          znajdź usługę dla siebie
        </span>
      </p>
      <p className="mt-5 text-lg desktop-2:text-4xl">
        Pełna oferta stomatologiczna dopasowana do Twoich potrzeb
      </p>
      <ServicesList />
    </div>
  );
};
