'use client'

import React, { forwardRef } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { cn } from '@/libs/utils'
import { Radio, RadioProps } from '../common'
import useTranslations from '@/hooks/useTranslations'

type RadioFieldsProps = RadioProps & {
  errorClassName?: string
}

export const RadioFields = forwardRef<HTMLInputElement, RadioFieldsProps>(
  ({ id, name, value, label, radioSize = 'medium', color = 'blue', disabled = false, className, ...props }, ref) => {
    const {
      control,
      formState: { errors },
    } = useFormContext()

    const { t } = useTranslations()

    return (
      <div className="flex flex-col gap-1">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Radio
              ref={ref}
              id={id}
              name={name}
              value={value}
              label={label}
              checked={field.value === value}
              onChange={field.onChange}
              radioSize={radioSize}
              color={color}
              disabled={disabled}
              className={cn(className)}
              {...props}
            />
          )}
        />
        {errors[name] && (
          <span className="text-danger mt-2 text-sm">
            {(errors[name]?.message as string) || t('validation.common')}
          </span>
        )}
      </div>
    )
  },
)

RadioFields.displayName = 'RadioFields'
