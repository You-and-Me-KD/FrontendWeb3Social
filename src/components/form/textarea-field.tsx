'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Textarea, TextareaProps } from '../common'
import useTranslations from '@/hooks/useTranslations'

interface TextareaFieldProps extends TextareaProps {
  name: string
  label?: string
  rules?: Record<string, unknown>
}

export const TextareaField: React.FC<TextareaFieldProps> = ({ name, label, rules, ...textareaProps }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const { t } = useTranslations()

  return (
    <div className="relative flex flex-col">
      <Textarea
        {...textareaProps}
        {...register(name, rules)}
        label={label}
        aria-invalid={errors[name] ? 'true' : 'false'}
      />
      {errors[name] && (
        <span className="text-danger mt-2 text-sm">{(errors[name]?.message as string) || t('validation.common')}</span>
      )}
    </div>
  )
}
