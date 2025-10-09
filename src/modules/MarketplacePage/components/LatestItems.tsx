import { VStack } from '@/components'
import { MarketplaceItem } from '@/components/ui/MarketplaceItem'
import { Title } from '@/components/ui/Title'
import useTranslations from '@/hooks/useTranslations'
import Link from 'next/link'
import { latestItems } from './mocks'

const LatestItems = () => {
  const { t } = useTranslations('marketplace')
  return (
    <VStack align="start" justify="start" className="mt-14 w-full">
      <Title title={t('latest-items.title')} description={t('latest-items.description')}>
        <Link href="/" className="text-main-8 text-sm font-bold">
          {t('latest-items.browse-all')}
        </Link>
      </Title>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {latestItems.map((item) => (
          <MarketplaceItem key={item.name} {...item} />
        ))}
      </div>
    </VStack>
  )
}

export default LatestItems
