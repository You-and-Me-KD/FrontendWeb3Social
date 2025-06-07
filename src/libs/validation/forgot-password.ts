import { TranslationFunction } from '@/hooks'
import { z } from 'zod'
export const getForgotPasswordSchema = (t: TranslationFunction) => {
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
  })
}
