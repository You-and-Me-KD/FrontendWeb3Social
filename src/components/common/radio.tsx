import { cn } from '@/libs/utils'
import React, { forwardRef } from 'react'

type RadioSize = 'small' | 'medium' | 'large'
type Color = 'blue' | 'gray' | 'red' | 'green' | 'purple' | string

export type RadioProps = {
  id: string
  name: string
  value: string
  label?: React.ReactNode
  checked?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  radioSize?: RadioSize
  color?: Color
  disabled?: boolean
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      name,
      value,
      label,
      checked = false,
      onChange,
      radioSize = 'medium',
      color = 'blue',
      disabled = false,
      className,
      ...props
    },
    ref,
  ) => {
    const sizeStyles: Record<RadioSize, { outer: string; inner: string }> = {
      small: { outer: 'w-4 h-4', inner: 'w-2 h-2' },
      medium: { outer: 'w-5 h-5', inner: 'w-2.5 h-2.5' },
      large: { outer: 'w-6 h-6', inner: 'w-3 h-3' },
    }

    const colorStyles: Record<Color, string> = {
      blue: 'peer-checked:bg-blue-500 peer-checked:border-blue-500',
      gray: 'peer-checked:bg-gray-500 peer-checked:border-gray-500',
      red: 'peer-checked:bg-red-500 peer-checked:border-red-500',
      green: 'peer-checked:bg-green-500 peer-checked:border-green-500',
      purple: 'peer-checked:bg-purple-500 peer-checked:border-purple-500',
    }

    const innerColorStyles: Record<Color, string> = {
      blue: 'bg-blue-500',
      gray: 'bg-gray-500',
      red: 'bg-red-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
    }

    const baseStyles =
      'peer appearance-none border rounded-full flex items-center justify-center transition-all duration-200'
    const checkedStyles = colorStyles[color] || colorStyles.blue
    const innerCheckedStyles = innerColorStyles[color] || innerColorStyles.blue

    return (
      <label htmlFor={id} className={cn('flex cursor-pointer items-center gap-2', className)}>
        {/* Hidden native input */}
        <input
          ref={ref}
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className="peer sr-only"
          {...props}
        />

        <div
          className={cn(
            baseStyles,
            sizeStyles[radioSize].outer,
            `border-input-border-primary`,
            checkedStyles,
            disabled && 'cursor-not-allowed opacity-50',
          )}
        >
          <div
            className={cn(
              'rounded-full transition-all duration-200',
              sizeStyles[radioSize].inner,
              checked ? innerCheckedStyles : 'bg-transparent',
            )}
          />
        </div>

        {label && <span className="text-sm font-bold text-white select-none">{label}</span>}
      </label>
    )
  },
)

Radio.displayName = 'Radio'
