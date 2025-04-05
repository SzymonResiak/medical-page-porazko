const ServicesList = () => {
  return (
    <div className="mt-5">
      <p>Usługi</p>
      <ul>
        <li>Leczenie zębów</li>
        <li>Leczenie zębów</li>
        <li>Leczenie zębów</li>
        <li>Leczenie zębów</li>
      </ul>
    </div>
  );
};

export const Services = () => {
  return (
    <div>
      <p className="text-2xl">
        Kompleksowa opieka stomatologiczna <br />
        <span className="font-bold">
          znajdź usługę dla <br /> siebie
        </span>
      </p>
      <p className="mt-5 text-lg">
        Pełna oferta stomatologiczna dopasowana do Twoich potrzeb
      </p>
      <ServicesList />
    </div>
  );
};
