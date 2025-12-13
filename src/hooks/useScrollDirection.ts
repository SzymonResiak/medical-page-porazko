"use client";

import { useState, useEffect, useRef } from "react";

type ScrollDirection = "up" | "down" | null;

export function useScrollDirection(threshold = 10, idleTimeout = 3000) {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isIdle, setIsIdle] = useState(true);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Use body.scrollTop because html is position:fixed (iOS scroll fix)
    const getScrollY = () => document.body.scrollTop || window.scrollY || 0;

    let lastScrollY = getScrollY();
    let ticking = false;

    const resetIdleTimer = () => {
      setIsIdle(false);
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      idleTimerRef.current = setTimeout(() => {
        setIsIdle(true);
      }, idleTimeout);
    };

    const updateScrollDirection = () => {
      const scrollY = getScrollY();
      const difference = Math.abs(scrollY - lastScrollY);

      // Check if at top
      setIsAtTop(scrollY < 10);

      // Only update if scrolled more than threshold
      if (difference < threshold) {
        ticking = false;
        return;
      }

      const direction = scrollY > lastScrollY ? "down" : "up";

      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      resetIdleTimer();
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    // Listen on body (where scroll actually happens) and window as fallback
    document.body.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);

    return () => {
      document.body.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, [scrollDirection, threshold, idleTimeout]);

  return { scrollDirection, isAtTop, isIdle };
}
