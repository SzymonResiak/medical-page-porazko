import Image from "next/image";

export const Location = () => {
  return (
    <div>
      <p className="text-2xl desktop-2:text-7xl">
        Zlokalizuj gabinet{" "}
        <span className="font-bold">
          na <br /> mapie
        </span>
      </p>
      <div className="bg-[#2E2E2E] rounded-[20] p-[30px] mt-5 block desktop-2:hidden">
        <p className="text-[#FCFCFC] text-sm">
          <span className="font-bold">Dom Medyczny &quot;Pro Corde&quot;</span>,
          gabinet znajdue się na
          <br /> pierwszym piętrze
        </p>
      </div>
      <div className="mt-5 desktop-2:mt-12 w-full h-[500px] desktop-2:h-[800px] relative">
        <Image
          src="/images/map-mobile.png"
          alt="Map"
          fill
          className="block desktop-2:hidden object-cover"
        />
        <Image
          src="/images/map-desktop.png"
          alt="Map"
          fill
          className="hidden desktop-2:block object-cover"
        />
      </div>
      <div className="mt-5">
        <p className="text-xl desktop-2:text-4xl text-right">
          ul. Piłsudskiego 11A,
          <br /> 45-706 Opole
        </p>
      </div>
    </div>
  );
};
