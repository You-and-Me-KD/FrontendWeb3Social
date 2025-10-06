import { StarIcon } from '@/assets/icons'
import useTranslations from '@/hooks/useTranslations'
import Link from 'next/link'
import { Avatar, HStack, Separator, VStack } from '../common'

interface MarketplaceItemProps {
  name: string
  price: string
  image: string
  category: string
  description: string
  rate: number
  author: {
    name: string
    avatar: string
  }
}

export const MarketplaceItem = ({ name, price, image, category, description, author }: MarketplaceItemProps) => {
  const { t } = useTranslations('marketplace')
  return (
    <Link href="/" className="col-span-1">
      <VStack className="shadow-shadow-1 w-full overflow-hidden rounded-2xl" spacing={0}>
        <HStack className="h-45 w-full" style={{ background: `url(${image}) no-repeat center/cover` }}></HStack>
        <VStack className="bg-main-1 relative p-4 xl:p-7" spacing={0}>
          <p className="overflow-hidden text-base font-bold text-ellipsis whitespace-nowrap">{name}</p>
          <p className="text-xs font-bold">{category}</p>
          <p className="text-main-8 mt-5 line-clamp-2 overflow-hidden text-sm font-medium text-ellipsis">
            {description}
          </p>
          <HStack
            align="center"
            spacing={4}
            className="bg-main-7 absolute -top-4 right-4 h-8 rounded-full px-3"
            pos="center"
          >
            <p className="text-sm font-bold text-white">
              <span className="text-main-5 font-bold">$</span> {price}
            </p>
          </HStack>
        </VStack>
        <Separator />
        <HStack className="bg-main-10 h-13 px-4 xl:px-7" pos="apart" align="center">
          <HStack spacing={8} align="center">
            <Avatar src={author.avatar} alt={author.name} width={20} height={20} />
            <VStack spacing={0}>
              <p className="text-xxs font-medium">{t('common.posted-by')}</p>
              <p className="text-xs font-bold">{author.name}</p>
            </VStack>
          </HStack>
          <HStack spacing={4} align="center">
            <StarIcon rating={1} />
            <StarIcon rating={1} />
            <StarIcon rating={1} />
            <StarIcon rating={1} />
            <StarIcon rating={0.5} />
          </HStack>
        </HStack>
      </VStack>
    </Link>
  )
}
