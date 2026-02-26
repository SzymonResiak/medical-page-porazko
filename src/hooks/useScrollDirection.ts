"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type ScrollDirection = "up" | "down" | null;

export function useScrollDirection(threshold = 10, idleTimeout = 3000) {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isIdle, setIsIdle] = useState(true);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const scrollDirectionRef = useRef<ScrollDirection>(null);
  const lastScrollYRef = useRef(0);

  const resetIdleTimer = useCallback(() => {
    setIsIdle(false);
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }
    idleTimerRef.current = setTimeout(() => {
      setIsIdle(true);
    }, idleTimeout);
  }, [idleTimeout]);

  useEffect(() => {
    const getScrollY = () => document.body.scrollTop || window.scrollY || 0;
    lastScrollYRef.current = getScrollY();
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = getScrollY();
      const difference = Math.abs(scrollY - lastScrollYRef.current);

      setIsAtTop(scrollY < 10);

      if (difference >= threshold) {
        const direction: ScrollDirection = scrollY > lastScrollYRef.current ? "down" : "up";

        if (direction !== scrollDirectionRef.current) {
          scrollDirectionRef.current = direction;
          setScrollDirection(direction);
        }

        lastScrollYRef.current = scrollY > 0 ? scrollY : 0;
      }
      ticking = false;
    };

    const onScroll = () => {
      resetIdleTimer();
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    document.body.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);

    return () => {
      document.body.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, [threshold, resetIdleTimer]);

  return { scrollDirection, isAtTop, isIdle };
}
