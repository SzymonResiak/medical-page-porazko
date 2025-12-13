import { useCallback, useSyncExternalStore } from "react";
import { BREAKPOINTS } from "@/data/constants";

// Cache dla MediaQueryList - zapobiega tworzeniu wielu listenerów
const mediaQueryCache = new Map<string, MediaQueryList>();

function getMediaQueryList(query: string): MediaQueryList {
  if (!mediaQueryCache.has(query)) {
    mediaQueryCache.set(query, window.matchMedia(query));
  }
  return mediaQueryCache.get(query)!;
}

/**
 * Hook do sprawdzania media query
 * @param width - Maksymalna szerokość ekranu
 * @returns true jeśli viewport jest mniejszy lub równy podanej szerokości
 */
export const useMediaQuery = (width: number): boolean => {
  const query = `(max-width: ${width}px)`;

  const subscribe = useCallback(
    (callback: () => void) => {
      if (typeof window === "undefined") return () => {};

      const mediaQuery = getMediaQueryList(query);
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery.removeEventListener("change", callback);
    },
    [query]
  );

  const getSnapshot = useCallback(() => {
    if (typeof window === "undefined") return false;
    return getMediaQueryList(query).matches;
  }, [query]);

  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};

// Predefiniowane hooki dla popularnych breakpointów
export const useIsMobile = () => useMediaQuery(BREAKPOINTS.TABLET - 1);
export const useIsTablet = () => useMediaQuery(BREAKPOINTS.DESKTOP - 1);
export const useIsDesktop = () => !useMediaQuery(BREAKPOINTS.DESKTOP - 1);
