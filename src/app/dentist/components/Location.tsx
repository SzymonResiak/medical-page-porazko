import Image from "next/image";

export const Location = () => {
  return (
    <div>
      <p className="text-2xl">
        Zlokalizuj gabinet{" "}
        <span className="font-bold">
          na <br /> mapie
        </span>
      </p>
      <div className="bg-[#2E2E2E] rounded-[20] p-[30px] mt-5">
        <p className="text-[#FCFCFC] text-sm">
          <span className="font-bold">Dom Medyczny &quot;Pro Corde&quot;</span>,
          gabinet znajdue się na
          <br /> pierwszym piętrze
        </p>
      </div>
      <div className="mt-5">
        <Image
          src="/images/map-mobile.png"
          alt="Map"
          width={500}
          height={500}
        />
      </div>
      <div className="mt-5">
        <p className="text-xl text-right">
          ul. Piłsudskiego 11A,
          <br /> 45-706 Opole
        </p>
      </div>
    </div>
  );
};
