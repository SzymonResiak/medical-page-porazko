import { Accordion } from "@/components/Accordion";
import { KidneysIcon } from "@/components/icons/KidneysIcon";
import { InfoLabel } from "@/components/InfoLabel";

export const Services = () => {
  return (
    <div>
      <p className="heading-h1-regular">
        Wszystko, czego potrzebujesz dla zdrowia nerek{" "}
        <span className="heading-h1-bold block md:inline">
          oferta diagnostyki i leczenia
        </span>
      </p>
      <p className="mt-5 heading-h4-regular">
        Diagnostyka i leczenie <br /> dopasowane do Twoich potrzeb.
      </p>

      <div className="mt-10 flex flex-col gap-5">
        <Accordion
          header="Diagnostyka i leczenie chorób nerek"
          icon={<KidneysIcon />}
          isOpen={true}
        >
          <div className="heading-h5-regular">
            <p>
              Specjalizuję się w diagnostyce i leczeniu schorzeń nerek, oferując
              skuteczną pomoc w takich przypadkach jak:
            </p>
            <ul className="list-disc pl-10 mt-10">
              <li>Kłębuszkowe zapalenie nerek</li>
              <li>Cewkowo-śródmiąższowe zapalenia nerek</li>
              <li>Przewlekła choroba nerek</li>
              <li>Kamicę układu moczowego</li>
              <li>Nawracające infekcje układu moczowego</li>
              <li>Schorzenia nerek w ciąży</li>
            </ul>
            <p className="mt-10">Usługi dodatkowe:</p>
            <ul className="list-disc pl-10 mt-2">
              <li>
                Rehabilitacja i leczenie dietetyczne w chorobach nerek we
                współpracy z innymi specjalistami
              </li>
            </ul>
          </div>
        </Accordion>
        <Accordion
          header="Diagnostyka USG"
          icon={<KidneysIcon />}
          isOpen={true}
        >
          <div className="heading-h5-regular">
            <p>
              W trakcie wizyt wykonuję badania USG, ze szczególnym
              uwzględnieniem nerek i dróg moczowych, a także:
            </p>
            <ul className="list-disc pl-10 mt-10">
              <li>USG jamy brzusznej</li>
              <li>
                Obrazowanie płuc i naczyń (tętnice szyjne, tętnice nerkowe,
                przetoki, grafty do hemodializ)
              </li>
            </ul>
          </div>
        </Accordion>
        <Accordion
          header="Leczenie nerkozastępcze"
          icon={<KidneysIcon />}
          isOpen={true}
        >
          <div className="heading-h5-regular">
            <p>
              Konsultacje w zakresie diagnostyki i wytwarzania dostępu do naczyń
              do hemodializy oraz dostępu do dializy otrzewnowej.
            </p>
            <ul className="list-disc pl-10 mt-10">
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
          </div>
        </Accordion>
      </div>
      <div className="flex flex-col desktop-lg:flex-row gap-5 mt-5">
        <InfoLabel
          icon="transferGreen"
          text="Akceptuję płatność kartą lub przelewem"
          className="bg-primary flex-1"
          textColor="white"
        />
        <InfoLabel
          icon="invoice"
          text="Wystawiam faktury"
          className="bg-primary flex-1"
          textColor="white"
        />
      </div>
    </div>
  );
};
