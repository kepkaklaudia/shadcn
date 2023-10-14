"use client";

import { motion } from "framer-motion";
import { MotionProps } from "@/libs/types";

export const MotionOpacity = ({ children }: MotionProps) => {
  const initial = { opacity: 0 };
  const transition = {
    duration: 0.7,
  };
  const whileInView = {
    opacity: 1,
  };
  const viewport = {
    once: true,
    amount: 0.2,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};
