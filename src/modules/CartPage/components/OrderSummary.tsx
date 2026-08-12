'use client'

import { Button, HStack, Separator, VStack } from '@/components/common'
import { useRouter } from '@/i18n/navigation'

interface OrderSummaryProps {
  itemCount: number
  subtotal: number
  discount: number
  total: number
}

const OrderSummary = ({ itemCount, subtotal, discount, total }: OrderSummaryProps) => {
  const router = useRouter()

  return (
    <VStack spacing={24} align="start" className="bg-main-1 h-fit w-full rounded-2xl p-4 xl:p-7">
      <span className="text-sm font-bold text-white">Order Totals</span>

      <p className="text-3xl font-bold text-white">
        <span className="text-button-primary">$</span> {total.toFixed(2)}
      </p>

      <Separator />

      <VStack spacing={12} align="start" className="w-full">
        <HStack pos="apart" className="w-full">
          <span className="text-main-2 text-sm font-medium">Cart ({itemCount})</span>
          <span className="text-sm font-bold text-white">$ {subtotal.toFixed(2)}</span>
        </HStack>
        <HStack pos="apart" className="w-full">
          <span className="text-main-2 text-sm font-medium">Code</span>
          <span className="text-sm font-bold text-white">-$ {discount.toFixed(2)}</span>
        </HStack>
        <HStack pos="apart" className="w-full">
          <span className="text-main-2 text-sm font-medium">Total</span>
          <span className="text-sm font-bold text-white">$ {total.toFixed(2)}</span>
        </HStack>
      </VStack>

      <Button variant="primary" size="x-medium" rounded="xl" fullWidth onClick={() => router.push('/checkout')}>
        Proceed to Checkout
      </Button>
      <Button
        variant="custom"
        customVariantStyles="border border-main-3 text-white hover:bg-main-3"
        size="x-medium"
        rounded="xl"
        fullWidth
      >
        Update Cart
      </Button>
    </VStack>
  )
}

export default OrderSummary
