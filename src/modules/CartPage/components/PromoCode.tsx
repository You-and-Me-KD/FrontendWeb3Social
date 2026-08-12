'use client'

import { useState } from 'react'
import { Button, HStack, Input, VStack } from '@/components/common'

interface PromoCodeProps {
  onRedeem: (code: string) => void
}

const PromoCode = ({ onRedeem }: PromoCodeProps) => {
  const [code, setCode] = useState('')

  return (
    <VStack
      spacing={16}
      align="start"
      className="bg-main-1 w-full rounded-2xl p-4 xl:flex-row xl:items-center xl:justify-between xl:p-7"
    >
      <p className="text-main-2 text-sm font-medium xl:max-w-65">
        If you have a promotional or a discount code, please enter it right here to redeem it!
      </p>
      <HStack spacing={12} noWrap className="w-full xl:w-auto">
        <Input
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder="Promo Code"
          variant="secondary"
          inputSize="x-medium"
          rounded="xl"
          className="min-w-0 flex-1 xl:min-w-50"
        />
        <Button
          type="button"
          variant="secondary"
          size="x-medium"
          rounded="xl"
          className="shrink-0 px-8"
          onClick={() => onRedeem(code)}
        >
          Redeem Code
        </Button>
      </HStack>
    </VStack>
  )
}

export default PromoCode
