import { FAQItem } from "@/components/FAQ";
import { CONTACT } from "@/data/constants";

export const INTERNIST_FAQ_ITEMS: FAQItem[] = [
  {
    question: "Jak mogę umówić wizytę?",
    answer: (
      <>
        Wizytę można umówić telefonicznie <br /> ({CONTACT.phone}) lub osobiście
        w gabinecie.
      </>
    ),
  },
  {
    question: "Jakie metody płatności są akceptowane?",
    answer: "Akceptuję płatności kartą oraz przelewem.",
  },
  {
    question: "Jakie dokumenty należy zabrać na wizytę?",
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Pełnej dokumentacji medycznej w tym kart wypisowych z hospitalizacji,
          kart konsultacji specjalistycznych, wyników badań laboratoryjnych z
          szczególnym uwzględnieniem{" "}
          <span className="font-bold">
            morfologii krwi, jonogramu, kreatyniny, mocznika, badania ogólnego
            moczu.
          </span>
        </li>
        <li>Spis aktualnie przyjmowanych leków</li>
        <li>
          Wyniki pomiarów ciśnienia tętniczego wykonywanych w domu w przypadku
          nadciśnienia
        </li>
        <li>
          Wyniki pomiaru poziomów cukru wykonywanych w domu w przypadku cukrzycy
        </li>
      </ul>
    ),
  },
  {
    question: "Czy wystawiane są recepty na leki refundowane przez NFZ?",
    answer: "Nie wystawiam recept na leki refundowane przez NFZ.",
  },
  {
    question: "Czy wystawiane są skierowania na badania diagnostyczne?",
    answer:
      "Nie wystawiam skierowań na badania diagnostyczne refundowane przez Narodowy Fundusz Zdrowia, takie jak tomografia komputerowa, rezonans magnetyczny oraz kart DILO. Skierowania wystawiam jedynie do poradni specjalistycznych lub oddziałów szpitalnych.",
  },
];
