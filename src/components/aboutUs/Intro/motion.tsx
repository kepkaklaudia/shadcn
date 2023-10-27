"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MotionAppearProps, MotionScrollOutProps } from "@/libs/types";

export const MotionScrollOut = ({ children }: MotionScrollOutProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const xPosition = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 100]);

  return (
    <motion.div ref={ref} style={{ x: xPosition }}>
      <motion.div>{children} </motion.div>
    </motion.div>
  );
};

export const MotionAppear = ({
  firstItem,
  secondItem,
  thirdItem,
}: MotionAppearProps) => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <motion.div
        className="block w-full mx-auto 2xl:grid 2xl:grid-cols-[1fr_1.5fr] "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="2xl:order-2  2xl:row-span-2 2xl:self-center"
          variants={item}
        >
          {firstItem}
        </motion.div>
        <motion.div className="2xl:order-1" variants={item}>
          {secondItem}
        </motion.div>
        <motion.div className="2xl:order-3" variants={item}>
          {thirdItem}
        </motion.div>
      </motion.div>
    </>
  );
};
