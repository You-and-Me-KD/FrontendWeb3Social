import { z } from 'zod'
import { PASSWORD_REGEX } from './regex'
import { TranslationFunction } from '@/hooks'
export const getLoginSchema = (t: TranslationFunction) => {
  return z.object({
    email: z
      .string({
        required_error: t('validation.required', {
          field: t('fields.email'),
        }),
      })
      .email({
        message: t('validation.emailInvalid'),
      }),
    password: z
      .string({
        required_error: t('validation.required', {
          field: t('fields.password'),
        }),
      })
      .regex(PASSWORD_REGEX, t('validation.passwordComplexity')),
    remember: z.boolean().optional(),
  })
}
