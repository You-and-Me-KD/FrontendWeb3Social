import { TranslationsType } from "@/hooks";
import { z } from "zod";
export const getRegisterSchema = (t: any) => {
  return z.object({
    email: z
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
        8,
        t("common.validation.required", { field: t("common.fields.username") })
      ),
    password: z
      .string({
        required_error: t("common.validation.required", {
          field: t("common.fields.password"),
        }),
      })
      .min(
        8,
        t("common.validation.minlength", {
          field: t("common.fields.password"),
          min: 8,
        })
      ),
    confirmPassword: z
      .string({
        required_error: t("common.validation.required", {
          field: t("common.fields.confirmPassword"),
        }),
      })
      .min(
        8,
        t("common.validation.minlength", {
          field: t("common.fields.confirmPassword"),
          min: 8,
        })
      ),
    isGetNewByMail: z.boolean().optional(),
  });
};
