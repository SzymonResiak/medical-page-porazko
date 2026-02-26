import Image from "next/image";

export const About = () => {
  return (
    <div className="flex flex-col">
      <p className="text-2xl mb-5 desktop-lg:text-7xl">
        <span className="font-bold">
          Doświadczenie i <br /> troska
        </span>
        <br /> o każdy detal Twojego <br /> zdrowia
      </p>
      <div className="flex flex-col tablet:flex-row tablet:gap-5 items-center">
        <Image
          src="/images/medicine-bg.png"
          alt="Konsultacja internistyczna"
          width={500}
          height={500}
          style={{ width: "auto", height: "auto" }}
        />
        <div className="p-9 mt-8 tablet:mt-0 border border-light-gray rounded-[30px] flex-1">
          <p className="text-xl desktop-lg:text-4xl font-bold">O mnie</p>
          <p className="mt-2 desktop-lg:text-2xl">
            Jestem absolwentem Wydziału Lekarskiego Uniwersytetu Medycznego im.
            Piastów Śląskich we Wrocławiu. Specjalizuję się w chorobach
            wewnętrznych i nefrologii. <br />
            <br /> Wieloletnie doświadczenie w tych specjalnościach nabyłem
            pracując w Klinice Nefrologii Medycyny Transplantacyjnej
            Uniwersytetu Medycznego we Wrocławiu, Oddziale Nefrologicznym,
            Transplantacyjnym i Stacji Dializ, Manchester Royal Infirmary w
            Wielkiej Brytanii, a obecnie w Oddziale Chorób Wewnętrznych i
            Nefrologii, Uniwersyteckiego Szpitala Klinicznego w Opolu.
          </p>
        </div>
      </div>
    </div>
  );
};
