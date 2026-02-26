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
      <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-off-white/80 backdrop-blur-md border border-dark-gray rounded-full shadow-lg">
        <Link
          href="/"
          className="flex items-center gap-2 text-dark-gray text-sm font-medium active:scale-95 transition-transform"
        >
          <div className="w-5 h-5"><BackIcon /></div>
          <span>Wróć</span>
        </Link>

        <div className="w-px h-5 bg-dark-gray/30" />

        <a
          href={CONTACT.phoneLink}
          className="flex items-center gap-2 text-dark-gray text-sm font-medium active:scale-95 transition-transform"
        >
          <div className="w-5 h-5"><PhoneIcon /></div>
          <span>Zadzwoń</span>
        </a>
      </div>
    </div>
  );
};
