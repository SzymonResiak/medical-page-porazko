"use client";

import { InfoLabel } from "@/components/InfoLabel";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BREAKPOINTS } from "@/data/constants";

export const XRay = () => {
  const isMobile = useMediaQuery(BREAKPOINTS.TABLET - 1);

  return (
    <InfoLabel
      icon={!isMobile ? "radioactive" : undefined}
      text="Nowoczesna cyfrowa, diagnostyka rentgenowska. Obraz jest uzyskiwany natychmiastowo z minimalizacją szkodliwej dawki."
      className="bg-primary"
      textColor="white"
    />
  );
};
