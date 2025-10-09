import React, { forwardRef } from 'react'
import { cn } from '@/libs/utils'

type Variant = NonNullable<InputProps['variant']>
type InputSize = NonNullable<InputProps['inputSize']>
type Rounded = NonNullable<InputProps['rounded']>

export type InputProps = {
  variant?: 'primary' | 'secondary' | 'custom'
  inputSize?: 'small' | 'medium' | 'x-medium' | 'large'
  color?: 'blue' | 'gray' | 'red' | 'green' | 'purple' | string
  disabled?: boolean
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  fullWidth?: boolean
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
  customVariantStyles?: string
  placeholder?: string
  label?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'primary',
      inputSize = 'medium',
      disabled = false,
      prefix,
      suffix,
      fullWidth = false,
      rounded = 'xl',
      className,
      customVariantStyles = '',
      placeholder,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      'flex items-center font-bold transition-colors duration-200 focus:outline-none focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

    const variantStyles: Record<Variant, string> = {
      primary: `border border-input-border-primary text-white focus-within:ring-input-border-primary focus-within:border-input-border-primary-focus placeholder:text-input-placeholder-primary`,
      secondary: `border border-input-border-secondary text-white focus-within:ring-input-border-secondary focus-within:border-input-border-secondary-focus placeholder:text-input-placeholder-secondary`,
      custom: customVariantStyles,
    }

    const sizeStyles: Record<InputSize, string> = {
      small: 'h-[40px] text-sm px-3',
      'x-medium': 'h-[48px] text-sm px-[18px]',
      medium: 'h-[54px] text-base px-[18px]',
      large: 'h-[60px] text-lg px-5',
    }

    const roundedStyles: Record<Rounded, string> = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    }

    const blockStyle = fullWidth ? 'w-full' : 'w-auto'

    return (
      <div
        className={cn(
          'relative flex items-center',
          baseStyles,
          variantStyles[variant],
          sizeStyles[inputSize],
          roundedStyles[rounded],
          blockStyle,
          className,
        )}
      >
        {prefix && (
          <span className={`absolute left-3 text-input-placeholder-${variant}`} aria-hidden="true">
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          className={cn('peer w-full bg-transparent outline-none', prefix ? 'pl-8' : 'pl-0', suffix ? 'pr-8' : 'pr-0')}
          disabled={disabled}
          aria-disabled={disabled}
          placeholder={placeholder}
          {...props}
        />
        {suffix && (
          <span className={`absolute right-3 text-input-placeholder-${variant}`} aria-hidden="true">
            {suffix}
          </span>
        )}

        {/* Float label */}
        <label
          className={cn(
            'text-input-placeholder-primary pointer-events-none absolute top-1/2 left-4 origin-[0_0] -translate-y-1/2 scale-100 transform rounded-xl transition-all duration-400',
            'peer-focus:bg-main-1 peer-focus-within:font-semibold peer-focus:-top-0 peer-focus:px-1 peer-focus:text-xs peer-focus:text-white',
            'peer-not-placeholder-shown:bg-main-1 peer-not-placeholder-shown:-top-0 peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-white',
          )}
          htmlFor={props.id}
        >
          {props.label}
        </label>
      </div>
    )
  },
)

Input.displayName = 'Input'
