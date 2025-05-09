import React, { FC } from "react";
import { Login } from "./components";

const LandingPage: FC = () => {
  return (
    <div className="w-full h-full bg-[url(/images/landing-background.webp)] bg-cover fixed top-0 left-0">
      <Login />
    </div>
  );
};

export default LandingPage;
