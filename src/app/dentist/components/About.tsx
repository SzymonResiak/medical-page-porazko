import Image from "next/image";
import { InfoLabel } from "@/components/InfoLabel";

export const About = () => {
  return (
    <div>
      <p className="text-2xl mb-5">
        <span className="font-bold">Doświadczenie i pasja</span>
        <br />
        stomatologia, której <br /> możesz zaufać
      </p>
      <Image src="/images/tools.png" alt="About" width={500} height={500} />
      <div className="p-9 border-black">
        <p className="text-xl font-bold">O mnie</p>
        <p className="mt-2">
          Jestem absolwentką Wydziału Stomatologii Uniwersytetu Medycznego im.
          Piastów Śląskich we Wrocławiu. Doświadczenie zdobywałam w placówkach w
          Polsce i Wielkiej Brytanii. <br />
          <br /> Regularnie poszerzam swoje kwalifikacje, biorąc udział w
          kursach i konferencjach. Mam wieloletnie doświadczenie w pracy z
          dziećmi oraz w leczeniu osób z niepełnosprawnościami.
        </p>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <InfoLabel
          icon="translate"
          text="Biegle komunikuje się po angielsku"
          className="bg-[#EAEAEA]"
          textColor="black"
        />
        <InfoLabel
          icon="cash"
          text="Akceptuję płatność kartą"
          className="bg-[#EAEAEA]"
          textColor="black"
        />
      </div>
    </div>
  );
};
