import { Button, Input } from "@/components/common";

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-white font-bold">Remember Me</div>
      <Button variant="secondary" className="w-[356px]">
        Login to your Account
      </Button>
      <Button className="w-[356px]">Login to your Account</Button>
      <Input
        className="w-[356px]"
        suffix="SUF"
        placeholder=""
        label="I like this"
      />
    </div>
  );
}
