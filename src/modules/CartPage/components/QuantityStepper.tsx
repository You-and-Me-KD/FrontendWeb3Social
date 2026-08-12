import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { HStack, VStack } from '@/components/common'

interface QuantityStepperProps {
  value: number
  onChange: (value: number) => void
  min?: number
}

const QuantityStepper = ({ value, onChange, min = 1 }: QuantityStepperProps) => {
  return (
    <HStack
      pos="apart"
      align="center"
      spacing={0}
      noWrap
      className="border-input-border-primary h-[54px] w-full rounded-xl border px-4"
    >
      <span className="text-base font-bold text-white">{value}</span>
      <VStack spacing={0} align="center" className="text-main-2">
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="cursor-pointer hover:text-white"
          aria-label="Increase quantity"
        >
          <ChevronUpIcon size={14} />
        </button>
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="cursor-pointer hover:text-white"
          aria-label="Decrease quantity"
          disabled={value <= min}
        >
          <ChevronDownIcon size={14} />
        </button>
      </VStack>
    </HStack>
  )
}

export default QuantityStepper
