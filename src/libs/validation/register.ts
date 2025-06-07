import { z } from 'zod'
import { PASSWORD_REGEX } from './regex'
import { TranslationFunction } from '@/hooks'
export const getRegisterSchema = (t: TranslationFunction) => {
  return z
    .object({
      email: z
        .string({
          required_error: t('validation.required', {
            field: t('fields.email'),
          }),
        })
        .email({
          message: t('validation.emailInvalid'),
        }),
      username: z
        .string({
          required_error: t('validation.required', {
            field: t('fields.username'),
          }),
        })
        .min(6, t('validation.minlength', { field: t('fields.username'), min: 6 }))
        .max(20, t('validation.maxlength', { field: t('fields.username'), max: 20 })),
      password: z
        .string({
          required_error: t('validation.required', {
            field: t('fields.password'),
          }),
        })
        .regex(PASSWORD_REGEX, t('validation.passwordComplexity')),
      remember: z.boolean().optional(),
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
      isGetNewByMail: z.boolean().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t('validation.passwordsDoNotMatch'),
      path: ['confirmPassword'],
    })
}
