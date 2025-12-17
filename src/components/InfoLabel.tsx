import { memo } from "react";
import { StarIcon } from "./icons/StarIcon";
import { DownIcon } from "./icons/DownIcon";
import { TopIcon } from "./icons/TopIcon";
import { TickIcon } from "./icons/TickIcon";
import { MedicalDocIcon } from "./icons/MedicalDocIcon";
import { BackIcon } from "./icons/BackIcon";
import { PhoneIcon } from "./icons/PhoneIcon";
import { ToothIcon } from "./icons/ToothIcon";
import { RadioactiveIcon } from "./icons/RadioactiveIcon";
import { TranslateIcon } from "./icons/TranslateIcon";
import { TransferIcon } from "./icons/TransferIcon";
import { InvoiceIcon } from "./icons/Invoice";
import { CashIcon } from "./icons/CashIcon";

interface InfoLabelProps {
  icon?:
    | "star"
    | "down"
    | "top"
    | "tick"
    | "medicalDoc"
    | "back"
    | "phone"
    | "tooth"
    | "radioactive"
    | "translate"
    | "transferGreen"
    | "transferWhite"
    | "invoice"
    | "cash";
  text: string | { text: string; bold?: boolean; newLine?: boolean }[];
  className?: string;
  textColor?: "white" | "black";
}

// Komponenty wrapper dla TransferIcon z wariantami
const TransferGreenIcon = () => <TransferIcon variant="green" />;
const TransferWhiteIcon = () => <TransferIcon variant="white" />;

// Mapowanie ikon - stała, nie tworzona przy każdym renderze
const ICON_MAP = {
  star: StarIcon,
  down: DownIcon,
  top: TopIcon,
  tick: TickIcon,
  medicalDoc: MedicalDocIcon,
  back: BackIcon,
  phone: PhoneIcon,
  tooth: ToothIcon,
  radioactive: RadioactiveIcon,
  translate: TranslateIcon,
  transferGreen: TransferGreenIcon,
  transferWhite: TransferWhiteIcon,
  invoice: InvoiceIcon,
  cash: CashIcon,
} as const;

export const InfoLabel = memo(function InfoLabel({
  icon,
  text,
  className,
  textColor = "black",
}: InfoLabelProps) {
  const IconComponent = icon ? ICON_MAP[icon] : null;

  const renderText = () => {
    if (typeof text === "string") {
      return text;
    }

    return text.map((part, index) => (
      <span key={index} className={part.bold ? "font-bold" : ""}>
        {part.text}
        {part.newLine && <br />}
      </span>
    ));
  };

  return (
    <div
      className={
        "flex flex-row items-center gap-[1.875rem] p-[1.25rem] rounded-[1.25rem] " +
        className
      }
    >
      {IconComponent && (
        <div className="w-[3.125rem] h-[3.125rem] flex items-center justify-center">
          <IconComponent />
        </div>
      )}
      <span
        className={`body-medium-regular ${
          textColor === "white" ? "text-white" : "text-black"
        }`}
      >
        {renderText()}
      </span>
    </div>
  );
});
