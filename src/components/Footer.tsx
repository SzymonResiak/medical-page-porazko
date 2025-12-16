import { memo } from "react";
import Link from "next/link";
import { CONTACT } from "@/data/constants";

export const Footer = memo(function Footer() {
  return (
    <footer className="bg-darker-gray text-off-white rounded-[1.875rem] p-4 tablet:p-[2.1875rem] min-w-0 max-w-full flex flex-wrap justify-between items-center gap-4 mb-[env(safe-area-inset-bottom)]">
      <div className="min-w-0 w-full tablet:w-auto tablet:min-w-[360px]">
        <p className="body-small-regular">Adres: {CONTACT.address.full}</p>
        <p className="body-small-regular">Telefon: {CONTACT.phone}</p>
        <p className="body-small-regular">E-mail: {CONTACT.email}</p>
        <p className="body-small-regular">
          Godziny otwarcia: {CONTACT.workingHours}
        </p>
      </div>

      <nav aria-label="Nawigacja stopki">
        <ul className="flex flex-col gap-1">
          <li>
            <Link href="/" className="body-small-regular hover:underline">
              Strona główna
            </Link>
          </li>
          <li>
            <Link
              href="/dentist"
              className="body-small-regular hover:underline"
            >
              Stomatolog
            </Link>
          </li>
          <li>
            <Link
              href="/internist"
              className="body-small-regular hover:underline"
            >
              Internista, Nefrolog
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <p className="body-small-regular">Project and development:</p>
        <p className="body-small-regular">UX/UI Design — Gabriela Wielgus</p>
        <p className="body-small-regular">
          Development — Szymon Resiak, Mateusz Obłoza
        </p>
      </div>
    </footer>
  );
});
