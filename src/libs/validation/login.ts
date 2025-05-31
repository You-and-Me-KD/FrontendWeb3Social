import { TranslationsType } from "@/hooks";
import { z } from "zod";
export const getLoginSchema = (t: any) => {
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
    remember: z.boolean().optional(),
  });
};
