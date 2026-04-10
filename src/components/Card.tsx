import React, { memo } from "react";

import { TickIcon } from "./icons/TickIcon";
import { StarIcon } from "./icons/StarIcon";

interface CardProps {
  name: string;
  rating: number;
  review: string;
}

const STARS_ARRAY = Array.from({ length: 5 }, (_, i) => i);

export const Card: React.FC<CardProps> = memo(function Card({ name, rating, review }) {
  return (
    <div className="box-border flex flex-col items-start p-5 tablet:p-[35px] gap-[10px] w-full max-w-none flex-1 bg-off-white border-[0.5px] border-gray-300 rounded-[20px] h-fit">
      <div className="flex items-center gap-[10px]">
        <h3 className="text-[1.25rem] font-medium tablet:text-[1rem] tablet:font-normal desktop:text-[length:var(--fs-h3)] desktop:font-normal leading-none desktop:leading-[34px] text-gray-800">
          {name}
        </h3>
        <div className="w-4 h-4 desktop:w-[25px] desktop:h-[25px] text-success flex-shrink-0">
          <TickIcon />
        </div>
      </div>
      <div className="flex items-center gap-0.5">
        {STARS_ARRAY.map((index) => (
          <div
            key={`star-${index}`}
            className={`w-6 h-6 ${
              index < rating ? "text-accent" : "text-gray-300"
            }`}
          >
            <StarIcon />
          </div>
        ))}
      </div>
      <p className="text-[0.75rem] tablet:text-[1rem] desktop:text-[length:var(--fs-h4)] font-normal text-gray-600 w-full leading-relaxed desktop:leading-[27px]">
        {review}
      </p>
    </div>
  );
});
