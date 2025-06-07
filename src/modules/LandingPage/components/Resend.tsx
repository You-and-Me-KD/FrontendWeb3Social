'use client'
import { useResendVerificationMutation } from '@/apis/auths'
import { rocketImage } from '@/assets'
import { Button, Toast } from '@/components'
import FormWrapper from '@/components/form/form-wrapper'
import { InputField } from '@/components/form/input-field'
import { FormBox } from '@/components/ui'
import useTranslations from '@/hooks/useTranslations'
import { getResendSchema } from '@/libs'
import { IAxiosResponse } from '@/types/common'
import { getErrorMessage } from '@/utils/fn'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const Resend: FC = () => {
  const { t } = useTranslations('common')
  const { t: tResend } = useTranslations('resend')
  const schema = getResendSchema(t)
  const form = useForm({
    resolver: zodResolver(schema),
  })

  const { mutateAsync } = useResendVerificationMutation()

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      await mutateAsync(data, {
        onSuccess: () => {
          Toast.success({
            label: t('common.toast.success.resend-email'),
            description: t('common.success.RESEND_EMAIL_SUCCESS'),
          })
        },
        onError: async (error: IAxiosResponse) => {
          const text = await getErrorMessage(error?.meta.message)
          Toast.error({
            label: t('common.toast.error.resend-email-error'),
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
        <h4 className="text-center text-xl font-bold xl:text-2xl">{tResend('title')}</h4>
        <FormWrapper
          formId="login-form"
          form={form}
          onSubmit={onSubmit}
          className="mt-10 flex flex-col gap-7 xl:mt-[2rem]"
        >
          <InputField placeholder=" " autoComplete="off" name="email" label={tResend('form.email')} />
          <div className="flex flex-wrap items-center justify-between text-sm">
            <p className="text-main-2 cursor-pointer font-bold">{tResend('information.description')}</p>
          </div>
          <Button variant="primary">{tResend('form.btn')}</Button>
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
export default Resend
