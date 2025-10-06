import { LogoIcon } from '@/assets'
import { HStack } from '@/components/common'
import useTranslations from '@/hooks/useTranslations'

export const Logo = () => {
  const { t } = useTranslations('common')
  return (
    <HStack spacing={24}>
      <LogoIcon width={28} height={40} />
      <h1 className="font-san2-serif hidden text-xl font-black uppercase 2xl:block">{t('common.title')}</h1>
    </HStack>
  )
}
