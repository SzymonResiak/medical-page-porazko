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
import { TransferWhiteIcon } from "./icons/TransferWhite";
import { TransferGreenIcon } from "./icons/TransferGreen";
import { InvoiceIcon } from "./icons/Invoice";

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
    | "invoice";
  text: string | { text: string; bold?: boolean; newLine?: boolean }[];
  className?: string;
  textColor?: "white" | "black";
}

export const InfoLabel = ({
  icon,
  text,
  className,
  textColor = "black",
}: InfoLabelProps) => {
  const IconComponent = icon
    ? {
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
      }[icon]
    : null;

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
        className={`text-[0.875rem] mobile:text-[0.75rem] tablet:text-[1.25rem] font-normal leading-none ${
          textColor === "white" ? "text-white" : "text-black"
        }`}
      >
        {renderText()}
      </span>
    </div>
  );
};
