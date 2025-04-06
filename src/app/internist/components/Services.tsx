import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { KidneysIcon } from "@/components/icons/KidneysIcon";
import { InfoLabel } from "@/components/InfoLabel";

export const Services = () => {
  return (
    <div>
      <p className="text-2xl desktop-2:text-7xl">
        Wszystko, czego potrzebujesz dla zdrowia nerek
        <span className="font-bold block md:inline">
          oferta diagnostyki i leczenia
        </span>
      </p>
      <p className="mt-5 text-lg desktop-2:text-4xl">
        Diagnostyka i leczenie <br /> dopasowne do Twoich potrzeb.
      </p>
      <p className="mt-5 text-lg desktop-2:text-4xl text-right">
        Skontaktuj się z dr hab.n.med. <br />
        Tomaszem Porażką, aby umówić <br /> wizytę
      </p>
      <div className="flex justify-end">
        <Button className="mt-5 md:hidden">zadzwoń</Button>
        <p className="hidden md:block mt-5 text-lg desktop-2:text-2xl ">
          <span className="font-bold">Zadzwoń:</span> +48 735 239 795
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-5">
        <Accordion
          header="Diagnostyka i leczenie chorób nerek"
          icon={<KidneysIcon />}
          isOpen={true}
        >
          <p className="text-sm desktop-2:text-2xl">
            Specjalizuję się w diagnostyce i leczeniu schorzeń nerek, oferując
            skuteczną pomoc w takich przypadkach jak:
            <ul className="list-disc pl-5 mt-2">
              <li>Kłębuszkowe zapalenie nerek</li>
              <li>Cewkowo-śródmiąższowe zapalenia nerek</li>
              <li>Przewlekła choroba nerek</li>
              <li>Kamicę układu moczowego</li>
              <li>Nawracające infekcje układu moczowego</li>
              <li>Schorzenia nerek w ciąży</li>
            </ul>
            <br />
            Usługi dodatkowe:
            <ul className="list-disc pl-5 mt-2">
              <li>
                Rehabilitacja i leczenie dietetyczne w chorobach nerek we
                współpracy z innymi specjalistami
              </li>
            </ul>
          </p>
        </Accordion>
        <Accordion
          header="Diagnostyka USG"
          icon={<KidneysIcon />}
          isOpen={true}
        >
          <p className="text-sm desktop-2:text-2xl">
            W trakcie wizyt wykonuję badania USG, ze szczególnym uwzględnieniem
            nerek i dróg moczowych, a także:
            <ul className="list-disc pl-5 mt-2">
              <li>USG jamy brzusznej</li>
              <li>
                Obrazowanie płuc i naczyń (tętnice szyjne, tętnice nerkowe,
                przetoki, grafty do hemodializ)
              </li>
            </ul>
          </p>
        </Accordion>
        <Accordion
          header="Leczenie nerkozastępcze"
          icon={<KidneysIcon />}
          isOpen={true}
        >
          <p className="text-sm desktop-2:text-2xl">
            Konsultacje w zakresie diagnostyki i wytwarzania dostępu do naczyń
            do hemodializy oraz dostępu do dializy otrzewnowej.
            <ul className="list-disc pl-5 mt-2">
              <li>
                Konsultacje dotyczące leczenia nerkozastępczego - hemodializa,
                dializa otrzewnowa
              </li>
              <li>
                Konsultacje w zakresie przygotowania do kwalifikacji do zabiegu
                przeszczepienia nerki
              </li>
              <li>
                Porady dotyczące rehabilitacji i diety we współpracy z innymi
                specjalistami
              </li>
            </ul>
          </p>
        </Accordion>
      </div>
      <div className="flex flex-col desktop-2:flex-row gap-5 mt-5">
        <InfoLabel
          icon="transferGreen"
          text="Ackeptuję płatność kartą lub przelewem"
          className="bg-[#338075] flex-1"
          textColor="white"
        />
        <InfoLabel
          icon="invoice"
          text="Wystawiam faktury"
          className="bg-[#338075] flex-1"
          textColor="white"
        />
      </div>
    </div>
  );
};
