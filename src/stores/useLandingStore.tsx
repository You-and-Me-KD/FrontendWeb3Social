import { create } from "zustand";

export type TabType = "login" | "register" | "forgot-password" | "resend" | "reset-password";

type LandingStore = {
  tab: TabType;
};

const store = () => ({
  tab: "login" as LandingStore["tab"],
});

const useLandingStore = create<LandingStore>(store);
export default useLandingStore;

export function setLandingStore<T extends keyof LandingStore>(x: Pick<LandingStore, T>) {
  useLandingStore.setState(x);
}
