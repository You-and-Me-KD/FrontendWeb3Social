'use client'

import { cn } from '@/libs/utils'
import { motion } from 'framer-motion'
import { FC } from 'react'

interface Props {
  active: number | string
  items: { label: string; value: number | string }[]
  handleClick: (value: unknown) => void
}

const Tabs: FC<Props> = ({ active, items = [], handleClick }) => {
  return (
    <div className="border-main-1 flex w-[calc(100vw-32px)] max-w-[362px] overflow-hidden rounded-2xl border xl:relative">
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => handleClick(item.value)}
          className={cn(
            'relative flex h-[54px] flex-1 cursor-pointer items-center justify-center font-bold',
            active === item.value ? 'text-white' : 'text-main-1',
          )}
        >
          {active === item.value && (
            <motion.div
              layoutId="active-tab"
              className="bg-main-1 absolute inset-0 z-0"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{item.label}</span>
        </button>
      ))}
    </div>
  )
}

export default Tabs
