import { InfoLabel } from "@/components/InfoLabel";

export const XRay = () => {
  return (
    <div>
      {/* Desktop: with icon */}
      <div className="hidden tablet:block">
        <InfoLabel
          icon="radioactive"
          text="Nowoczesna cyfrowa, diagnostyka rentgenowska. Obraz jest uzyskiwany natychmiastowo z minimalizacją szkodliwej dawki."
          className="bg-primary"
          textColor="white"
        />
      </div>
      {/* Mobile: without icon */}
      <div className="tablet:hidden">
        <InfoLabel
          text="Nowoczesna cyfrowa, diagnostyka rentgenowska. Obraz jest uzyskiwany natychmiastowo z minimalizacją szkodliwej dawki."
          className="bg-primary"
          textColor="white"
        />
      </div>
    </div>
  );
};
