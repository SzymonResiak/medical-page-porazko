import { memo } from "react";
import { typography } from "../styles/typography";
import { CONTACT } from "@/data/constants";

export const Footer = memo(function Footer() {
  return (
    <footer className="bg-darker-gray text-off-white rounded-[1.875rem] p-[2.1875rem] min-w-[17.5rem] max-w-full flex flex-wrap justify-between items-center gap-4">
      {/* Left side - contact information */}
      <div className="min-w-[360px]">
        <p className={`${typography["Body-Small-Regular"]}`}>
          Adres: {CONTACT.address.full}
        </p>
        <p className={`${typography["Body-Small-Regular"]}`}>
          Telefon: {CONTACT.phone}
        </p>
        <p className={`${typography["Body-Small-Regular"]}`}>
          E-mail: {CONTACT.email}
        </p>
        <p className={`${typography["Body-Small-Regular"]}`}>
          Godziny otwarcia: {CONTACT.workingHours}
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
});
