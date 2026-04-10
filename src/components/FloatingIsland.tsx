"use client";

import Link from "next/link";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useEffect, useState } from "react";
import { CONTACT } from "@/data/constants";
import { BackIcon } from "./icons/BackIcon";
import { PhoneIcon } from "./icons/PhoneIcon";

export const FloatingIsland = () => {
  const { scrollDirection, isIdle } = useScrollDirection(20, 5000);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const getScrollPercent = () => {
      const el = document.body;
      const scrollTop = el.scrollTop || document.documentElement.scrollTop || 0;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      return scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    };

    const onScroll = () => setScrollPercent(getScrollPercent());

    document.body.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => {
      document.body.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Show when: past 20% of page AND (scrolling up OR idle for 5s)
  const pastThreshold = scrollPercent >= 20;
  const isVisible = pastThreshold && (scrollDirection === "up" || isIdle);

  return (
    <div
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        tablet-landscape:hidden desktop:hidden
        transition-all duration-300 ease-in-out
        ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
        }
      `}
    >
      <div className="inline-flex items-stretch shadow-lg rounded-[30px] overflow-hidden">
        {/* Left — wróć */}
        <Link
          href="/"
          className="flex items-center gap-[15px] px-5 py-5 bg-dark-gray rounded-l-[30px] active:scale-95 transition-transform"
        >
          <div className="w-[36px] h-[36px] text-off-white flex-shrink-0 rotate-180"><BackIcon /></div>
          <span className="text-off-white text-[18px] leading-[25px]">wróć</span>
        </Link>

        {/* Right — zadzwoń */}
        <a
          href={CONTACT.phoneLink}
          className="flex items-center gap-[15px] px-5 py-5 bg-accent rounded-r-[30px] active:scale-95 transition-transform"
        >
          <div className="w-[36px] h-[36px] text-off-white flex-shrink-0"><PhoneIcon /></div>
          <span className="text-off-white text-[18px] leading-[25px]">zadzwoń</span>
        </a>
      </div>
    </div>
  );
};
