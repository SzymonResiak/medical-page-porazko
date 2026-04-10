"use client";

import Lottie from "lottie-react";
import { useState, useEffect } from "react";

export const LottieWatch = () => {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/animations/watch.json")
      .then((r) => r.json())
      .then(setAnimationData)
      .catch(() => {});
  }, []);

  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ width: "100%", height: "100%" }}
    />
  );
};
