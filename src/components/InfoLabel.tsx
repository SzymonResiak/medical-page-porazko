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
        "flex flex-row items-center gap-[30px] p-[20px] rounded-[20px] " +
        className
      }
    >
      {IconComponent && (
        <div className="w-[50px] h-[50px] flex items-center justify-center">
          <IconComponent />
        </div>
      )}
      <span
        className={`text-[14px] mobile:text-[12px] tablet:text-[20px] font-normal leading-none ${
          textColor === "white" ? "text-white" : "text-black"
        }`}
      >
        {renderText()}
      </span>
    </div>
  );
};
