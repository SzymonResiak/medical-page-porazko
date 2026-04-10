"use client";

import { motion } from "framer-motion";

export const ScrollIndicator = () => {
  return (
    <div className="flex justify-center items-start my-[30px]" style={{ height: 65, overflow: "visible" }}>
      <motion.div
        className="relative bg-accent rounded-[50px]"
        style={{ width: 39 }}
        animate={{ height: [65, 65, 95, 95, 65] }}
        transition={{
          duration: 2.2,
          ease: "easeInOut",
          times: [0, 0.364, 0.5, 0.864, 1],
          repeat: Infinity,
        }}
      >
        <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: 10 }}>
          <svg
            width="18"
            height="26"
            viewBox="0 0 18 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 2v16M3 13l6 7 6-7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};
