import { Accordion } from "@/components/Accordion";
import { KidneysIcon } from "@/components/icons/KidneysIcon";
import { InfoLabel } from "@/components/InfoLabel";
import { TransferIcon } from "@/components/icons/TransferIcon";
import { InvoiceIcon } from "@/components/icons/InvoiceIcon";
import { CONTACT } from "@/data/constants";

export const Services = () => {
  return (
    <div>
      <p className="text-[length:var(--fs-h1)] leading-[150%]">
        Wszystko, czego potrzebujesz dla zdrowia nerek <br />
        <span className="font-bold block tablet:inline">
          oferta diagnostyki i leczenia
        </span>
      </p>
      <p className="mt-5 text-[length:var(--fs-h2)] desktop:text-[length:var(--fs-h1)] leading-[150%]">
        Diagnostyka i leczenie dopasowane do Twoich potrzeb.
      </p>

      <div className="mt-[50px] text-right flex flex-col gap-[10px]">
        <p className="text-[length:var(--fs-h3)] leading-[150%]">
          Skontaktuj się z dr hab.n.med. Tomaszem Porażko, aby umówić wizytę
        </p>
        {/* Mobile: small dark button */}
        <div className="flex justify-end tablet:hidden">
          <a
            href={CONTACT.phoneLink}
            className="inline-flex items-center justify-center bg-dark-gray text-off-white text-[12px] leading-[16px] rounded-[15px] px-[12px] py-[12px] hover:opacity-80 transition-opacity"
          >
            zadzwoń
          </a>
        </div>
        {/* Tablet+: bold phone number */}
        <a
          href={CONTACT.phoneLink}
          className="hidden tablet:inline text-[length:var(--fs-h3)] leading-[150%] hover:underline"
        >
          Zadzwoń: {CONTACT.phone}
        </a>
      </div>

      <div className="mt-[50px] flex flex-col gap-5">
        <Accordion
          header="Diagnostyka i leczenie chorób nerek"
          icon={<KidneysIcon />}
          isOpen={true}
        >
          <div className="text-[length:var(--fs-h3)] leading-[150%]">
            <p>
              Specjalizuję się w diagnostyce i leczeniu schorzeń nerek, oferując
              skuteczną pomoc w takich przypadkach jak:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>Kłębuszkowe zapalenie nerek</li>
              <li>Cewkowo-śródmiąższowe zapalenia nerek</li>
              <li>Przewlekła choroba nerek</li>
              <li>Kamicę układu moczowego</li>
              <li>Nawracające infekcje układu moczowego</li>
              <li>Schorzenia nerek w ciąży</li>
            </ul>
            <p className="mt-4">Usługi dodatkowe:</p>
            <ul className="list-disc pl-5 mt-2">
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
          <div className="text-[length:var(--fs-h3)] leading-[150%]">
            <p>
              W trakcie wizyt wykonuję badania USG, ze szczególnym
              uwzględnieniem nerek i dróg moczowych, a także:
            </p>
            <ul className="list-disc pl-5 mt-2">
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
          <div className="text-[length:var(--fs-h3)] leading-[150%]">
            <p>
              Konsultacje w zakresie diagnostyki i wytwarzania dostępu do naczyń
              do hemodializy oraz dostępu do dializy otrzewnowej.
            </p>
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
          </div>
        </Accordion>
      </div>
      <div className="flex flex-col desktop-lg:flex-row gap-[10px] desktop-lg:gap-5 mt-[50px]">
        <InfoLabel
          icon={<TransferIcon variant="green" />}
          text="Akceptuję płatność kartą lub przelewem"
          className="bg-primary flex-1"
          textColor="white"
        />
        <InfoLabel
          icon={<InvoiceIcon />}
          text="Wystawiam faktury"
          className="bg-primary flex-1"
          textColor="white"
        />
      </div>
    </div>
  );
};
