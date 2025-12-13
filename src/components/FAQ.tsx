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
      <p className="text-2xl desktop-lg:text-7xl desktop-lg:text-center">
        Często zadawane <br /> <span className="font-bold">pytania</span>
      </p>
      <p className="mt-7 text-lg desktop-lg:text-4xl desktop-lg:text-center">
        Znajdziesz tu kluczowe informacje o moich usługach, płatnościach i
        wizytach
      </p>
      <div className="mt-12 flex flex-col gap-5">
        {items.map((item, index) => (
          <Accordion key={index} header={item.question} isOpen={false}>
            <div className="text-sm desktop-lg:text-2xl">{item.answer}</div>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
