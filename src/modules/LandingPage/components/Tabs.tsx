"use client";

import { cn } from "@/libs/utils";
import { FC, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  active: number | string;
  items: { label: string; value: number | string }[];
  handleClick: (value: any) => void;
}

const Tabs: FC<Props> = ({ active, items = [], handleClick }) => {
  return (
    <div className="xl:relative rounded-2xl overflow-hidden flex border border-main-1 w-[calc(100vw-32px)] max-w-[362px]">
      {items.map((item) => (
        <div
          key={item.value}
          onClick={() => handleClick(item.value)}
          className={cn(
            "h-[54px] flex items-center justify-center cursor-pointer font-bold relative flex-1",
            active === item.value ? "text-white" : "text-main-1"
          )}
        >
          {active === item.value && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-main-1 z-0"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
