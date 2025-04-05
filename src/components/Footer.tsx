import React from "react";
import { typography } from "@/styles/typography";

const Footer = () => {
  return (
    <footer className="bg-[#2A2A2A] text-[#FCFCFC] rounded-[30px] p-[35px] min-w-[280px] flex flex-wrap justify-between items-center gap-4">
      {/* Lewa strona - informacje kontaktowe */}
      <div className="min-w-[360px] font-noto font-normal">
        <p className={`${typography["Body-Small-Regular"]}`}>
          Adres: ul. Piłsudskiego 11A, 45-706 Opole
        </p>
        <p className={`${typography["Body-Small-Regular"]}`}>
          Telefon: +48 735 239 795
        </p>
        <p className={`${typography["Body-Small-Regular"]}`}>
          E-mail: kontakt@klinika.pl
        </p>
        <p className={`${typography["Body-Small-Regular"]}`}>
          Godziny otwarcia: Pon–Pt: 9:00–18:00
        </p>
      </div>

      {/* Prawa strona - informacje o twórcach */}
      <div className="font-noto font-normal">
        <p className={`${typography["Body-Small-Regular"]}`}>
          Projekt i rozwój strony:
        </p>
        <p className={`${typography["Body-Small-Regular"]}`}>
          UX/UI Design — Gabriela Wielgus
        </p>
        <p className={`${typography["Body-Small-Regular"]}`}>
          Development — Szymon XYZ, Mateusz XYZ
        </p>
      </div>
    </footer>
  );
};

export default Footer;
