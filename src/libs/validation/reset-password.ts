import { z } from 'zod'
import { PASSWORD_REGEX } from './regex'
import { TranslationFunction } from '@/hooks'
export const getResetPasswordSchema = (t: TranslationFunction) => {
  return z
    .object({
      password: z
        .string({
          required_error: t('validation.required', {
            field: t('fields.password'),
          }),
        })
        .regex(PASSWORD_REGEX, t('validation.passwordComplexity')),
      confirmPassword: z
        .string({
          required_error: t('validation.required', {
            field: t('fields.confirmPassword'),
          }),
        })
        .min(
          1,
          t('validation.required', {
            field: t('fields.password'),
            min: 1,
          }),
        ),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t('validation.passwordsDoNotMatch'),
      path: ['confirmPassword'],
    })
}
