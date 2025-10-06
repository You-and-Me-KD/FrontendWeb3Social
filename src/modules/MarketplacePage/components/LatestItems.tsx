import { HStack, VStack } from '@/components'
import { MarketplaceItem } from '@/components/ui/MarketplaceItem'
import useTranslations from '@/hooks/useTranslations'
import Link from 'next/link'
import { latestItems } from './mocks'

const LatestItems = () => {
  const { t } = useTranslations('marketplace')
  return (
    <VStack align="start" justify="start" className="mt-14 w-full">
      <HStack pos="apart" align="center" className="w-full">
        <VStack align="start" justify="start" spacing={0}>
          <p className="text-main-8 text-xs font-bold uppercase">{t('latest-items.description')}</p>
          <h1 className="text-2xl font-bold">{t('latest-items.title')}</h1>
        </VStack>
        <Link href="/" className="text-main-8 text-sm font-bold">
          {t('latest-items.browse-all')}
        </Link>
      </HStack>
      <div className="mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {latestItems.map((item) => (
          <MarketplaceItem key={item.name} {...item} />
        ))}
      </div>
    </VStack>
  )
}

export default LatestItems
