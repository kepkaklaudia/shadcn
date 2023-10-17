"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MotionProps } from "@/libs/types";

export const MotionScale = ({ children }: MotionProps) => {
  const whileHover = {
    scale: 1.05,
  };

  const transition = { type: "spring", stiffness: 80 };

  return (
    <>
      <AnimatePresence>
        <motion.div transition={transition} whileHover={whileHover}>
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
