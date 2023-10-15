"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MotionShuffleProps } from "@/libs/types";

export const MotionShuffle = ({ children, x }: MotionShuffleProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, { once: true });

  const initial = {
    x,
  };
  const transition = {
    duration: 1,
    type: "spring",
    bounce: 0.1,
  };
  const animate = {
    x: 0,
  };

  return (
    <motion.div ref={elementRef}>
      <motion.div
        initial={initial}
        transition={transition}
        animate={isInView ? animate : {}}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
