"use client";

import { motion, useInView } from "framer-motion";
import { useRef, memo, Children, isValidElement } from "react";

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// Animacja przy wejściu na stronę (mount animation)
export const FadeIn = memo(function FadeIn({
  children,
  className,
  delay = 0,
}: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

// Animacja scroll (dla elementów poniżej fold)
export const ScrollAnimation = memo(function ScrollAnimation({
  children,
  className,
  delay = 0,
}: AnimationProps) {
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

// Kontener ze staggered animacjami dzieci
interface StaggeredContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const StaggeredContainer = memo(function StaggeredContainer({
  children,
  className,
  staggerDelay = 0.1,
}: StaggeredContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const customContainerVariants = {
    ...containerVariants,
    visible: {
      ...containerVariants.visible,
      transition: {
        ...containerVariants.visible.transition,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={customContainerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return (
            <motion.div variants={itemVariants}>
              {child}
            </motion.div>
          );
        }
        return child;
      })}
    </motion.div>
  );
});
