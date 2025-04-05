import { useState, useCallback, useEffect } from "react";

export const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback(
    (e: MediaQueryListEvent | MediaQueryList) => {
      setTargetReached(e.matches);
    },
    []
  );

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);

    updateTarget(media);

    media.addEventListener("change", updateTarget);

    return () => media.removeEventListener("change", updateTarget);
  }, [width, updateTarget]);

  return targetReached;
};
