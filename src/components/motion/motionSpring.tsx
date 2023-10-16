"use client";

import { motion } from "framer-motion";
import { MotionProps } from "@/libs/types";

export const MotionSpring = ({ children }: MotionProps) => {
  const initial = { y: 150 };
  const transition = {
    type: "spring",
    bounce: 0.2,
    duration: 2,
  };
  const whileInView = {
    y: 0,
  };
  const viewport = {
    once: true,
    amount: 0.3,
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
