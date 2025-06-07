'use client'
import useSearchParams from '@/hooks/useSearchParams'
import { FC, useMemo } from 'react'
import {
  AnimatedPanel,
  Decoration,
  ForgotPassword,
  Information,
  Login,
  Register,
  Resend,
  ResetPassword,
} from './components'
import { TabType } from '@/stores/useLandingStore'

const LandingPage: FC = () => {
  const { searchParams } = useSearchParams()
  const tab = (searchParams.get('tab') || 'login') as TabType
  const convertActiveTab = useMemo(() => {
    return ['forgot-password', 'login', 'reset-password'].includes(tab) ? 'login' : 'register'
  }, [tab])
  return (
    <section className="top-0 left-0 h-auto w-full bg-[url(/images/landing-background.webp)] bg-cover bg-center bg-no-repeat px-3 py-6 xl:fixed xl:h-full xl:px-0 xl:py-0">
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 md:relative xl:flex-row xl:gap-0">
        <Decoration />
        <Information tab={convertActiveTab} />

        <AnimatedPanel visible={tab === 'login'}>
          <Login />
        </AnimatedPanel>

        <AnimatedPanel visible={tab === 'register'}>
          <Register />
        </AnimatedPanel>

        <AnimatedPanel visible={tab === 'resend'}>
          <Resend />
        </AnimatedPanel>

        <AnimatedPanel visible={tab === 'forgot-password'}>
          <ForgotPassword />
        </AnimatedPanel>

        <AnimatedPanel visible={tab === 'reset-password'}>
          <ResetPassword />
        </AnimatedPanel>
      </div>
    </section>
  )
}

export default LandingPage
