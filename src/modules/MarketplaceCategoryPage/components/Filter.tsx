import { SearchIcon } from '@/assets/icons/search'
import { Button, HStack, Input, Select, Separator } from '@/components'
import { Title } from '@/components/ui/Title'
import { useFilterMarketCategory } from '@/hooks'
import useTranslations from '@/hooks/useTranslations'
import Link from 'next/link'
import { FILTER_BY_OPTIONS, FilterMarketType, OrderMarketType, ORDER_BY_OPTIONS } from '@/stores/useFilterMarketStore'
const Filter = () => {
  const { t } = useTranslations('marketplaceCategory')
  const { filter, order, handleSetFilter, handleSetOrder } = useFilterMarketCategory()

  return (
    <section className="w-full">
      <Title description={t('filter.browse-products')} title={t('filter.digital-items')}>
        <HStack align="center" spacing={8} pos="center">
          <Link href="/" className="text-sm font-bold">
            {t('filter.marketplace')}
          </Link>
          <Separator className="bg-main-5 h-2.5 w-0.5" orientation="vertical" />
          <Link href="/" className="text-sm font-bold">
            {t('filter.digital-items')}
          </Link>
        </HStack>
      </Title>
      <HStack
        className="bg-main-1 shadow-shadow-1 flex-wrap rounded-2xl p-4 xl:flex-nowrap xl:px-7.5 xl:py-7"
        spacing={32}
      >
        <HStack className="w-full flex-nowrap xl:w-auto">
          <Input
            inputSize="x-medium"
            placeholder=""
            id="search-items"
            label={t('filter.search-placeholder')}
            className="max-w-full flex-1 xl:min-w-75"
          />
          <Button className="min-w-16" size="x-medium" rounded="xl">
            <SearchIcon className="fill-white" />
          </Button>
        </HStack>
        <HStack className="w-full flex-wrap xl:flex-nowrap">
          <Select
            label={t('filter.filter-by')}
            placeholder=""
            variant="primary"
            selectSize="x-medium"
            value={filter}
            onChange={(e) => handleSetFilter(e.target.value as FilterMarketType)}
            fullWidth
            options={FILTER_BY_OPTIONS}
          />
          <Select
            label={t('filter.order-by')}
            placeholder=""
            variant="primary"
            selectSize="x-medium"
            value={order}
            onChange={(e) => handleSetOrder(e.target.value as OrderMarketType)}
            fullWidth
            options={ORDER_BY_OPTIONS}
          />
          <Button variant="secondary" className="w-full flex-shrink-0 px-10 xl:w-auto" size="x-medium" rounded="xl">
            {t('filter.apply-filters')}
          </Button>
        </HStack>
      </HStack>
    </section>
  )
}

export default Filter
