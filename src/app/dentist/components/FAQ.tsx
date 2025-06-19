import { Accordion } from "@/components/Accordion";

const FAQItems = () => {
  return (
    <div className="flex flex-col gap-5">
      <Accordion header="Jak mogę umówić wizytę?" isOpen={false}>
        <p className="text-sm desktop-2:text-2xl">
          Wizytę można umówić telefonicznie <br /> (+48 735 239 395) lub
          osobiście w gabinecie.
        </p>
      </Accordion>
      <Accordion header="Jakie metody płatności są akceptowane?" isOpen={false}>
        <p className="text-sm desktop-2:text-2xl">
          Akceptuję płatności kartą oraz przelewem.
        </p>
      </Accordion>
      <Accordion header="Czy leczenie kanałowe jest bolesne?" isOpen={false}>
        <p className="text-sm desktop-2:text-2xl">
          Dzięki nowoczesnym metodom i znieczuleniu leczenie jest bezbolesne i
          komfortowe.
        </p>
      </Accordion>
      <Accordion header="Jak przygotować się do wizyty?" isOpen={false}>
        <p className="text-sm desktop-2:text-2xl">
          Przed wizytą warto umyć zęby i zabrać ze sobą dokumentację medycznę
          (jeśli jest dostępna).
        </p>
      </Accordion>
      <Accordion
        header="Co zrobić w przypadku nagłego bólu zęba?"
        isOpen={false}
      >
        <p className="text-sm desktop-2:text-2xl">
          Skontaktuj się z gabinetem jak najszybciej - postaram się znaleźć dla
          Ciebie najbliszy wolny termin.
        </p>
      </Accordion>
      <Accordion header="Jak długo trwa wizyta?" isOpen={false}>
        <p className="text-sm desktop-2:text-2xl">
          Czas wizyty zależy od rodzaju zabiegu - konsultacja trwa ok. 30 minut.
        </p>
      </Accordion>
      <Accordion
        header="Czy mogę porozumieć się po angielsku w gabinecie?"
        isOpen={false}
      >
        <p className="text-sm desktop-2:text-2xl">
          Tak - bez problemu porozumiesz się równie w języku angielskim.
        </p>
      </Accordion>
    </div>
  );
};

export const FAQ = () => {
  return (
    <div className="mb-12 desktop-2:mb-38">
      <p className="text-2xl desktop-2:text-7xl  desktop-2:text-center">
        Często zadawane <br /> <span className="font-bold">pytania</span>
      </p>
      <p className="mt-7 text-lg desktop-2:text-4xl  desktop-2:text-center">
        Znajdziesz tu kluczowe informacje o moich usługach, płatnościach i
        wizytach
      </p>
      <div className="mt-12">
        <FAQItems />
      </div>
    </div>
  );
};
