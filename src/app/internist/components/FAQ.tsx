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
      <Accordion
        header="Jakie dokumenty należy zabrać na wizytę?"
        isOpen={false}
      >
        <div className="text-sm desktop-2:text-2xl">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Pełnej dokumentacji medycznej w tym kart wypisowych z
              hospitalizacji, kart konsultacji specjalistycznych, wyników badań
              laboratoryjnych z szczególnym uwzględnieniem{" "}
              <span className="font-bold">
                morfologii krwi, jonogramu, kreatyniny, mocznika, badania
                ogólnego moczu.
              </span>
            </li>
            <li>Spis aktualnie przyjmowanych leków</li>
            <li>
              Wyniki pomiarów ciśnienia tętniczego wykonywanych w domu w
              przypadku nadciśnienia
            </li>
            <li>
              Wyniki pomiaru poziomów cukru wykonywanych w domu w przypadku
              cukrzycy
            </li>
          </ul>
        </div>
      </Accordion>
      <Accordion
        header="Czy wystawiane są recepty na leki refundowane przez NFZ?"
        isOpen={false}
      >
        <p className="text-sm desktop-2:text-2xl">
          Nie wystawiam recept na leki refundowane przez NFZ.
        </p>
      </Accordion>
      <Accordion
        header="Czy wystawiane są skierowania na badania diagnostyczne?"
        isOpen={false}
      >
        <p className="text-sm desktop-2:text-2xl">
          Nie wystawiam skierowań na badania diagnostyczne refundowane przez
          Narodowy Fundusz Zdrowia, takie jak tomografia komputerowa, rezonans
          magnetyczny oraz kart DILO. Skierowania wystawiam jedynie do poradni
          specjalistycznych lub oddziałów szpitalnych.
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
