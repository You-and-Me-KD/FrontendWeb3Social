"use client";
import { useRegisterMutation } from "@/apis/auths";
import { rocketImage } from "@/assets";
import { Button, Toast } from "@/components";
import { CheckboxFields } from "@/components/form/checkbox-field";
import FormWrapper from "@/components/form/form-wrapper";
import { InputField } from "@/components/form/input-field";
import { FormBox } from "@/components/ui";
import useTranslations from "@/hooks/useTranslations";
import { getRegisterSchema } from "@/libs/validation/register";
import { IAxiosResponse } from "@/types/common";
import { getErrorMessage } from "@/utils/fn";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Register: FC = () => {
  const { t } = useTranslations(["register", "common"]);
  interface Schema {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
    isGetNewByMail?: boolean;
  }

  const schema: z.ZodType<Schema> = getRegisterSchema(t);
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useRegisterMutation();

  const onSubmit = async (data: z.infer<typeof schema>) => {
    const requestData = {
      username: data.username,
      email: data.email,
      password: data.password,
      isGetNewByMail: data.isGetNewByMail || false,
    };
    try {
      await mutateAsync(requestData, {
        onSuccess: () => {
          Toast.success({
            label: t("common.toast.success.register"),
            description: t("common.success.REGISTER_SUCCESS"),
          });
        },
        onError: async (error: IAxiosResponse) => {
          const text = await getErrorMessage(error?.meta.message);

          Toast.error({
            label: t("common.toast.error.register"),
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
          {t("register.title")}
        </h4>
        <FormWrapper
          formId="register-form"
          form={form}
          onSubmit={onSubmit}
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
            autoComplete="new-password"
            name="password"
            label={t("register.form.password")}
            type="password"
          />
          <InputField
            placeholder=" "
            autoComplete="new-password"
            name="confirmPassword"
            label={t("register.form.password-repeat")}
            type="password"
          />
          <CheckboxFields
            id="send-new"
            name="isGetNewByMail"
            label={t("register.form.send-new")}
            checkboxSize="medium"
            color="green"
            rounded="md"
          />
          <Button loading={isPending} variant="primary">
            {t("register.form.btn")}
          </Button>
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
