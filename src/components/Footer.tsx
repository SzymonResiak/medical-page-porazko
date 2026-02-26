import { memo } from "react";
import Link from "next/link";

import { CONTACT } from "@/data/constants";

export const Footer = memo(function Footer() {
  return (
    <footer className="bg-darker-gray text-off-white rounded-[1.875rem] p-4 tablet:p-[2.1875rem] min-w-0 max-w-full flex flex-wrap justify-between items-center gap-4 mb-[env(safe-area-inset-bottom)]">
      {/* Left side - contact information */}
      <div className="min-w-0 w-full tablet:w-auto tablet:min-w-[360px]">
        <p className="text-[0.75rem] tablet:text-[1rem] desktop-lg:text-[1.25rem] font-normal leading-none">
          Adres: {CONTACT.address.full}
        </p>
        <p className="text-[0.75rem] tablet:text-[1rem] desktop-lg:text-[1.25rem] font-normal leading-none">
          Telefon: {CONTACT.phone}
        </p>
        <p className="text-[0.75rem] tablet:text-[1rem] desktop-lg:text-[1.25rem] font-normal leading-none">
          E-mail: {CONTACT.email}
        </p>
        <p className="text-[0.75rem] tablet:text-[1rem] desktop-lg:text-[1.25rem] font-normal leading-none">
          Godziny otwarcia: {CONTACT.workingHours}
        </p>
      </div>

      {/* Middle - internal links */}
      <nav aria-label="Nawigacja stopki">
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              href="/"
              className="text-[0.75rem] tablet:text-[1rem] desktop-lg:text-[1.25rem] font-normal leading-none hover:underline"
            >
              Strona główna
            </Link>
          </li>
          <li>
            <Link
              href="/dentist"
              className="text-[0.75rem] tablet:text-[1rem] desktop-lg:text-[1.25rem] font-normal leading-none hover:underline"
            >
              Stomatolog
            </Link>
          </li>
          <li>
            <Link
              href="/internist"
              className="text-[0.75rem] tablet:text-[1rem] desktop-lg:text-[1.25rem] font-normal leading-none hover:underline"
            >
              Internista, Nefrolog
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right side - information about creators */}
      <div>
        <p className="text-[0.75rem] tablet:text-[1rem] desktop-lg:text-[1.25rem] font-normal leading-none">
          Projekt i realizacja:
        </p>
        <p className="text-[0.75rem] tablet:text-[1rem] desktop-lg:text-[1.25rem] font-normal leading-none">
          UX/UI Design — Gabriela Wielgus
        </p>
        <p className="text-[0.75rem] tablet:text-[1rem] desktop-lg:text-[1.25rem] font-normal leading-none">
          Development — Szymon Resiak, Mateusz Obłoza
        </p>
      </div>
    </footer>
  );
});
