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
      <p className="text-[length:var(--fs-h1)] leading-[150%] mb-5">{title}</p>
      {(() => {
        const desktopOpinions = opinions.filter(o => !o.mobileOnly);
        const cols = desktopOpinions.length === 2 ? "tablet:grid-cols-2" : "tablet:grid-cols-3";
        return (
          <div className={`grid grid-cols-1 ${cols} gap-[1.25rem] items-end w-full max-w-none`}>
            {opinions.map((opinion) => (
              <div key={opinion.name} className={opinion.mobileOnly ? "tablet:hidden" : ""}>
                <Card
                  name={opinion.name}
                  rating={opinion.rating}
                  review={opinion.review}
                />
              </div>
            ))}
          </div>
        );
      })()}
    </div>
  );
};
