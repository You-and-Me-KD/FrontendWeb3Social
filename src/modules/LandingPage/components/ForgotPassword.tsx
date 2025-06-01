"use client";
import { useLoginMutation } from "@/apis/auths";
import { rocketImage } from "@/assets";
import { Button } from "@/components";
import FormWrapper from "@/components/form/form-wrapper";
import { InputField } from "@/components/form/input-field";
import { FormBox } from "@/components/ui";
import useTranslations from "@/hooks/useTranslations";
import { getForgotPasswordSchema } from "@/libs";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ForgotPassword: FC = () => {
  const { t } = useTranslations(["forgot", "common"]);
  const schema = getForgotPasswordSchema(t);
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const { mutateAsync } = useLoginMutation();

  const onSubmit = async (data: z.infer<typeof schema>) => {};

  return (
    <div className="w-[484px] max-w-full">
      <FormBox className="">
        <h4 className="xl:text-2xl text-xl font-bold text-center">{t("forgot.title")}</h4>
        <FormWrapper
          formId="login-form"
          form={form}
          onSubmit={onSubmit}
          className="xl:mt-[2rem] flex flex-col gap-7 mt-10"
        >
          <InputField placeholder=" " autoComplete="off" name="email" label={t("forgot.form.email")} />
          <div className="flex items-center justify-between text-sm flex-wrap">
            <p className="font-bold text-main-2 cursor-pointer">{t("forgot.information.description")}</p>
          </div>
          <Button variant="secondary">{t("forgot.form.btn")}</Button>
        </FormWrapper>
      </FormBox>
      <Image
        src={rocketImage}
        alt="rocket"
        width={160}
        height={156}
        className="md:block hidden absolute -left-20 -top-17"
      />
    </div>
  );
};
export default ForgotPassword;
