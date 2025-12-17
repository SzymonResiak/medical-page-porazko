import { memo } from "react";
import { LocationMap } from "@/components/LocationMap";
import { CLINIC, CONTACT } from "@/data/constants";

export const Location = memo(function Location() {
  return (
    <div>
      <p className="heading-h1-regular">
        Zlokalizuj gabinet <span className="heading-h1-bold">na mapie</span>
      </p>
      <div className="bg-dark-gray rounded-[20px] p-[30px] mt-5 block desktop-lg:hidden">
        <p className="text-off-white body-medium-bold">
          <span className="body-medium-regular">{CLINIC.name}</span>, gabinet
          znajduje się na pierwszym piętrze
        </p>
      </div>
      <div className="mt-5 desktop-lg:mt-12 w-full h-[500px] desktop-lg:h-[800px] relative">
        <LocationMap />
      </div>
      <div className="mt-5">
        <h4 className="heading-h4-regular leading-15 text-right">
          {CONTACT.address.street},
          <br /> {CONTACT.address.city}
        </h4>
      </div>
    </div>
  );
});
