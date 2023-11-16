"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export const MotionSpring = ({ children }: { children: ReactNode }) => {
  const initial = { y: 550 };
  const transition = {
    type: "spring",
    bounce: 0.2,
    duration: 2,
  };
  const animate = { y: 0 };

  return (
    <motion.div initial={initial} transition={transition} animate={animate}>
      {children}
    </motion.div>
  );
};
