import React from "react";
import { typography } from "../styles/typography";
import { TickIcon } from "./icons/TickIcon";
import { StarIcon } from "./icons/StarIcon";

interface CardProps {
  name: string;
  rating: number;
  review: string;
}

const Card: React.FC<CardProps> = ({ name, rating, review }) => {
  return (
    <div className="box-border flex flex-col items-start p-[35px] gap-[10px] w-full max-w-none flex-1 bg-[#FCFCFC] border-[0.5px] border-gray-300 rounded-[20px] h-fit">
      <div className="flex items-center w-full">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className={`${typography["Body-Small-Regular"]} text-gray-800`}>
              {name}
            </h3>
            <div className="w-5 h-5 text-green-500">
              <TickIcon />
            </div>
          </div>
          <div className="flex items-center mt-1 gap-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`w-5 h-5 ${
                  index < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                <StarIcon />
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className={`${typography["Body-Small-Regular"]} text-gray-600 w-full`}>
        {review}
      </p>
    </div>
  );
};

export default Card;
