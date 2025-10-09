import { HStack, VStack } from '@/components'
import Link from 'next/link'
import { categories } from './mocks'
import { ICategoryItem } from './types'
import useTranslations from '@/hooks/useTranslations'
import { Title } from '@/components/ui/Title'

const Categories = () => {
  const { t } = useTranslations('marketplace')
  return (
    <VStack align="start" justify="start" className="w-full">
      <Title title={t('categories.title')} description={t('categories.description')} />
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryItem key={category.name} {...category} />
        ))}
      </div>
    </VStack>
  )
}

export default Categories

const CategoryItem = ({ name, banner, color, color2, description }: ICategoryItem) => {
  return (
    <Link href="/" className="col-span-1">
      <HStack
        className="h-35.5 rounded-2xl pt-8 pl-6"
        align="start"
        style={{
          background: `url(${banner}) no-repeat 100% 0, linear-gradient(90deg, ${color}, ${color2})`,
        }}
      >
        <VStack align="start" justify="start" spacing={0}>
          <VStack spacing={4}>
            <p className="text-lg leading-4.5 font-bold text-white">{name}</p>
            <p className="text-sm font-medium text-white">{description}</p>
          </VStack>
          <VStack spacing={0} className="mt-6 h-5 rounded-full bg-white px-2" align="center" justify="center">
            <p className="text-main-9 text-xs font-bold">1350 Items</p>
          </VStack>
        </VStack>
      </HStack>
    </Link>
  )
}
