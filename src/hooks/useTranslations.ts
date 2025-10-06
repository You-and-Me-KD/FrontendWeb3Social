import { useTranslations as useTranslationsNextIntl } from 'next-intl'

export type TranslationsType = ReturnType<typeof useTranslationsNextIntl>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TranslationFunction = (key: string, params?: Record<string, any>) => string

const useTranslations = (namespace?: string) => {
  const t = useTranslationsNextIntl(namespace)
  return { t }
}
export default useTranslations
