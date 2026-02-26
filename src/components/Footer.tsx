import { memo } from "react";
import Link from "next/link";
import { typography } from "../styles/typography";
import { CONTACT } from "@/data/constants";

export const Footer = memo(function Footer() {
  return (
    <footer className="bg-darker-gray text-off-white rounded-[1.875rem] p-4 tablet:p-[2.1875rem] min-w-0 max-w-full flex flex-wrap justify-between items-center gap-4 mb-[env(safe-area-inset-bottom)]">
      {/* Left side - contact information */}
      <div className="min-w-0 w-full tablet:w-auto tablet:min-w-[360px]">
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

      {/* Middle - internal links */}
      <nav aria-label="Nawigacja stopki">
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              href="/"
              className={`${typography["Body-Small-Regular"]} hover:underline`}
            >
              Strona główna
            </Link>
          </li>
          <li>
            <Link
              href="/dentist"
              className={`${typography["Body-Small-Regular"]} hover:underline`}
            >
              Stomatolog
            </Link>
          </li>
          <li>
            <Link
              href="/internist"
              className={`${typography["Body-Small-Regular"]} hover:underline`}
            >
              Internista, Nefrolog
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right side - information about creators */}
      <div>
        <p className={`${typography["Body-Small-Regular"]}`}>
          Projekt i realizacja:
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
