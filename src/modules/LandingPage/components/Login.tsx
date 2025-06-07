'use client'
import { useLoginMutation } from '@/apis/auths'
import { FacebookIcon, GoogleIcon, MetamaskIcon, rocketImage, TwitterIcon } from '@/assets'
import { Button, Toast } from '@/components'
import { CheckboxFields } from '@/components/form/checkbox-field'
import FormWrapper from '@/components/form/form-wrapper'
import { InputField } from '@/components/form/input-field'
import { FormBox } from '@/components/ui'
import useTranslations from '@/hooks/useTranslations'
import { useRouter } from '@/i18n/navigation'
import { getLoginSchema } from '@/libs'
import { IAxiosResponse } from '@/types/common'
import { RouteEnum } from '@/types/route'
import { getErrorMessage } from '@/utils/fn'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const Login: FC = () => {
  const router = useRouter()

  const { t } = useTranslations('common')
  const { t: tLogin } = useTranslations('login')
  const schema = getLoginSchema(t)
  const form = useForm({
    resolver: zodResolver(schema),
  })

  const { mutateAsync } = useLoginMutation()

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      await mutateAsync(data, {
        onSuccess: () => {
          Toast.success({
            label: t('common.toast.success.login'),
            description: t('common.success.LOGIN_SUCCESS'),
          })
        },
        onError: async (error: IAxiosResponse) => {
          const text = await getErrorMessage(error?.meta.message)
          Toast.error({
            label: t('common.toast.error.login'),
            description: t(text),
          })
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleForgot = () => {
    router.push({
      pathname: RouteEnum.HOME,
      query: {
        tab: 'forgot-password',
      },
    })
  }

  return (
    <div className="w-[484px] max-w-full">
      <FormBox className="">
        <h4 className="text-center text-xl font-bold xl:text-2xl">{tLogin('title')}</h4>
        <FormWrapper
          formId="login-form"
          form={form}
          onSubmit={onSubmit}
          className="mt-10 flex flex-col gap-7 xl:mt-[4.75rem]"
        >
          <InputField placeholder=" " autoComplete="off" name="email" label={tLogin('form.username-or-email')} />

          <InputField
            placeholder=" "
            autoComplete="new-password"
            name="password"
            label={tLogin('form.password')}
            type="password"
          />
          <div className="flex flex-wrap items-center justify-between text-sm">
            <CheckboxFields
              id="remember"
              name="remember"
              label={tLogin('form.remember')}
              checkboxSize="medium"
              color="green"
              rounded="md"
            />
            <button className="text-main-2 cursor-pointer font-bold" onClick={handleForgot}>
              {tLogin('form.forgot')}
            </button>
          </div>
          <Button variant="secondary">{tLogin('form.btn')}</Button>
        </FormWrapper>
        <div className="mt-10 flex items-center justify-center gap-4 text-sm font-bold text-white">
          <div className="bg-main-3 h-[1px] flex-1"></div>
          <p>{tLogin('form.login-social')}</p>
          <div className="bg-main-3 h-[1px] flex-1"></div>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-white p-1 transition-all duration-300 hover:opacity-80">
            <GoogleIcon className="h-4 w-4" />
          </div>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-white p-1 transition-all duration-300 hover:opacity-80">
            <FacebookIcon />
          </div>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-white p-1 transition-all duration-300 hover:opacity-80">
            <TwitterIcon className="h-4 w-4" />
          </div>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-white p-1 transition-all duration-300 hover:opacity-80">
            <MetamaskIcon className="h-4 w-4" />
          </div>
        </div>
      </FormBox>
      <Image
        src={rocketImage}
        alt="rocket"
        width={160}
        height={156}
        className="absolute -top-17 -left-20 hidden md:block"
      />
    </div>
  )
}
export default Login
