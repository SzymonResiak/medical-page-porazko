import React from "react";
import { typography } from "../styles/typography";

const Footer = () => {
  return (
    <div className="relative flex flex-col items-stretch">
      <footer className="bg-[#2A2A2A] text-[#FCFCFC] rounded-[30px] p-[35px] min-w-[280px] flex flex-wrap justify-between items-center gap-4">
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

      {/* Copyright */}
      <div className="mt-[50px] grid mobile:justify-items-center tablet:justify-items-end">
        <p className={`${typography["Body-Small-Regular"]}`}>
          © 2025 XYZ – All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
