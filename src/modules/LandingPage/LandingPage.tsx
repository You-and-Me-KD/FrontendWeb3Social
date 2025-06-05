"use client";
import useSearchParams from "@/hooks/useSearchParams";
import { FC, useMemo } from "react";
import { AnimatedPanel, Decoration, ForgotPassword, Information, Login, Register, Resend, ResetPassword } from "./components";
import { TabType } from "@/stores/useLandingStore";

const LandingPage: FC = () => {
  const { searchParams } = useSearchParams();
  const tab = (searchParams.get("tab") || "login") as TabType;
  const convertActiveTab = useMemo(() => {
    return ["forgot-password", "login", "reset-password"].includes(tab) ? "login" : "register";
  }, [tab]);
  return (
    <section className="w-full xl:h-full h-auto bg-[url(/images/landing-background.webp)] bg-no-repeat bg-center bg-cover xl:fixed top-0 left-0 xl:px-0 px-3 xl:py-0 py-6">
      <div className="md:relative flex xl:flex-row flex-col items-center justify-center w-full h-full xl:gap-0 gap-5">
        <Decoration />
        <Information tab={convertActiveTab} />

        <AnimatedPanel visible={tab === "login"}>
          <Login />
        </AnimatedPanel>

        <AnimatedPanel visible={tab === "register"}>
          <Register />
        </AnimatedPanel>

        <AnimatedPanel visible={tab === "resend"}>
          <Resend />
        </AnimatedPanel>

        <AnimatedPanel visible={tab === "forgot-password"}>
          <ForgotPassword />
        </AnimatedPanel>

        <AnimatedPanel visible={tab === "reset-password"}>
          <ResetPassword />
        </AnimatedPanel>
      </div>
    </section>
  );
};

export default LandingPage;
