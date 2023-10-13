"use client";

import { MotionHoverProps } from "@/libs/types";
import { AnimatePresence, motion } from "framer-motion";

export const MotionHover = ({
  children,
  rotateY,
  skewY,
  verticalBox,
}: MotionHoverProps) => {
  const whileHover = {
    scale: 1,
    rotateY: rotateY,
    borderRadius: 10,
    skewY: skewY,
    boxShadow: `${verticalBox} -10px 34px -3px rgba(229, 229, 229, 1)`,
  };

  const transition = { type: "spring", stiffness: 100 };

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
