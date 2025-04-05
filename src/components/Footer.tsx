import React from "react";
import { typography } from "../styles/typography";

const Footer = () => {
  return (
    <footer className="bg-[#2A2A2A] text-[#FCFCFC] rounded-[1.875rem] p-[2.1875rem] min-w-[17.5rem] max-w-full flex flex-wrap justify-between items-center gap-4">
      {/* Left side - contact information */}
      <div className="min-w-[360px]">
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

      {/* Right side - information about creators */}
      <div>
        <p className={`${typography["Body-Small-Regular"]}`}>
          Project and development:
        </p>
        <p className={`${typography["Body-Small-Regular"]}`}>
          UX/UI Design — Gabriela Wielgus
        </p>
        <p className={`${typography["Body-Small-Regular"]}`}>
          Development — Szymon Resiak, Mateusz Obłoza
        </p>
      </div>
    </footer>
  );
};
export default Footer;
