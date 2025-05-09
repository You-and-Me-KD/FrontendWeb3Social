"use client";
import { FormBox } from "@/components/ui";
import { Trans } from "@lingui/react/macro";


const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <FormBox className="w-[484px] max-w-full absolute 2xl:right-20 right-[13%]">
        <Trans>hello</Trans>
      </FormBox>
    </div>
  );
};
export default Login;
