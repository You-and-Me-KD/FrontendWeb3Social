import React, { forwardRef } from 'react'
import { cn } from '@/libs/utils'

type Variant = NonNullable<TextareaProps['variant']>
type TextareaSize = NonNullable<TextareaProps['textareaSize']>
type Rounded = NonNullable<TextareaProps['rounded']>

export type TextareaProps = {
  variant?: 'primary' | 'secondary' | 'custom'
  textareaSize?: 'small' | 'medium' | 'x-medium' | 'large'
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
  rows?: number
  resize?: 'none' | 'both' | 'horizontal' | 'vertical'
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = 'primary',
      textareaSize = 'medium',
      disabled = false,
      prefix,
      suffix,
      fullWidth = false,
      rounded = 'xl',
      className,
      customVariantStyles = '',
      placeholder,
      rows = 4,
      resize = 'vertical',
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      'flex items-start font-bold transition-colors duration-200 focus:outline-none focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

    const variantStyles: Record<Variant, string> = {
      primary: `border border-input-border-primary text-white focus-within:ring-input-border-primary focus-within:border-input-border-primary-focus placeholder:text-input-placeholder-primary`,
      secondary: `border border-input-border-secondary text-white focus-within:ring-input-border-secondary focus-within:border-input-border-secondary-focus placeholder:text-input-placeholder-secondary`,
      custom: customVariantStyles,
    }

    const sizeStyles: Record<TextareaSize, string> = {
      small: 'min-h-[80px] text-sm px-3 py-2',
      'x-medium': 'min-h-[96px] text-sm px-[18px] py-3',
      medium: 'min-h-[108px] text-base px-[18px] py-3',
      large: 'min-h-[120px] text-lg px-5 py-4',
    }

    const roundedStyles: Record<Rounded, string> = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    }

    const resizeStyles: Record<NonNullable<TextareaProps['resize']>, string> = {
      none: 'resize-none',
      both: 'resize',
      horizontal: 'resize-x',
      vertical: 'resize-y',
    }

    const blockStyle = fullWidth ? 'w-full' : 'w-auto'

    return (
      <div
        className={cn(
          'relative flex items-start',
          baseStyles,
          variantStyles[variant],
          sizeStyles[textareaSize],
          roundedStyles[rounded],
          blockStyle,
          className,
        )}
      >
        {prefix && (
          <span className={`absolute top-3 left-3 text-input-placeholder-${variant}`} aria-hidden="true">
            {prefix}
          </span>
        )}
        <textarea
          ref={ref}
          className={cn(
            'peer w-full bg-transparent outline-none',
            prefix ? 'pl-8' : 'pl-0',
            suffix ? 'pr-8' : 'pr-0',
            resizeStyles[resize],
          )}
          disabled={disabled}
          aria-disabled={disabled}
          placeholder={placeholder}
          rows={rows}
          {...props}
        />
        {suffix && (
          <span className={`absolute top-3 right-3 text-input-placeholder-${variant}`} aria-hidden="true">
            {suffix}
          </span>
        )}

        {/* Float label */}
        <label
          className={cn(
            'text-input-placeholder-primary pointer-events-none absolute top-3 left-4 origin-[0_0] scale-100 transform rounded-xl transition-all duration-400',
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

Textarea.displayName = 'Textarea'
