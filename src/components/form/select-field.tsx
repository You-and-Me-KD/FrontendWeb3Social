'use client'

import React, { forwardRef } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { cn } from '@/libs/utils'
import { Select, SelectProps } from '../common'
import useTranslations from '@/hooks/useTranslations'

type SelectFieldProps = SelectProps & {
  errorClassName?: string
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    {
      id,
      name,
      label,
      variant = 'primary',
      selectSize = 'medium',
      disabled = false,
      rounded = 'xl',
      className,
      options,
      children,
      errorClassName,
      ...props
    },
    ref,
  ) => {
    const {
      control,
      formState: { errors },
    } = useFormContext()

    const { t } = useTranslations()

    return (
      <div className="flex flex-col gap-1">
        <Controller
          name={name!}
          control={control}
          render={({ field }) => (
            <Select
              ref={ref}
              id={id}
              name={name}
              label={label}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              variant={variant}
              selectSize={selectSize}
              disabled={disabled}
              rounded={rounded}
              className={cn(className)}
              options={options}
              {...props}
            >
              {children}
            </Select>
          )}
        />
        {errors[name!] && (
          <span className={cn('text-danger mt-2 text-sm', errorClassName)}>
            {(errors[name!]?.message as string) || t('validation.common')}
          </span>
        )}
      </div>
    )
  },
)

SelectField.displayName = 'SelectField'
