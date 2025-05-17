"use client";
import {
  FacebookIcon,
  GoogleIcon,
  MetamaskIcon,
  rocketImage,
  TwitterIcon,
} from "@/assets";
import { Button, Checkbox, Input } from "@/components";
import FormWrapper from "@/components/form/form-wrapper";
import { InputField } from "@/components/form/input-field";
import { FormBox } from "@/components/ui";
import useTranslations from "@/hooks/useTranslations";
import Image from "next/image";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckboxFields } from "@/components/form/checkbox-field";

const Register: FC = () => {
  const { t } = useTranslations(["register", "common"]);
  interface Schema {
    enail: string;
    username: string;
    password: string;
    confirmPassword: string;
  }

  const schema: z.ZodType<Schema> = z.object({
    enail: z
      .string({
        required_error: t("common.validation.required", {
          field: t("common.fields.email"),
        }),
      })
      .min(
        1,
        t("common.validation.required", { field: t("common.fields.email") })
      ),
    username: z
      .string({
        required_error: t("common.validation.required", {
          field: t("common.fields.username"),
        }),
      })
      .min(
        1,
        t("common.validation.required", { field: t("common.fields.username") })
      ),
    password: z
      .string({
        required_error: t("common.validation.required", {
          field: t("common.fields.password"),
        }),
      })
      .min(
        1,
        t("common.validation.minlength", {
          field: t("common.fields.password"),
          min: 1,
        })
      ),
    confirmPassword: z
      .string({
        required_error: t("common.validation.required", {
          field: t("common.fields.confirmPassword"),
        }),
      })
      .min(
        1,
        t("common.validation.minlength", {
          field: t("common.fields.confirmPassword"),
          min: 1,
        })
      ),
  });
  const form = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div className="w-[484px] max-w-full">
      <FormBox className="">
        <h4 className="xl:text-2xl text-xl font-bold text-center">
          {t("register.title")}
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
            name="email"
            label={t("register.form.email")}
          />
          <InputField
            placeholder=" "
            autoComplete="off"
            name="username"
            label={t("register.form.username")}
          />
          <InputField
            placeholder=" "
            autoComplete="off"
            name="password"
            label={t("register.form.password")}
            type="password"
          />
          <InputField
            placeholder=" "
            autoComplete="off"
            name="password-repeat"
            label={t("register.form.password-repeat")}
            type="password"
          />
          <CheckboxFields
            id="send-new"
            name="send-new"
            label={t("register.form.send-new")}
            checkboxSize="medium"
            color="green"
            rounded="md"
          />
          <Button variant="primary">{t("register.form.btn")}</Button>
        </FormWrapper>
        <div className="text-white font-semibold text-sm flex items-center justify-center gap-4 mt-10">
          <p>{t("register.form.des")}</p>
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
export default Register;
