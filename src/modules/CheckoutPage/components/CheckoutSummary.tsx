'use client'

import { useMemo, useState } from 'react'
import { Button, HStack, Radio, Separator, VStack } from '@/components/common'
import { APPLIED_DISCOUNT, INITIAL_CART_ITEMS } from '@/modules/CartPage/components/mock'
import { PAYMENT_METHODS } from './mock'

const CheckoutSummary = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>(PAYMENT_METHODS[0].id)

  const subtotal = useMemo(() => INITIAL_CART_ITEMS.reduce((sum, item) => sum + item.price * item.quantity, 0), [])
  const total = Math.max(0, subtotal - APPLIED_DISCOUNT)

  return (
    <VStack spacing={24} align="start" className="bg-main-1 w-full rounded-2xl p-4 xl:p-7">
      <span className="text-sm font-bold text-white">Order Summary</span>

      <VStack spacing={16} align="start" className="w-full">
        {INITIAL_CART_ITEMS.map((item) => (
          <HStack key={item.id} pos="apart" align="start" className="w-full" spacing={16}>
            <VStack spacing={2} className="min-w-0 flex-1">
              <span className="w-full truncate text-sm font-bold text-white">{item.name}</span>
              <span className="text-main-2 text-xs font-medium capitalize">{item.license} License</span>
            </VStack>
            <span className="shrink-0 text-sm font-bold text-white">
              <span className="text-button-primary">$</span> {item.price.toFixed(2)} x {item.quantity}
            </span>
          </HStack>
        ))}
      </VStack>

      <Separator />

      <VStack spacing={12} align="start" className="w-full">
        <HStack pos="apart" className="w-full">
          <span className="text-main-2 text-sm font-medium">Cart Total ({INITIAL_CART_ITEMS.length})</span>
          <span className="text-sm font-bold text-white">$ {subtotal.toFixed(2)}</span>
        </HStack>
        <HStack pos="apart" className="w-full">
          <span className="text-main-2 text-sm font-medium">Code</span>
          <span className="text-sm font-bold text-white">-$ {APPLIED_DISCOUNT.toFixed(2)}</span>
        </HStack>
        <HStack pos="apart" className="w-full">
          <span className="text-main-2 text-sm font-medium">Total</span>
          <span className="text-sm font-bold text-white">$ {total.toFixed(2)}</span>
        </HStack>
      </VStack>

      <Separator />

      <p className="w-full text-center text-3xl font-bold text-white">
        <span className="text-button-primary">$</span> {total.toFixed(2)}
      </p>

      <Separator />

      <VStack spacing={16} align="start" className="w-full">
        <span className="text-sm font-bold text-white">Payment Method</span>
        {PAYMENT_METHODS.map((method) => (
          <VStack key={method.id} spacing={8} align="start" className="w-full">
            <Radio
              id={method.id}
              name="paymentMethod"
              value={method.id}
              color="green"
              checked={paymentMethod === method.id}
              onChange={() => setPaymentMethod(method.id)}
              label={method.label}
            />
            {paymentMethod === method.id && (
              <p className="text-main-2 pl-7 text-xs leading-relaxed">{method.description}</p>
            )}
          </VStack>
        ))}
      </VStack>

      <Button variant="primary" size="x-medium" rounded="xl" fullWidth>
        Complete Order!
      </Button>
    </VStack>
  )
}

export default CheckoutSummary
