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
      <p className="heading-h1-regular desktop-lg:text-center">
        Często zadawane <span className="heading-h1-bold">pytania</span>
      </p>
      <h4 className="mt-7 heading-h4-regular desktop-lg:text-center">
        Znajdziesz tu kluczowe informacje o moich usługach, płatnościach i
        wizytach
      </h4>
      <div className="mt-12 flex flex-col gap-5">
        {items.map((item, index) => (
          <Accordion key={index} header={item.question} isOpen={false}>
            <div className="heading-h5-regular">{item.answer}</div>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
