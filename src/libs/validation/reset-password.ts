import { z } from "zod";
export const getResetPasswordSchema = (t: Function) => {
  return z.object({
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
  });
};
