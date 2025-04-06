"use client";

import { InfoLabel } from "@/components/InfoLabel";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const XRay = () => {
  const isMobile = useMediaQuery(768);

  return (
    <InfoLabel
      icon={!isMobile ? "radioactive" : undefined}
      text="Nowoczesna cyfrowa, diagnostyka rentgenowska. Obraz jest uzyskiwany natychmiastowo z minimalizacją szkodliwej dawki."
      className="bg-[#338075]"
      textColor="white"
    />
  );
};
