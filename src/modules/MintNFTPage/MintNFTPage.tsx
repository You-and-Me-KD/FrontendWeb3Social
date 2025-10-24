'use client'
import { FC } from 'react'
import { Form, Summary } from './components'
import { Title } from '@/components/ui/Title'
import useTranslations from '@/hooks/useTranslations'

const MintNFTPage: FC = () => {
  const { t } = useTranslations('mintNFT')
  return (
    <section className="w-full">
      <Title title={t('title.your-nft')} description={t('title.mint')} />
      <div className="grid w-full grid-cols-3 gap-4">
        <Form />
        <Summary />
      </div>
    </section>
  )
}

export default MintNFTPage
