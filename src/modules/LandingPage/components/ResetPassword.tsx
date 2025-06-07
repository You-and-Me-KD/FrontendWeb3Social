'use client'
import { useResetPasswordMutation } from '@/apis/auths'
import { rocketImage } from '@/assets'
import { Button, Toast } from '@/components'
import FormWrapper from '@/components/form/form-wrapper'
import { InputField } from '@/components/form/input-field'
import { FormBox } from '@/components/ui'
import useSearchParams from '@/hooks/useSearchParams'
import useTranslations from '@/hooks/useTranslations'
import { getResetPasswordSchema } from '@/libs'
import { IAxiosResponse } from '@/types/common'
import { getErrorMessage } from '@/utils/fn'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const ResetPassword: FC = () => {
  const { searchParams } = useSearchParams()

  const { t } = useTranslations('common')

  const { t: tReset } = useTranslations('reset')
  const schema = getResetPasswordSchema(t)
  const form = useForm({
    resolver: zodResolver(schema),
  })

  const { mutateAsync } = useResetPasswordMutation()

  const onSubmit = async (data: z.infer<typeof schema>) => {
    const token = searchParams.get('token') as string
    const request = {
      newPassword: data.password,
      token,
    }
    try {
      await mutateAsync(request, {
        onSuccess: () => {
          Toast.success({
            label: t('toast.success.reset-password'),
            description: t('success.RESET_PASSWORD_SUCCESS'),
          })
        },
        onError: async (error: IAxiosResponse) => {
          const text = await getErrorMessage(error?.meta.message)
          Toast.error({
            label: t('toast.error.reset-password-error'),
            description: t(text),
          })
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-[484px] max-w-full">
      <FormBox className="">
        <h4 className="text-center text-xl font-bold xl:text-2xl">{tReset('title')}</h4>
        <FormWrapper
          formId="reset-password-form"
          form={form}
          onSubmit={onSubmit}
          className="mt-10 flex flex-col gap-7 xl:mt-[2rem]"
        >
          <InputField
            type="password"
            placeholder=" "
            autoComplete="off"
            name="password"
            label={tReset('form.password')}
          />
          <InputField
            type="password"
            placeholder=" "
            autoComplete="off"
            name="confirmPassword"
            label={tReset('form.confirmPassword')}
          />
          <div className="flex flex-wrap items-center justify-between text-sm">
            <p className="text-main-2 cursor-pointer font-bold">{tReset('information.description')}</p>
          </div>
          <Button variant="secondary">{tReset('form.btn')}</Button>
        </FormWrapper>
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
export default ResetPassword
