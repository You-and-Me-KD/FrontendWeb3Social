import React from "react";
import { useFormContext } from "react-hook-form";
import { Input, InputProps } from "../common";
import useTranslations from "@/hooks/useTranslations";

interface InputFieldProps extends InputProps {
  name: string;
  label?: string;
  rules?: Record<string, any>;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  rules,
  ...inputProps
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslations();

  return (
    <div className="relative flex flex-col">
      <Input
        {...inputProps}
        {...register(name, rules)}
        label={label}
        id={name}
        aria-invalid={errors[name] ? "true" : "false"}
      />
      {errors[name] && (
        <span className="mt-2 text-sm text-danger">
          {(errors[name]?.message as string) || t("validation.common")}
        </span>
      )}
    </div>
  );
};
