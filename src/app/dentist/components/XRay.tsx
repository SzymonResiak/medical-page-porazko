import { InfoLabel } from "@/components/InfoLabel";
import { RadioactiveIcon } from "@/components/icons/RadioactiveIcon";

export const XRay = () => {
  return (
    <div>
      {/* Desktop: with icon */}
      <div className="hidden tablet:block">
        <InfoLabel
          icon={<RadioactiveIcon />}
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
