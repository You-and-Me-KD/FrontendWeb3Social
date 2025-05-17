"use client";
import React, { FC, useState } from "react";
import { Login, Information, Decoration, AnimatedPanel } from "./components";
import Register from "./components/Register";
import { useLandingStore } from "@/stores";

const LandingPage: FC = () => {
  const tab = useLandingStore((state) => state.tab);

  return (
    <section className="w-full xl:h-full h-auto bg-[url(/images/landing-background.webp)] bg-no-repeat bg-center bg-cover xl:fixed top-0 left-0 xl:px-0 px-3 xl:py-0 py-6">
      <div className="md:relative flex xl:flex-row flex-col items-center justify-center w-full h-full xl:gap-0 gap-5">
        <Decoration />
        <Information />

        <AnimatedPanel visible={tab === "LOGIN"}>
          <Login />
        </AnimatedPanel>

        <AnimatedPanel visible={tab === "REGISTER"}>
          <Register />
        </AnimatedPanel>
      </div>
    </section>
  );
};

export default LandingPage;
