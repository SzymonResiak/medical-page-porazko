import Card from "@/components/Card";

export const Opinions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-2xl mb-8">
        Wasze uśmiechy to <br /> moja{" "}
        <span className="font-bold">najlepsza rekomendacja</span>
      </p>
      <OpinionList />
    </div>
  );
};

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
    <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6">
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
