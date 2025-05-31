import { cn } from "@/libs/utils";
import { motion } from "framer-motion";
import React from "react";

type AnimatedPanelProps = {
  visible: boolean;
  children: React.ReactNode;
};

const AnimatedPanel: React.FC<AnimatedPanelProps> = ({ visible, children }) => (
  <motion.div
    animate={{
      x: visible ? 0 : 500,
      opacity: visible ? 1 : 0,
      zIndex: visible ? 2 : 1,
    }}
    initial={false}
    transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
    className={cn("xl:absolute xl:right-20 2xl:right-[13%] max-w-full", {
      hidden: !visible,
    })}
  >
    {children}
  </motion.div>
);

export default AnimatedPanel;
