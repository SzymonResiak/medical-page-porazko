import { memo } from "react";
import { CONTACT } from "@/data/constants";

export const Footer = memo(function Footer() {
  return (
    <footer className="bg-darker-gray text-off-white rounded-[30px] p-5 desktop:p-[35px] min-w-0 max-w-full flex flex-wrap justify-between items-center gap-[10px] mb-[env(safe-area-inset-bottom)]">
      {/* Left — contact info */}
      <div className="min-w-0 w-full desktop:w-auto desktop:min-w-[360px]">
        <p className="text-[length:var(--fs-h5)] desktop:text-[length:var(--fs-h4)] leading-[150%] desktop:leading-[27px]">
          Adres: {CONTACT.address.full}
        </p>
        <p className="text-[length:var(--fs-h5)] desktop:text-[length:var(--fs-h4)] leading-[150%] desktop:leading-[27px]">
          Telefon: {CONTACT.phone}
        </p>
        <p className="text-[length:var(--fs-h5)] desktop:text-[length:var(--fs-h4)] leading-[150%] desktop:leading-[27px]">
          E-mail: {CONTACT.email}
        </p>
        <p className="text-[length:var(--fs-h5)] desktop:text-[length:var(--fs-h4)] leading-[150%] desktop:leading-[27px]">
          Godziny otwarcia: {CONTACT.workingHours}
        </p>
      </div>

      {/* Right — credits */}
      <div className="w-full desktop:w-auto">
        <p className="text-[length:var(--fs-h5)] desktop:text-[length:var(--fs-h4)] leading-[150%] desktop:leading-[27px]">
          Projekt i rozwój strony:
        </p>
        <p className="text-[length:var(--fs-h5)] desktop:text-[length:var(--fs-h4)] leading-[150%] desktop:leading-[27px]">
          UX/UI Design —{" "}
          <a
            href="https://gabiwielgus.framer.website/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity"
          >
            Gabriela Wielgus
          </a>
        </p>
        <p className="text-[length:var(--fs-h5)] desktop:text-[length:var(--fs-h4)] leading-[150%] desktop:leading-[27px]">
          Development —{" "}
          <a
            href="https://www.linkedin.com/in/szymon-resiak-2b30a71b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity"
          >
            Szymon Resiak
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/mateusz-ob%C5%82oza/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity"
          >
            Mateusz Obłoza
          </a>
        </p>
      </div>
    </footer>
  );
});
