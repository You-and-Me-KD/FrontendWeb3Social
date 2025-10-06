import { HStack, VStack } from '@/components/common'
import { Progress } from '@/components/ui'
import useTranslations from '@/hooks/useTranslations'

interface ExpProps {
  exp: number
}

export const Exp = ({ exp }: ExpProps) => {
  const { t } = useTranslations('common')
  return (
    <VStack spacing={4} className="hidden 2xl:flex">
      <HStack pos="apart">
        <p className="text-xs font-bold text-white uppercase">{t('common.next')}</p>
        <p className="text-xs font-bold text-white">
          {exp} {t('common.exp')}
        </p>
      </HStack>
      <HStack className="w-27.5">
        <Progress value={exp} />
      </HStack>
    </VStack>
  )
}
