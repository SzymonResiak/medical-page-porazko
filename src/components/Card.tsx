import React from "react";
import Image from "next/image";
import { typography } from "../styles/typography";

interface CardProps {
  name: string;
  rating: number;
  review: string;
}

const Card: React.FC<CardProps> = ({ name, rating, review }) => {
  return (
    <div className="box-border flex flex-col items-start p-[35px] gap-[10px] w-full bg-[#FCFCFC] border-[0.5px] border-[rgba(128,128,128,0.55)] rounded-[20px]">
      <div className="flex items-center w-full">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className={`${typography["Body-Small-Regular"]} text-gray-800`}>
              {name}
            </h3>
            <Image
              src="/tick.svg"
              alt="Zweryfikowana opinia"
              width={20}
              height={20}
              className="text-green-500"
            />
          </div>
          <div className="flex items-center mt-1 gap-1">
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src="/star.svg"
                alt="Gwiazdka"
                width={20}
                height={20}
                className={index < rating ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
      </div>
      <p className={`${typography["Body-Small-Regular"]} text-gray-600`}>
        {review}
      </p>
    </div>
  );
};

export default Card;
