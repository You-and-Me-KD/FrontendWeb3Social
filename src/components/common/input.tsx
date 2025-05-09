import React, { forwardRef } from "react";
import { cn } from "@/libs/utils";

type Variant = NonNullable<InputProps["variant"]>;
type InputSize = NonNullable<InputProps["inputSize"]>;
type Rounded = NonNullable<InputProps["rounded"]>;

export type InputProps = {
  variant?: "primary" | "secondary" | "custom";
  inputSize?: "small" | "medium" | "large";
  color?: "blue" | "gray" | "red" | "green" | "purple" | string;
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  fullWidth?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  customVariantStyles?: string;
  placeholder?: string;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "primary",
      inputSize = "medium",
      disabled = false,
      prefix,
      suffix,
      fullWidth = false,
      rounded = "xl",
      className,
      customVariantStyles = "",
      placeholder,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "flex items-center font-bold transition-colors duration-200 focus:outline-none focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles: Record<Variant, string> = {
      primary: `border border-input-border-primary text-white focus-within:ring-input-border-primary focus-within:border-input-border-primary-focus placeholder:text-input-placeholder-primary`,
      secondary: `border border-input-border-secondary text-white focus-within:ring-input-border-secondary focus-within:border-input-border-secondary-focus placeholder:text-input-placeholder-secondary`,
      custom: customVariantStyles,
    };

    const sizeStyles: Record<InputSize, string> = {
      small: "h-[40px] text-sm px-3",
      medium: "h-[54px] text-base px-[18px]",
      large: "h-[60px] text-lg px-5",
    };

    const roundedStyles: Record<Rounded, string> = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    };

    const blockStyle = fullWidth ? "w-full" : "w-auto";

    return (
      <div
        className={cn(
          " relative flex items-center",
          baseStyles,
          variantStyles[variant],
          sizeStyles[inputSize],
          roundedStyles[rounded],
          blockStyle,
          className
        )}
      >
        {prefix && (
          <span
            className={`absolute left-3 text-input-placeholder-${variant}`}
            aria-hidden="true"
          >
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          className={cn(
            "peer w-full bg-transparent outline-none",
            prefix ? "pl-8" : "pl-0",
            suffix ? "pr-8" : "pr-0"
          )}
          disabled={disabled}
          aria-disabled={disabled}
          placeholder={placeholder}
          {...props}
        />
        {suffix && (
          <span
            className={`absolute right-3 text-input-placeholder-${variant}`}
            aria-hidden="true"
          >
            {suffix}
          </span>
        )}

        {/* Float label */}
        <label
          className={cn(
            "absolute top-1/2 -translate-y-1/2 left-4 rounded-xl text-input-placeholder-primary pointer-events-none transition-all duration-400 transform scale-100 origin-[0_0]",
            "peer-focus-within:-top-0 peer-focus-within:text-xs peer-focus-within:text-white bg-background peer-focus-within:px-1"
          )}
          htmlFor={props.id}
        >
          {props.label}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";
