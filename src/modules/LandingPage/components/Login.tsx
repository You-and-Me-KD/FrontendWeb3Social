"use client";
import { useLoginMutation } from "@/apis/auths";
import {
  FacebookIcon,
  GoogleIcon,
  MetamaskIcon,
  rocketImage,
  TwitterIcon,
} from "@/assets";
import { Button, Toast } from "@/components";
import { CheckboxFields } from "@/components/form/checkbox-field";
import FormWrapper from "@/components/form/form-wrapper";
import { InputField } from "@/components/form/input-field";
import { FormBox } from "@/components/ui";
import useTranslations from "@/hooks/useTranslations";
import { getLoginSchema } from "@/libs";
import { IAxiosResponse } from "@/types/common";
import { getErrorMessage } from "@/utils/fn";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Login: FC = () => {
  const { t } = useTranslations(["login", "common"]);
  const schema = getLoginSchema(t);
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const { mutateAsync } = useLoginMutation();

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      await mutateAsync(data, {
        onSuccess: () => {
          Toast.success({
            label: t("common.toast.success.login"),
            description: t("common.success.LOGIN_SUCCESS"),
          });
        },
        onError: async (error: IAxiosResponse) => {
          const text = await getErrorMessage(error?.meta.message);
          Toast.error({
            label: t("common.toast.error.login"),
            description: t(text),
          });
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[484px] max-w-full">
      <FormBox className="">
        <h4 className="xl:text-2xl text-xl font-bold text-center">
          {t("login.title")}
        </h4>
        <FormWrapper
          formId="login-form"
          form={form}
          onSubmit={onSubmit}
          className="xl:mt-[4.75rem] flex flex-col gap-7 mt-10"
        >
          <InputField
            placeholder=" "
            autoComplete="off"
            name="email"
            label={t("login.form.username-or-email")}
          />

          <InputField
            placeholder=" "
            autoComplete="new-password"
            name="password"
            label={t("login.form.password")}
            type="password"
          />
          <div className="flex items-center justify-between text-sm flex-wrap">
            <CheckboxFields
              id="remember"
              name="remember"
              label={t("login.form.remember")}
              checkboxSize="medium"
              color="green"
              rounded="md"
            />
            <p className="font-bold text-main-2 cursor-pointer">
              {t("login.form.forgot")}
            </p>
          </div>
          <Button variant="secondary">{t("login.form.btn")}</Button>
        </FormWrapper>
        <div className="text-white font-bold text-sm flex items-center justify-center gap-4 mt-10">
          <div className="flex-1 h-[1px] bg-main-3"></div>
          <p>{t("login.form.login-social")}</p>
          <div className="flex-1 h-[1px] bg-main-3"></div>
        </div>
        <div className="flex items-center justify-center mt-7 gap-3 flex-wrap">
          <div className="bg-white rounded-xl p-1 w-10 h-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-all duration-300">
            <GoogleIcon className="w-4 h-4" />
          </div>
          <div className="bg-white rounded-xl p-1 w-10 h-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-all duration-300">
            <FacebookIcon />
          </div>
          <div className="bg-white rounded-xl p-1 w-10 h-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-all duration-300">
            <TwitterIcon className="w-4 h-4" />
          </div>
          <div className="bg-white rounded-xl p-1 w-10 h-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-all duration-300">
            <MetamaskIcon className="w-4 h-4" />
          </div>
        </div>
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
export default Login;
