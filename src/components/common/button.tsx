import React, { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/libs/utils";
import { RevealHover } from "./reveal-hover";

type Variant = NonNullable<ButtonProps["variant"]>;
type Size = NonNullable<ButtonProps["size"]>;
type Rounded = NonNullable<ButtonProps["rounded"]>;

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "danger" | "custom";
  size?: "small" | "medium" | "large";
  color?: "blue" | "gray" | "red" | "green" | "purple" | string;
  loading?: boolean;
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  fullWidth?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  customVariantStyles?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "medium",
      color = "blue",
      loading = false,
      disabled = false,
      prefix,
      suffix,
      fullWidth = false,
      rounded = "xl",
      className,
      customVariantStyles = "",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold transition-colors duration-200 focus:outline-none focus-visible:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles: Record<Variant, string> = {
      primary: `bg-button-primary text-white hover:bg-button-primary-hover focus:ring-button-primary-hover`,
      secondary: `bg-button-secondary text-white hover:bg-button-secondary-hover focus:ring-button-secondary-hover`,
      ghost: `bg-transparent text-white hover:bg-button-ghost-hover focus:ring-button-ghost-hover`,
      outline: `border border-${color} text-${color} hover:bg-${color} focus:ring-${color}`,
      danger: `bg-button-danger text-white hover:bg-button-danger-hover focus:ring-button-danger-hover`,
      custom: customVariantStyles,
    };

    const sizeStyles: Record<Size, string> = {
      small: "h-[40px] leading-[40px] text-xs",
      medium: "h-[54px] leading-[54px] text-sm",
      large: "h-[60x] leading-[60px] text-base",
    };

    const roundedStyles: Record<Rounded, string> = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    };

    const blockStyle = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          roundedStyles[rounded],
          blockStyle,
          className
        )}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        <RevealHover>
          {loading ? (
            <Loader2 className="animate-spin w-4 h-4 mr-2" aria-hidden="true" />
          ) : (
            prefix && (
              <span className="mr-2" aria-hidden="true">
                {prefix}
              </span>
            )
          )}
          <span>{children}</span>
          {suffix && !loading && (
            <span className="ml-2" aria-hidden="true">
              {suffix}
            </span>
          )}
        </RevealHover>
      </button>
    );
  }
);

Button.displayName = "Button";
