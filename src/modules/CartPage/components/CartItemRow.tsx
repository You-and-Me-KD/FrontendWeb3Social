import Image from 'next/image'
import { XIcon } from '@/assets'
import { HStack, Select, VStack } from '@/components/common'
import { CartLineItem, LICENSE_OPTIONS } from './mock'
import QuantityStepper from './QuantityStepper'

interface CartItemRowProps {
  item: CartLineItem
  onLicenseChange: (license: string) => void
  onQuantityChange: (quantity: number) => void
  onRemove: () => void
}

const CartItemRow = ({ item, onLicenseChange, onQuantityChange, onRemove }: CartItemRowProps) => {
  return (
    <div className="bg-main-1 grid w-full grid-cols-1 items-center gap-4 rounded-2xl p-4 xl:grid-cols-[minmax(0,1fr)_180px_140px_110px_32px] xl:gap-6 xl:p-4">
      <HStack spacing={12} align="center" noWrap>
        <Image
          src={item.image}
          alt={item.name}
          width={88}
          height={88}
          className="aspect-square shrink-0 rounded-xl object-cover"
        />
        <VStack spacing={2} className="min-w-0 flex-1">
          <span className="w-full truncate text-sm font-bold text-white">{item.name}</span>
          <HStack spacing={6} align="center">
            <span className="bg-cyan h-1.5 w-1.5 shrink-0 rounded-full" />
            <span className="text-cyan text-xs font-bold">{item.category}</span>
          </HStack>
          <span className="text-main-2 text-xs font-medium">{item.author}</span>
        </VStack>
      </HStack>

      <VStack spacing={4} align="start" className="w-full xl:contents">
        <span className="text-main-2 text-xs font-bold uppercase xl:hidden">License</span>
        <Select
          variant="primary"
          selectSize="small"
          rounded="xl"
          fullWidth
          value={item.license}
          onChange={(event) => onLicenseChange(event.target.value)}
          options={LICENSE_OPTIONS}
        />
      </VStack>

      <VStack spacing={4} align="start" className="w-full xl:contents">
        <span className="text-main-2 text-xs font-bold uppercase xl:hidden">Quantity</span>
        <QuantityStepper value={item.quantity} onChange={onQuantityChange} />
      </VStack>

      <VStack spacing={4} align="start" className="w-full xl:contents">
        <span className="text-main-2 text-xs font-bold uppercase xl:hidden">Price</span>
        <p className="text-sm font-bold text-white">
          <span className="text-button-primary">$</span> {(item.price * item.quantity).toFixed(2)}
        </p>
      </VStack>

      <HStack pos="right" className="w-full xl:contents">
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${item.name} from cart`}
          className="border-main-3 text-main-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border transition-colors duration-200 hover:border-white hover:text-white"
        >
          <XIcon width={10} height={10} />
        </button>
      </HStack>
    </div>
  )
}

export default CartItemRow
