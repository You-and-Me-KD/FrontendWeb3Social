import { ReactNode } from 'react'
import { MoreHorizontal } from 'lucide-react'
import { cn } from '@/libs'
import { HStack, VStack } from '@/components/common'

interface ProfileCardProps {
  title: string
  children: ReactNode
  className?: string
}

const ProfileCard = ({ title, children, className }: ProfileCardProps) => {
  return (
    <VStack spacing={20} align="start" className={cn('bg-main-1 w-full rounded-2xl p-6 xl:p-7', className)}>
      <HStack pos="apart" className="w-full">
        <span className="text-sm font-bold text-white">{title}</span>
        <button type="button" aria-label="More options" className="text-main-8 cursor-pointer hover:text-white">
          <MoreHorizontal size={18} />
        </button>
      </HStack>
      {children}
    </VStack>
  )
}

export default ProfileCard
