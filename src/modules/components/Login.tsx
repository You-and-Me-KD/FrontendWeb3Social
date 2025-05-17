"use client";
import {
  FacebookIcon,
  GoogleIcon,
  MetamaskIcon,
  rocketImage,
  TwitterIcon,
} from "@/assets";
import { Button } from "@/components";
import { CheckboxFields } from "@/components/form/checkbox-field";
import FormWrapper from "@/components/form/form-wrapper";
import { InputField } from "@/components/form/input-field";
import { FormBox } from "@/components/ui";
import useTranslations from "@/hooks/useTranslations";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Login: FC = () => {
  const { t } = useTranslations(["login", "common"]);
  const schema = z.object({
    username: z
      .string({
        required_error: t("common.validation.required", {
          field: t("common.fields.username"),
        }),
      })
      .min(1, t("common.validation.required", { field: t("common.fields.username") })),
    password: z
      .string({
        required_error: t("common.validation.required", {
          field: t("common.fields.password"),
        }),
      })
      .min(
        1,
        t("common.validation.minlength", { field: t("common.fields.password"), min: 1 })
      ),
    remember: z.boolean().optional(),
  });
  const form = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div className="w-[484px] max-w-full">
      <FormBox className="">
        <h4 className="xl:text-2xl text-xl font-bold text-center">
          {t("login.title")}
        </h4>
        <FormWrapper
          form={form}
          onSubmit={(e) => {
            console.log(e);
          }}
          className="xl:mt-[4.75rem] flex flex-col gap-7 mt-10"
        >
          <InputField
            placeholder=" "
            autoComplete="off"
            name="username"
            label={t("login.form.username")}
          />

          <InputField
            placeholder=" "
            autoComplete="off"
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
