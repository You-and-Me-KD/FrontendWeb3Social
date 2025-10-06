import { HStack, Tooltip } from '@/components/common'
import { cn } from '@/libs'
import Link from 'next/link'
import { cloneElement, JSX } from 'react'

interface ItemProps {
  icon: JSX.Element
  label: string
  href: string
  active: boolean
}

export const Item = ({ icon, label, href, active }: ItemProps) => {
  return (
    <Link href={href}>
      <Tooltip
        content={<p className="text-xs font-bold">{label}</p>}
        side="right"
        contentClassName="bg-main-7 rounded-full px-2 py-1"
      >
        <HStack
          className={cn(
            'hover:bg-main-7 group h-12 w-12 rounded-2xl transition-all',
            active && 'bg-button-primary hover:bg-button-primary',
          )}
          pos="center"
          align="center"
        >
          {cloneElement(icon, {
            className: cn('fill-[#616a82] group-hover:fill-main-5', active && 'fill-white group-hover:fill-white'),
          })}
        </HStack>
      </Tooltip>
    </Link>
  )
}
