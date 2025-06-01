import { z } from "zod";
export const getForgotPasswordSchema = (t: Function) => {
  return z.object({
    email: z
      .string({
        required_error: t("common.validation.required", {
          field: t("common.fields.email"),
        }),
      })
      .min(1, t("common.validation.required", { field: t("common.fields.email") })),
  });
};
