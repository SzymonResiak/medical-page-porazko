import { Accordion } from "@/components/Accordion";
import { ReactNode } from "react";

export interface FAQItem {
  question: string;
  answer: ReactNode;
}

interface FAQProps {
  items: FAQItem[];
}

export const FAQ = ({ items }: FAQProps) => {
  return (
    <div className="mb-12 desktop-lg:mb-38">
      <p className="text-[length:var(--fs-h1)] leading-[150%] text-center">
        Często zadawane <span className="font-bold">pytania</span>
      </p>
      <p className="mt-[30px] text-[length:var(--fs-h3)] leading-[150%] text-center">
        Znajdziesz tu kluczowe informacje o moich usługach, płatnościach i
        wizytach
      </p>
      <div className="mt-5 flex flex-col gap-5">
        {items.map((item, index) => (
          <Accordion key={index} header={item.question}>
            <div className="text-[length:var(--fs-h3)] leading-[150%]">{item.answer}</div>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
