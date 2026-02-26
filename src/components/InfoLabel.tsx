import { memo, ReactNode } from "react";

interface InfoLabelProps {
  icon?: ReactNode;
  text: string | { text: string; bold?: boolean; newLine?: boolean }[];
  className?: string;
  textColor?: "white" | "black";
}

export const InfoLabel = memo(function InfoLabel({
  icon,
  text,
  className,
  textColor = "black",
}: InfoLabelProps) {
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
      {icon && (
        <div className="w-[3.125rem] h-[3.125rem] flex items-center justify-center">
          {icon}
        </div>
      )}
      <span
        className={`text-[0.75rem] tablet:text-[1.25rem] font-normal leading-none ${
          textColor === "white" ? "text-white" : "text-black"
        }`}
      >
        {renderText()}
      </span>
    </div>
  );
});
