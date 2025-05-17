import React, { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/libs/utils";
import { Checkbox, CheckboxProps } from "../common";
import useTranslations from "@/hooks/useTranslations";

type CheckboxFieldsProps = CheckboxProps & {
  errorClassName?: string;
};

export const CheckboxFields = forwardRef<HTMLInputElement, CheckboxFieldsProps>(
  (
    {
      id,
      name,
      label,
      checkboxSize = "medium",
      color = "blue",
      disabled = false,
      rounded = "sm",
      className,
      errorClassName,
      ...props
    },
    ref
  ) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();

    const { t } = useTranslations();

    return (
      <div className="flex flex-col gap-1">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox
              ref={ref}
              id={id}
              name={name}
              label={label}
              checked={field.value ?? false}
              onChange={field.onChange}
              checkboxSize={checkboxSize}
              color={color}
              disabled={disabled}
              rounded={rounded}
              className={cn(className)}
              {...props}
            />
          )}
        />
        {errors[name] && (
          <span className="mt-2 text-sm text-danger">
            {(errors[name]?.message as string) || t("validation.common")}
          </span>
        )}
      </div>
    );
  }
);

CheckboxFields.displayName = "CheckboxFields";
