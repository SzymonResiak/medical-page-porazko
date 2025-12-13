import React from "react";
import { CONTACT } from "@/data/constants";

export const FooterLandingPage = () => {
  return (
    <footer className="w-full max-w-full bg-darker-gray text-off-white rounded-[1.875rem] p-[0.625rem_1.25rem] flex flex-wrap justify-start items-start gap-4 border border-gray-700">
      <div className="text-center">
        <span>Telefon: </span>
        <span className="font-bold">{CONTACT.phone}</span>
        <span>, Adres: {CONTACT.address.full}</span>
      </div>
    </footer>
  );
};
