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
    <div className="box-border flex flex-col items-start p-[35px] gap-[10px] w-full max-w-none flex-1 bg-off-white border-[0.5px] border-gray-300 rounded-[20px] h-fit">
      <div className="flex items-center w-full">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-[0.75rem] tablet:text-[1rem] desktop-lg:text-[1.25rem] font-normal leading-none text-gray-800">
              {name}
            </h3>
            <div className="w-4 h-4 text-success">
              <TickIcon />
            </div>
          </div>
          <div className="flex items-center mt-1 gap-0.5">
            {STARS_ARRAY.map((index) => (
              <div
                key={`star-${index}`}
                className={`w-4 h-4 ${
                  index < rating ? "text-primary" : "text-gray-300"
                }`}
              >
                <StarIcon />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[0.75rem] tablet:text-[1rem] desktop-lg:text-[1.25rem] font-normal text-gray-600 w-full leading-relaxed">
        {review}
      </p>
    </div>
  );
});
