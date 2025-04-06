import Card from "@/components/Card";

const opinions = [
  {
    name: "Ewa",
    rating: 5,
    review:
      "Pani doktor niezwykle staranna, wszystko dokładnie tłumaczy i podchodzi do pacjenta indywidualnie, dzieki niej pozbyłam się nawracającego problemu. Bardzo przyjazna atmosfera w gabinecie, polecam każdemu!",
  },
  {
    name: "Maciej",
    rating: 5,
    review:
      "Pani Doktor to najlepszy stomatolog jakiego znam - pełen profesjonalizm wykonywanych zabiegów! Bardzo miła atmosfera, podejście pełne życzliwości, zrozumienia oraz cierpliwości do pacjenta. Przez 30 lat bałem się wizyt u stomatologa, teraz na każdą wizytę przychodzę bez stresu. Wszystkim szczerze polecam!",
  },
  {
    name: "Szymon Ch",
    rating: 5,
    review:
      "Bardzo polecam! Od kilku lat dbam o zęby z Panią doktor i za każdym razem wychodziłem zadowolony po wizycie. Zawsze punktualnie, profesjonalnie oraz z pełnym zaangażowaniem. Pani doktor zawsze doradzi oraz wskaże kwestie, o które warto zadbać. Nic dodać nic ująć. Jeżeli ktoś szuka skutecznego stomatologa z ludzkim podejściem do pacjenta, to nie może lepiej trafić..",
  },
];

const OpinionList = () => {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-3 gap-[1.25rem] items-end w-full max-w-none">
      {opinions.map((opinion, index) => (
        <Card
          key={index}
          name={opinion.name}
          rating={opinion.rating}
          review={opinion.review}
        />
      ))}
    </div>
  );
};

export const Opinions = () => {
  return (
    <div className="w-full max-w-none px-4">
      <p className="text-2xl desktop-2:text-7xl mb-8">
        Wasze uśmiechy to <br /> moja{" "}
        <span className="font-bold">najlepsza rekomendacja</span>
      </p>
      <OpinionList />
    </div>
  );
};
