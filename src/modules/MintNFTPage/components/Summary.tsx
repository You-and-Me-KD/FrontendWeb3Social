import { Button, HStack, Separator, VStack } from '@/components'
import useTranslations from '@/hooks/useTranslations'

const objects = {
  title: 'NFT Monkey',
  price: '$100',
  category: 'Category',
  type: 'ERC-721',
  description: 'Description',
  remarks: 'Remarks',
  startDate: '2025-01-01',
  endDate: '2025-01-01',
  chain: 'Ethereum',
  fee: '2.5%',
}

const Summary = () => {
  const { t } = useTranslations('mintNFT')
  return (
    <div className="bg-main-1 col-span-1 rounded-2xl p-4 xl:px-7 xl:py-8">
      <div>
        <h4 className="text-base font-bold">{t('create-nft.nft-summary')}</h4>
        <VStack className="mt-8" spacing={24}>
          <HStack pos="apart" align="center">
            <p className="text-sm font-bold">{t('create-nft.name')}</p>
            <p className="text-sm font-bold">{objects.title}</p>
          </HStack>

          <HStack pos="apart" align="center" className="">
            <p className="text-sm font-bold">{t('create-nft.category')}</p>
            <p className="text-sm font-bold">{objects.category}</p>
          </HStack>
          <HStack pos="apart" align="center" className="">
            <p className="text-sm font-bold">{t('create-nft.type')}</p>
            <p className="text-sm font-bold">{objects.type}</p>
          </HStack>
          <HStack pos="apart" align="center" className="">
            <p className="text-sm font-bold">{t('create-nft.description')}</p>
            <p className="text-sm font-bold">{objects.description}</p>
          </HStack>
          <HStack pos="apart" align="center" className="">
            <p className="text-sm font-bold">{t('create-nft.chain')}</p>
            <p className="text-sm font-bold">{objects.chain}</p>
          </HStack>
          <HStack pos="apart" align="center" className="">
            <p className="text-sm font-bold">{t('create-nft.remarks')}</p>
            <p className="text-sm font-bold">{objects.remarks}</p>
          </HStack>
          <Separator />
          <HStack pos="apart" align="center" className="">
            <p className="text-sm font-bold">{t('create-nft.price')}</p>
            <p className="text-sm font-bold">{objects.price}</p>
          </HStack>

          <HStack pos="apart" align="center" className="">
            <p className="text-sm font-bold">{t('create-nft.start-date')}</p>
            <p className="text-sm font-bold">{objects.startDate}</p>
          </HStack>
          <HStack pos="apart" align="center" className="">
            <p className="text-sm font-bold">{t('create-nft.end-date')}</p>
            <p className="text-sm font-bold">{objects.endDate}</p>
          </HStack>
          <HStack pos="apart" align="center" className="">
            <p className="text-sm font-bold">{t('create-nft.fee')}</p>
            <p className="text-sm font-bold">{objects.fee}</p>
          </HStack>
          <Separator />
          <HStack pos="center" spacing={6} align="center" className="">
            <span className="text-main-5 text-5xl font-bold">$</span>
            <span className="text-5xl font-bold text-white">100</span>
          </HStack>
          <Separator />
          <Button size="x-medium">{t('create-nft.mint')}</Button>
        </VStack>
      </div>
    </div>
  )
}

export default Summary
