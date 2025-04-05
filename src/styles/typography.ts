import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const typography = {
  // Headings
  "Heading-H1-Regular":
    "text-[25px] mobile:text-[25px] tablet:text-[70px] font-normal leading-none font-noto",
  "Heading-H1-Bold":
    "text-[25px] mobile:text-[25px] tablet:text-[70px] font-bold leading-[150%] font-noto",
  "Heading-H2-Regular":
    "text-[20px] mobile:text-[20px] tablet:text-[64px] font-normal leading-none font-noto",
  "Heading-H2-Bold":
    "text-[20px] mobile:text-[20px] tablet:text-[64px] font-bold leading-[150%] font-noto",
  "Heading-H3-Regular":
    "text-[18px] mobile:text-[18px] tablet:text-[50px] font-normal leading-none font-noto",
  "Heading-H3-Bold":
    "text-[18px] mobile:text-[18px] tablet:text-[50px] font-bold leading-[150%] font-noto",
  "Heading-H4-Regular":
    "text-[16px] mobile:text-[16px] tablet:text-[40px] font-normal leading-none font-noto",
  "Heading-H4-Bold":
    "text-[16px] mobile:text-[16px] tablet:text-[40px] font-bold leading-[150%] font-noto",
  "Heading-H5-Regular":
    "text-[14px] mobile:text-[14px] tablet:text-[30px] font-normal leading-none font-noto",
  "Heading-H5-Bold":
    "text-[14px] mobile:text-[14px] tablet:text-[30px] font-bold leading-[150%] font-noto",

  // Body
  "Body-Medium-Regular":
    "text-[14px] mobile:text-[14px] tablet:text-[25px] font-normal leading-none font-noto",
  "Body-Medium-Bold":
    "text-[14px] mobile:text-[14px] tablet:text-[25px] font-bold leading-[150%] font-noto",
  "Body-Small-Regular":
    "text-[12px] mobile:text-[12px] tablet:text-[20px] font-normal leading-none font-noto",
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
