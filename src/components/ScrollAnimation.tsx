"use client";

import { motion, useInView } from "framer-motion";
import { useRef, memo } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollAnimation = memo(function ScrollAnimation({
  children,
  className,
  delay = 0,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 30,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: isInView ? delay : 0,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});
