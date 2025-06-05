"use client";
import { useResetPasswordMutation } from "@/apis/auths";
import { rocketImage } from "@/assets";
import { Button, Toast } from "@/components";
import FormWrapper from "@/components/form/form-wrapper";
import { InputField } from "@/components/form/input-field";
import { FormBox } from "@/components/ui";
import useSearchParams from "@/hooks/useSearchParams";
import useTranslations from "@/hooks/useTranslations";
import { getResetPasswordSchema } from "@/libs";
import { IAxiosResponse } from "@/types/common";
import { getErrorMessage } from "@/utils/fn";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ResetPassword: FC = () => {
  const { searchParams } = useSearchParams();

  const { t } = useTranslations(["reset", "common"]);
  const schema = getResetPasswordSchema(t);
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const { mutateAsync } = useResetPasswordMutation();

  const onSubmit = async (data: z.infer<typeof schema>) => {
    const token = searchParams.get("token") as string;
    const request = {
      newPassword: data.password,
      token,
    };
    try {
      await mutateAsync(request, {
        onSuccess: () => {
          Toast.success({
            label: t("common.toast.success.reset-password"),
            description: t("common.success.RESET_PASSWORD_SUCCESS"),
          });
        },
        onError: async (error: IAxiosResponse) => {
          const text = await getErrorMessage(error?.meta.message);
          Toast.error({
            label: t("common.toast.error.reset-password-error"),
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
        <h4 className="xl:text-2xl text-xl font-bold text-center">{t("reset.title")}</h4>
        <FormWrapper
          formId="reset-password-form"
          form={form}
          onSubmit={onSubmit}
          className="xl:mt-[2rem] flex flex-col gap-7 mt-10"
        >
          <InputField
            type="password"
            placeholder=" "
            autoComplete="off"
            name="password"
            label={t("reset.form.password")}
          />
          <InputField
            type="password"
            placeholder=" "
            autoComplete="off"
            name="confirmPassword"
            label={t("reset.form.confirmPassword")}
          />
          <div className="flex items-center justify-between text-sm flex-wrap">
            <p className="font-bold text-main-2 cursor-pointer">{t("reset.information.description")}</p>
          </div>
          <Button variant="secondary">{t("reset.form.btn")}</Button>
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
export default ResetPassword;
