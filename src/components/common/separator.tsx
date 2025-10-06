import { cn } from '@/libs'

interface SeparatorProps {
  className?: string
}

export const Separator = ({ className }: SeparatorProps) => {
  return <div className={cn('bg-main-3 h-[1px] w-full', className)} />
}
