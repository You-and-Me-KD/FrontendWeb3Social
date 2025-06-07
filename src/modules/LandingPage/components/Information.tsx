'use client'

import { LogoIcon } from '@/assets'
import useTranslations from '@/hooks/useTranslations'
import { FC } from 'react'
import Tabs from './Tabs'
import { useRouter } from '@/i18n/navigation'
import { RouteEnum } from '@/types/route'
import { TabType } from '@/stores/useLandingStore'

interface Props {
  tab: TabType
}

const Information: FC<Props> = ({ tab }) => {
  const { t } = useTranslations('login')
  const router = useRouter()
  const items = [
    {
      label: t('information.btn-login'),
      value: 'login',
    },
    {
      label: t('information.btn-register'),
      value: 'register',
    },
  ]

  const handleClick = (value: unknown) => {
    const tab = value as TabType
    router.push({
      pathname: RouteEnum.HOME,
      query: {
        tab,
      },
    })
  }

  return (
    <div className="w-[584px] max-w-full xl:absolute xl:left-20 2xl:left-[13%]">
      <div className="flex flex-col items-center justify-center gap-5 xl:gap-9">
        <LogoIcon />
        <div className="text-center">
          <h5 className="text-xl font-semibold">{t('information.welcome')}</h5>
          <h1 className="font-san2-serif text-5xl font-[900] xl:-mt-4 xl:text-9xl">{t('information.name')}</h1>
          <p className="mx-0 mt-9 hidden text-lg font-semibold lg:mx-25 xl:block">{t('information.description')}</p>
        </div>
        <div className="mt-2 flex items-center justify-center px-3 xl:mt-6 xl:px-0">
          <Tabs active={tab} handleClick={handleClick} items={items} />
        </div>
      </div>
    </div>
  )
}
export default Information
