'use client'

import { FC } from 'react'
import { VStack } from '@/components/common'
import { BillingForm, CheckoutSummary } from './components'

const CheckoutPage: FC = () => {
  return (
    <section className="w-full">
      <VStack spacing={0} align="start" className="mb-6">
        <p className="text-main-8 text-xs font-bold uppercase">Your Order</p>
        <h1 className="text-2xl font-bold text-white">Checkout</h1>
      </VStack>

      <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <BillingForm />
        </div>
        <div className="xl:col-span-1">
          <CheckoutSummary />
        </div>
      </div>
    </section>
  )
}

export default CheckoutPage
