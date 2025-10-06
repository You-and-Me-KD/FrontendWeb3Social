'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '@/libs'

interface Props extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  indicatorClassName?: Props['className']
}

const Progress: React.FC<Props> = ({ className, value, indicatorClassName, ...props }) => {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn('bg-main-6 relative h-1 w-full overflow-hidden rounded-full', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn('bg-main-5 h-full w-full flex-1 transition-all', indicatorClassName)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
