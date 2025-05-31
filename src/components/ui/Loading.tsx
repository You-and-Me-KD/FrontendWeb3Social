"use client";
import { LogoIcon } from "@/assets";
import useTranslations from "@/hooks/useTranslations";
import { motion } from "framer-motion";
import { FC } from "react";
const bars = [
  "#41d04f",
  "#50d551",
  "#67dc55",
  "#7de358",
  "#99eb5c",
  "#b1f35f",
  "#c7f962",
  "#d6fe65",
];

interface Props {
  title?: string;
}

export const LoadingAllPage: FC<Props> = ({ title }) => {
  const { t } = useTranslations("common");

  return (
    <section className="bg-loader-bg z-[99999] flex items-center justify-center w-full h-screen flex-col">
      <div className="w-20 h-20 rounded-7xl bg-button-secondary flex items-center justify-center">
        <LogoIcon width={36} />
      </div>
      <h1 className="text-xl font-[900] font-san2-serif mt-6">
        {t("common.title")}
      </h1>
      <h1 className="text-xs font-[900] mt-1">{title ?? t("common.loading")}</h1>
      <div className="flex items-center justify-center h-10 gap-1 mt-10">
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            className="w-1 rounded"
            style={{ backgroundColor: bar }}
            initial={{ height: "30%" }}
            animate={{ height: ["30%", "100%", "30%"] }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              ease: "easeIn",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default LoadingAllPage;
