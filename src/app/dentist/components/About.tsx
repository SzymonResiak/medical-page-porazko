import Image from "next/image";
import { InfoLabel } from "@/components/InfoLabel";

export const About = () => {
  return (
    <div>
      <p className="text-2xl mb-5 desktop-lg:text-7xl">
        <span className="font-bold">Doświadczenie i pasja</span>
        <br />
        stomatologia, której <br /> możesz zaufać
      </p>
      <div className="flex flex-col md:flex-row md:gap-5 items-center">
        <Image
          src="/images/tools.png"
          alt="About"
          width={500}
          height={500}
          style={{ width: "auto", height: "auto" }}
        />
        <div className="p-9 mt-8 md:mt-0 border border-light-gray rounded-[30px] flex-1">
          <p className="text-xl desktop-lg:text-4xl font-bold">O mnie</p>
          <p className="mt-2 desktop-lg:text-2xl">
            Jestem absolwentką Wydziału Stomatologii Uniwersytetu Medycznego im.
            Piastów Śląskich we Wrocławiu. Doświadczenie zdobywałam w placówkach
            w Polsce i Wielkiej Brytanii. <br />
            <br /> Regularnie poszerzam swoje kwalifikacje, biorąc udział w
            kursach i konferencjach. Mam wieloletnie doświadczenie w pracy z
            dziećmi oraz w leczeniu osób z niepełnosprawnościami.
          </p>
        </div>
      </div>
      <div className="flex flex-col desktop-lg:flex-row gap-5 mt-5">
        <InfoLabel
          icon="translate"
          text="Biegle komunikuję się po angielsku"
          className="bg-light-gray flex-1"
          textColor="black"
        />
        <InfoLabel
          icon="transferWhite"
          text="Akceptuję płatność kartą"
          className="bg-light-gray flex-1"
          textColor="black"
        />
      </div>
    </div>
  );
};
