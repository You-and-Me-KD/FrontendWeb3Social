'use client'

import { FC, useMemo, useState } from 'react'
import { VStack } from '@/components/common'
import { CartItemRow, OrderSummary, PromoCode } from './components'
import { APPLIED_DISCOUNT, CartLineItem, INITIAL_CART_ITEMS } from './components/mock'

const CartPage: FC = () => {
  const [items, setItems] = useState<CartLineItem[]>(INITIAL_CART_ITEMS)
  const [discount, setDiscount] = useState(APPLIED_DISCOUNT)

  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items])
  const total = Math.max(0, subtotal - discount)

  const updateItem = (id: string, patch: Partial<CartLineItem>) => {
    setItems((current) => current.map((item) => (item.id === id ? { ...item, ...patch } : item)))
  }

  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id))
  }

  const redeemCode = (code: string) => {
    setDiscount(code.trim() ? APPLIED_DISCOUNT : 0)
  }

  return (
    <section className="w-full">
      <VStack spacing={0} align="start" className="mb-6">
        <p className="text-main-8 text-xs font-bold uppercase">Browse Your</p>
        <h1 className="text-2xl font-bold text-white">
          Shopping Cart <span className="text-button-primary">{items.length}</span>
        </h1>
      </VStack>

      <div className="hidden w-full grid-cols-3 gap-4 xl:grid">
        <div className="col-span-2 grid grid-cols-[minmax(0,1fr)_180px_140px_110px_32px] gap-6 px-4">
          <span className="text-main-2 text-xs font-bold uppercase">Item</span>
          <span className="text-main-2 text-xs font-bold uppercase">License</span>
          <span className="text-main-2 text-xs font-bold uppercase">Quantity</span>
          <span className="text-main-2 text-xs font-bold uppercase">Price</span>
          <span />
        </div>
      </div>

      <div className="mt-4 grid w-full grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="flex flex-col gap-4 xl:col-span-2">
          {items.map((item) => (
            <CartItemRow
              key={item.id}
              item={item}
              onLicenseChange={(license) => updateItem(item.id, { license })}
              onQuantityChange={(quantity) => updateItem(item.id, { quantity })}
              onRemove={() => removeItem(item.id)}
            />
          ))}

          <PromoCode onRedeem={redeemCode} />
        </div>

        <div className="xl:col-span-1">
          <OrderSummary itemCount={items.length} subtotal={subtotal} discount={discount} total={total} />
        </div>
      </div>
    </section>
  )
}

export default CartPage
