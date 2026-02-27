import { CONTACT } from "@/data/constants";

export const INTERNIST_FAQ_SCHEMA = [
  {
    question: "Jak mogę umówić wizytę?",
    answer: `Wizytę można umówić telefonicznie (${CONTACT.phone}) lub osobiście w gabinecie.`,
  },
  {
    question: "Jakie metody płatności są akceptowane?",
    answer: "Akceptuję płatności kartą oraz przelewem.",
  },
  {
    question: "Jakie dokumenty należy zabrać na wizytę?",
    answer: "Pełna dokumentacja medyczna w tym karty wypisowe z hospitalizacji, karty konsultacji specjalistycznych, wyniki badań laboratoryjnych (morfologia krwi, jonogram, kreatynina, mocznik, badanie ogólne moczu). Spis aktualnie przyjmowanych leków. Wyniki pomiarów ciśnienia tętniczego w domu (nadciśnienie). Wyniki pomiarów poziomu cukru w domu (cukrzyca).",
  },
  {
    question: "Czy wystawiane są recepty na leki refundowane przez NFZ?",
    answer: "Nie wystawiam recept na leki refundowane przez NFZ.",
  },
  {
    question: "Czy wystawiane są skierowania na badania diagnostyczne?",
    answer: "Nie wystawiam skierowań na badania diagnostyczne refundowane przez Narodowy Fundusz Zdrowia, takie jak tomografia komputerowa, rezonans magnetyczny oraz kart DILO. Skierowania wystawiam jedynie do poradni specjalistycznych lub oddziałów szpitalnych.",
  },
];
