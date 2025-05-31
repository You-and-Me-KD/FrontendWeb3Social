"use client";

import { motion } from "framer-motion";
import React from "react";

import { type FCC } from "@/types";

interface Props {
  duration?: number;
  children: React.ReactNode;
}

export const RevealHover: FCC<Props> = ({ duration = 0.25, children }) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative overflow-hidden"
    >
      <motion.div
        variants={{
          initial: {
            y: 0,
          },
          hovered: {
            y: "-100%",
          },
        }}
        transition={{
          duration,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center gap-1"
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute inset-0"
        variants={{
          initial: {
            y: "100%",
          },
          hovered: {
            y: 0,
          },
        }}
        transition={{
          duration,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
