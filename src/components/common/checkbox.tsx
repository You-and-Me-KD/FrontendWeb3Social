import { XIcon } from '@/assets'
import { cn } from '@/libs/utils'
import React, { forwardRef } from 'react'

type CheckboxSize = 'small' | 'medium' | 'large'
type Rounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
type Color = 'blue' | 'gray' | 'red' | 'green' | 'purple' | string

export type CheckboxProps = {
  id: string
  name: string
  label?: React.ReactNode
  checked?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  checkboxSize?: CheckboxSize
  color?: Color
  disabled?: boolean
  rounded?: Rounded
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      name,
      label,
      checked = false,
      onChange,
      checkboxSize = 'medium',
      color = 'blue',
      disabled = false,
      rounded = 'sm',
      className,
      ...props
    },
    ref,
  ) => {
    const sizeStyles: Record<CheckboxSize, string> = {
      small: 'w-4 h-4',
      medium: 'w-5 h-5',
      large: 'w-6 h-6',
    }

    const roundedStyles: Record<Rounded, string> = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    }

    const colorStyles: Record<Color, string> = {
      blue: 'peer-checked:bg-blue-500 peer-checked:border-blue-500',
      gray: 'peer-checked:bg-gray-500 peer-checked:border-gray-500',
      red: 'peer-checked:bg-red-500 peer-checked:border-red-500',
      green: 'peer-checked:bg-green-500 peer-checked:border-green-500',
      purple: 'peer-checked:bg-purple-500 peer-checked:border-purple-500',
    }

    const baseStyles = 'peer appearance-none border flex items-center justify-center transition-all duration-200'
    const checkedStyles = colorStyles[color] || colorStyles.blue

    return (
      <label htmlFor={id} className={cn('flex cursor-pointer items-center gap-2', className)}>
        {/* Hidden native input */}
        <input
          ref={ref}
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className="peer sr-only"
          {...props}
        />

        <div
          className={cn(
            baseStyles,
            sizeStyles[checkboxSize],
            roundedStyles[rounded],
            `border-input-border-primary`,
            checkedStyles,
            disabled && 'cursor-not-allowed opacity-50',
          )}
        >
          <XIcon className={cn('hidden text-black', checked && 'block')} />
        </div>

        {label && <span className="text-sm font-bold text-white select-none">{label}</span>}
      </label>
    )
  },
)

Checkbox.displayName = 'Checkbox'
