import { create } from "zustand";

type LandingStore = {
  tab: "LOGIN" | "REGISTER";
};

const store = () => ({
  tab: "LOGIN" as LandingStore["tab"],
});

const useLandingStore = create<LandingStore>(store);
export default useLandingStore;

export function setLandingStore<T extends keyof LandingStore>(
  x: Pick<LandingStore, T>
) {
  useLandingStore.setState(x);
}
