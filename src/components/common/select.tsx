import React, { forwardRef } from 'react'
import { cn } from '@/libs/utils'

type Variant = NonNullable<SelectProps['variant']>
type SelectSize = NonNullable<SelectProps['selectSize']>
type Rounded = NonNullable<SelectProps['rounded']>

export type SelectProps = {
  variant?: 'primary' | 'secondary' | 'custom'
  selectSize?: 'small' | 'medium' | 'x-medium' | 'large'
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
  options?: Array<{ value: string | number; label: string }>
  children?: React.ReactNode
} & React.SelectHTMLAttributes<HTMLSelectElement>

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      variant = 'primary',
      selectSize = 'medium',
      disabled = false,
      prefix,
      suffix,
      fullWidth = false,
      rounded = 'xl',
      className,
      customVariantStyles = '',
      placeholder,
      options,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      'flex items-center font-bold transition-colors duration-200 focus:outline-none focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

    const variantStyles: Record<Variant, string> = {
      primary: `border border-input-border-primary text-white focus-within:ring-input-border-primary focus-within:border-input-border-primary-focus`,
      secondary: `border border-input-border-secondary text-white focus-within:ring-input-border-secondary focus-within:border-input-border-secondary-focus`,
      custom: customVariantStyles,
    }

    const sizeStyles: Record<SelectSize, string> = {
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

    const hasValue = props.value !== undefined && props.value !== ''

    return (
      <div
        className={cn(
          'relative flex items-center',
          baseStyles,
          variantStyles[variant],
          sizeStyles[selectSize],
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
        <select
          ref={ref}
          className={cn(
            'peer w-full cursor-pointer appearance-none bg-transparent outline-none',
            prefix ? 'pl-8' : 'pl-0',
            suffix ? 'pr-8' : 'pr-6',
            !hasValue && 'text-transparent',
          )}
          disabled={disabled}
          aria-disabled={disabled}
          {...props}
        >
          {placeholder && (
            <option value="" disabled hidden className="text-white">
              {placeholder}
            </option>
          )}
          {options
            ? options.map((option) => (
                <option key={option.value} value={option.value} className="bg-main-1 text-white">
                  {option.label}
                </option>
              ))
            : children}
        </select>
        {suffix && (
          <span className={`absolute right-3 text-input-placeholder-${variant}`} aria-hidden="true">
            {suffix}
          </span>
        )}

        {/* Arrow icon */}
        {!suffix && (
          <span className={`pointer-events-none absolute right-3 text-input-placeholder-${variant}`} aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}

        {/* Float label */}
        {props.label && (
          <label
            className={cn(
              'text-input-placeholder-primary pointer-events-none absolute top-1/2 left-4 origin-[0_0] -translate-y-1/2 scale-100 transform rounded-xl transition-all duration-400',
              'peer-focus:bg-main-1 peer-focus-within:font-semibold peer-focus:-top-0 peer-focus:px-1 peer-focus:text-xs peer-focus:text-white',
              hasValue && 'bg-main-1 -top-0 px-1 text-xs font-semibold text-white',
            )}
            htmlFor={props.id}
          >
            {props.label}
          </label>
        )}
      </div>
    )
  },
)

Select.displayName = 'Select'
