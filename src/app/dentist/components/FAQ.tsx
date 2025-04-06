import { Accordion } from "@/components/Accordion";

export const FAQ = () => {
  return (
    <div className="mb-12">
      <p className="text-2xl">
        Często zadawane <br /> <span className="font-bold">pytania</span>
      </p>
      <p className="mt-7 text-lg">
        Znajdziesz tu kluczowe informacje o moich usługach, płatnościach i
        wizytach
      </p>
      <div className="mt-12">
        <FAQItems />
      </div>
    </div>
  );
};

const FAQItems = () => {
  return (
    <div className="flex flex-col gap-5">
      <Accordion header="Jak mogę umówić wizytę?">
        <p className="text-sm">
          Wizytę mona umówić telefonicznie <br /> (+48 735 239 395) lub
          osobiście w gabinecie.
        </p>
      </Accordion>
      <Accordion header="Jakie metody płatności są akceptowane?">
        <p className="text-sm">Akceptuję płatności kartą oraz przelewem.</p>
      </Accordion>
      <Accordion header="Czy leczenie kanałowe jest bolesne?">
        <p className="text-sm">
          Dzięki nowoczesnym metodom i znieczuleniu leczenie jest bezbolesne i
          komfortowe.
        </p>
      </Accordion>
      <Accordion header="Jak przygotować się do wizyty?">
        <p className="text-sm">
          Przed wizytą warto umyć zęby i zabrać ze sobą dokumentację medycznę
          (jeśli jest dostępna).
        </p>
      </Accordion>
      <Accordion header="Co zrobić w przypadku nagłego bólu zęba?">
        <p className="text-sm">
          Skontaktuj się z gabinetem jak najszybciej - postaram się znaleźć dla
          Ciebie najbliszy wolny termin.
        </p>
      </Accordion>
      <Accordion header="Jak długo trwa wizyta?">
        <p className="text-sm">
          Czas wizyty zależy od rodzaju zabiegu - konsultacja trwa ok. 30 minut.
        </p>
      </Accordion>
      <Accordion header="Czy mogę porozumieć się po angielsku w gabinecie?">
        <p className="text-sm">
          Tak - bez problemu porozumiesz się równie w języku angielskim.
        </p>
      </Accordion>
    </div>
  );
};
