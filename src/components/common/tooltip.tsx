'use client'

import type * as React from 'react'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '@/libs'

function TooltipWrapper({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip-wrapper" {...props} />
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 4,
  side = 'top',
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  const getAnimationClasses = (side: string) => {
    switch (side) {
      case 'top':
        return 'animate-tooltip-slide-in data-[state=closed]:animate-tooltip-slide-out'
      case 'bottom':
        return 'animate-tooltip-slide-in-up data-[state=closed]:animate-tooltip-slide-out-down'
      case 'left':
        return 'animate-tooltip-slide-in-right data-[state=closed]:animate-tooltip-slide-out-left'
      case 'right':
        return 'animate-tooltip-slide-in-left data-[state=closed]:animate-tooltip-slide-out-right'
      default:
        return 'animate-tooltip-slide-in data-[state=closed]:animate-tooltip-slide-out'
    }
  }

  return (
    <TooltipPrimitive.Content
      className={cn(
        `bg-popover text-popover-foreground z-50 overflow-hidden rounded-md px-3 py-1.5 text-sm ${getAnimationClasses(side)} transform transition-all duration-200 ease-out`,
        className,
      )}
      data-slot="tooltip-content"
      sideOffset={sideOffset}
      side={side}
      {...props}
    />
  )
}

function TooltipProvider({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider data-slot="tooltip-provider" {...props} />
}

interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  delayDuration?: number
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  className?: string
  contentClassName?: string
  defaultOpen?: boolean
}

function Tooltip({
  children,
  content,
  delayDuration = 200,
  side = 'top',
  align = 'center',
  className,
  contentClassName,
  defaultOpen = false,
}: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipWrapper delayDuration={delayDuration} defaultOpen={defaultOpen}>
        <TooltipTrigger asChild className={className}>
          {children}
        </TooltipTrigger>
        <TooltipContent side={side} align={align} className={contentClassName}>
          {content}
        </TooltipContent>
      </TooltipWrapper>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, TooltipWrapper }
