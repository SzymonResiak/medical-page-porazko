import { memo } from "react";
import { LocationMap } from "@/components/LocationMap";
import { CLINIC, CONTACT } from "@/data/constants";

export const Location = memo(function Location() {
  return (
    <div>
      <p className="text-[length:var(--fs-h1)] leading-[150%]">
        Zlokalizuj gabinet <span className="font-bold">na mapie</span>
      </p>
      <div className="bg-dark-gray rounded-[20px] p-[30px] mt-5 block desktop-lg:hidden">
        <p className="text-off-white text-sm">
          <span className="font-bold">{CLINIC.name}</span>, gabinet znajduje się
          na
          <br /> pierwszym piętrze
        </p>
      </div>
      <div className="mt-5 desktop-lg:mt-12 w-full h-[500px] desktop-lg:h-[800px] relative">
        <LocationMap />
      </div>
      <div className="mt-5">
        <p className="text-[length:var(--fs-h2)] leading-[150%] text-right">
          {CONTACT.address.street},
          <br /> {CONTACT.address.city}
        </p>
      </div>
    </div>
  );
});
