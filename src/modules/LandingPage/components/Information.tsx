"use client";

import { LogoIcon } from "@/assets";
import useTranslations from "@/hooks/useTranslations";
import { FC } from "react";
import Tabs from "./Tabs";
import { useRouter } from "@/i18n/navigation";
import { RouteEnum } from "@/types/route";
import { TabType } from "@/stores/useLandingStore";

interface Props {
  tab: TabType;
}

const Information: FC<Props> = ({ tab }) => {
  const { t } = useTranslations("login");
  const router = useRouter();
  const items = [
    {
      label: t("information.btn-login"),
      value: "login",
    },
    {
      label: t("information.btn-register"),
      value: "register",
    },
  ];

  const handleClick = (tab: TabType) => {
    router.push({
      pathname: RouteEnum.HOME,
      query: {
        tab,
      },
    });
  };

  return (
    <div className="w-[584px] max-w-full xl:absolute xl:left-20 2xl:left-[13%]">
      <div className="flex flex-col items-center justify-center xl:gap-9 gap-5">
        <LogoIcon />
        <div className="text-center">
          <h5 className="text-xl font-semibold">{t("information.welcome")}</h5>
          <h1 className="text-5xl xl:text-9xl font-[900] font-san2-serif xl:-mt-4">{t("information.name")}</h1>
          <p className="text-lg font-semibold mt-9 lg:mx-25 mx-0 xl:block hidden">{t("information.description")}</p>
        </div>
        <div className="flex items-center justify-center xl:mt-6 mt-2 xl:px-0 px-3">
          <Tabs active={tab} handleClick={handleClick} items={items} />
        </div>
      </div>
    </div>
  );
};
export default Information;
