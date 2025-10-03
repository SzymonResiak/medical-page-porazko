import Image from "next/image";

export const About = () => {
  return (
    <div className="flex flex-col gap">
      <p className="text-2xl mb-5 desktop-2:text-7xl">
        <span className="font-bold">
          Doświadczenie i <br /> troska
        </span>
        <br /> o każdy detal Twojego <br /> zdrowia
      </p>
      <div className="flex flex-col md:flex-row md:gap-5 items-center">
        <Image src="/images/tools.png" alt="About" width={500} height={500} />
        <div className="p-9 mt-8 md:mt-0 border border-[#EAEAEA] rounded-[30] flex-1">
          <p className="text-xl desktop-2:text-4xl font-bold">O mnie</p>
          <p className="mt-2 desktop-2:text-2xl">
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
