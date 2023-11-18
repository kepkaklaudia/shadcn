"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export const MotionHover = ({ children }: { children: ReactNode }) => {
  const whileHover = {
    scale: 1.05,
    y: -5,
    transition: { duration: 0.2 },
  };
  const whileTap = {
    scale: 0.98,
    y: -5,
  };
  const transition = { type: "spring", stiffness: 80, damping: 8 };

  return (
    <>
      <motion.div
        transition={transition}
        whileTap={whileTap}
        whileHover={whileHover}
      >
        {children}
      </motion.div>
    </>
  );
};
