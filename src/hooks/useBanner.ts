import { usePathname } from '@/i18n/navigation'
import useTranslations from './useTranslations'

const useBanner = () => {
  const { t } = useTranslations('common')
  const locale = usePathname().replace('/', '')
  return {
    label: t(`banner.${locale}.title`),
    description: t(`banner.${locale}.description`),
  }
}
export default useBanner
