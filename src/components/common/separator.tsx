import { cn } from '@/libs'

interface SeparatorProps {
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

export const Separator = ({ className, orientation = 'horizontal' }: SeparatorProps) => {
  if (orientation === 'vertical') {
    return <div className={cn('bg-main-3 h-full w-[1px]', className)} />
  }

  return <div className={cn('bg-main-3 h-[1px] w-full', className)} />
}
