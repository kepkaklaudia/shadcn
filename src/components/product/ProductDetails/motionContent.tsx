"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MotionContentProps } from "@/libs/types";

export const MotionContent = ({ children, ownKey }: MotionContentProps) => {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          className="w-full h-full"
          key={ownKey}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
