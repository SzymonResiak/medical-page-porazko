"use client";

import Link from "next/link";
import { BackIcon } from "@/components/icons/BackIcon";
import { LottieWatch } from "@/components/LottieWatch";
import { useState, useEffect } from "react";

type Variant = { bg: string; textColor: string; subtitleColor: string };

const VARIANTS: Variant[] = [
  { bg: "#F0F2A6", textColor: "#006AFF", subtitleColor: "#2E2E2E" },
  { bg: "#006AFF", textColor: "#F0F2A6", subtitleColor: "#FAFAFA" },
];

export default function NotFound() {
  const [variant, setVariant] = useState<Variant>(VARIANTS[0]);

  useEffect(() => {
    setVariant(VARIANTS[Math.floor(Math.random() * VARIANTS.length)]);
  }, []);

  return (
    <div
      className="relative flex flex-col justify-center items-start p-[30px] tablet:p-[60px] desktop:p-[80px] gap-[50px] desktop:gap-[100px] w-full max-w-[1380px] mx-auto min-h-[calc(100dvh-120px)] desktop:min-h-0 desktop:h-[964px] border border-[rgba(128,128,128,0.55)] rounded-[30px] overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: variant.bg }}
    >
      {/* Text section */}
      <div className="flex flex-col gap-[20px] pl-0 desktop:pl-[60px] w-full">
        {/* 404 with animation anchored inside "0" */}
        <div className="leading-none text-[clamp(5rem,20vw,18.75rem)] font-bold" style={{ color: variant.textColor }}>
          <span>4</span>
          <span className="relative inline-block">
            <span>0</span>
            {/* Animation anchored to the "0" — centered inside it */}
            <span className="absolute" style={{ left: "34%", top: "5.5%", width: "32%", aspectRatio: "1.65/1" }}>
              <LottieWatch />
            </span>
          </span>
          <span>4</span>
        </div>

        <p
          className="text-[clamp(1.5rem,3.5vw,3.125rem)] leading-[1.36] font-normal"
          style={{ color: variant.subtitleColor }}
        >
          Nie znaleziono strony
        </p>

        <p
          className="text-[length:var(--fs-h3)] leading-[34px] max-w-[720px]"
          style={{ color: variant.subtitleColor }}
        >
          Wygląda na to, że ta strona jest obecnie niedostępna lub została przeniesiona.
          Sprawdź adres lub wróć do strony głównej.
        </p>
      </div>

      {/* CTA */}
      <div className="desktop:pl-[60px]">
        <Link href="/" className="flex items-center">
          <div className="bg-dark-gray text-off-white rounded-[20px] tablet:rounded-[30px] px-4 py-3 tablet:px-5 tablet:py-5 text-sm tablet:text-[length:var(--fs-h3)] tablet:leading-[34px] whitespace-nowrap">
            wróć na stronę główną
          </div>
          <div className="w-[44px] h-[44px] tablet:w-[75px] tablet:h-[75px] rounded-full bg-dark-gray flex items-center justify-center flex-shrink-0 ml-[-1px] text-off-white">
            <div className="w-[22px] h-[22px] tablet:w-[38px] tablet:h-[38px]"><BackIcon /></div>
          </div>
        </Link>
      </div>
    </div>
  );
}
