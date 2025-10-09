import { cn } from '@/libs'
import { VStack, HStack } from '../common'

interface TitleProps {
  title: string
  description: string
  children?: React.ReactNode
  className?: string
}

export const Title = ({ title, description, children, className }: TitleProps) => {
  return (
    <HStack pos="apart" align="end" className={cn('mb-4 w-full', className)}>
      <VStack align="start" justify="start" spacing={0}>
        <p className="text-main-8 text-xs font-bold uppercase">{description}</p>
        <h1 className="text-2xl font-bold">{title}</h1>
      </VStack>
      {children}
    </HStack>
  )
}
