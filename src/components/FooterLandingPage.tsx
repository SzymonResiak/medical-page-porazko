import React from "react";
import { CONTACT } from "@/data/constants";

export const FooterLandingPage = () => {
  return (
    <footer className="w-full max-w-full bg-darker-gray text-off-white rounded-[1.25rem] tablet:rounded-[1.875rem] p-2 tablet:p-[0.625rem_1.25rem] flex flex-wrap justify-center tablet:justify-start items-center gap-2 tablet:gap-4 border border-gray-700 text-xs tablet:text-base">
      <div className="text-center">
        <span>Tel: </span>
        <span className="font-bold">{CONTACT.phone}</span>
        <span className="hidden tablet:inline">, Adres: {CONTACT.address.full}</span>
        <span className="tablet:hidden">, {CONTACT.address.city}</span>
      </div>
    </footer>
  );
};
