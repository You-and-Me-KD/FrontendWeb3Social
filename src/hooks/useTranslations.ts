import { useTranslations as useTranslationsNextIntl } from 'next-intl'

export type TranslationsType = ReturnType<typeof useTranslationsNextIntl>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TranslationFunction = (key: string, params?: Record<string, any>) => string

const useTranslations = (namespace?: string) => {
  // const translators = namespace.map((ns) => ({
  //   ns,
  //   t: useTranslationsNextIntl(ns),
  // }))

  // const namespaceMap = useMemo(() => {
  //   return translators.reduce(
  //     (acc, cur) => {
  //       acc[cur.ns] = cur.t
  //       return acc
  //     },
  //     {} as Record<string, TranslationsType>,
  //   )
  // }, [translators.map((i) => i.ns).join(',')])

  // const t: TranslationFunction = (key, params) => {
  //   const [ns, ...rest] = key.split('.')
  //   const keyWithoutNamespace = rest.join('.')
  //   const translator = namespaceMap[ns]

  //   if (!translator) {
  //     console.warn(`Namespace "${ns}" not found for key "${key}"`)
  //     return key
  //   }

  //   return translator(keyWithoutNamespace, params)
  // }
  const t = useTranslationsNextIntl(namespace)
  return { t }
}
export default useTranslations
