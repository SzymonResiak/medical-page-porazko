import { Card } from "@/components/Card";
import { Opinion } from "@/data/opinions";
import { ReactNode } from "react";

interface OpinionsProps {
  title: ReactNode;
  opinions: Opinion[];
}

export const Opinions = ({ title, opinions }: OpinionsProps) => {
  return (
    <div className="w-full max-w-none">
      <p className="text-2xl desktop-lg:text-7xl mb-8">{title}</p>
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-[1.25rem] items-end w-full max-w-none">
        {opinions.map((opinion) => (
          <Card
            key={opinion.name}
            name={opinion.name}
            rating={opinion.rating}
            review={opinion.review}
          />
        ))}
      </div>
    </div>
  );
};
