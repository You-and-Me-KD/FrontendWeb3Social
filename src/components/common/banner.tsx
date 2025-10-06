import useBanner from '@/hooks/useBanner'
import { HStack } from './h-stack'
import { VStack } from './v-stack'

export const Banner = () => {
  const { label, description } = useBanner()
  return (
    <HStack className="relative mb-10 h-40 w-full rounded-2xl bg-[url('https://odindesignthemes.com/vikinger-dark/img/banner/banner-bg.png')] bg-cover bg-center bg-no-repeat p-10">
      <VStack spacing={4}>
        <h1 className="text-2xl font-bold xl:text-4xl">{label}</h1>
        <p className="text-sm font-medium xl:text-base">{description}</p>
      </VStack>
    </HStack>
  )
}
