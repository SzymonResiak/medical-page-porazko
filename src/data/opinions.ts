// Opinie pacjentów

export interface Opinion {
  name: string;
  rating: number;
  review: string;
  mobileOnly?: boolean;
}

export const DENTIST_OPINIONS: Opinion[] = [
  {
    name: "M.",
    rating: 5,
    mobileOnly: true,
    review:
      "Po wizycie u Pani doktor, postanowiłam oddać leczenie mojego dziecka w jej ręce. Zaangażowanie, szczegółowe wytłumaczenie i anielskie podejście, nawet w krytycznych momentach kiedy dziecko dostawało skrajnej histerii Pani doktor była opanowana i starała się aby zostało skończone leczenie zęba. Moja córka dziś sama powiedziała, że pani doktor jest najlepsza, a mieliśmy do czynienia z wieloma specjalistami w okolicy. Polecam wszystkim tym, którzy boją się dentysty bo sama chodzę do Pani z przyjemnością po traumie z dzieciństwa i jako mama widząc zaangażowanie z jakim Pani Justyna uspokajała i zachęcała moje dziecko do zakończenia leczenia zęba.",
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
      "Bardzo polecam! Od kilku lat dbam o zęby z Panią doktor i za każdym razem wychodziłem zadowolony po wizycie. Zawsze punktualnie, profesjonalnie oraz z pełnym zaangażowaniem. Pani doktor zawsze doradzi oraz wskaże kwestie, o które warto zadbać. Nic dodać, nic ująć. Jeżeli ktoś szuka skutecznego stomatologa z ludzkim podejściem do pacjenta, to nie może lepiej trafić.",
  },
];

export const INTERNIST_OPINIONS: Opinion[] = [
  {
    name: "Pacjentka",
    rating: 5,
    review:
      "Bardzo dobry specjalista, z dużą wiedzą, zaangażowany i konkretny. Taki lekarz z powołania. Polecam z czystym sumieniem.",
  },
  {
    name: "Beata D.",
    rating: 5,
    review:
      "Gorąco polecam Pana Doktora - cierpliwy, skoncentrowany na pacjencie, zainteresowany ogólnym stanem zdrowia, a przede wszystkim bardzo kompetentny. Wizyta mojej mamy odbyła się w ramach NFZ, w porównaniu do wizyt u innych lekarzy (nawet tych prywatnych) creme de la creme.",
  },
  {
    name: "Ania z Nysy",
    rating: 5,
    review:
      "Naprawdę bardzo miły lekarz, i bardzo kompetentny, pacjent jest zawsze dokładnie zbadany, mama znosi nawet długą podróż do doktora, bo jest naprawdę świetny i bardzo pomocny. Lekarz z powołania. Bardzo doktorze za wszystko serdecznie dziękujemy, bo tam gdzie nie widzieli szans doktor wytłumaczył i tak pokierował, że jest lepiej nawet pod względem psychicznym.",
  },
];
