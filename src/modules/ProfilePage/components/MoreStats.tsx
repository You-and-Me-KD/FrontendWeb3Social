import { Clock, MessageSquare, ThumbsUp, UserPlus } from 'lucide-react'
import { HStack, VStack } from '@/components/common'
import { PROFILE_USER } from './mock'
import ProfileCard from './ProfileCard'

const ICONS = [UserPlus, Clock, MessageSquare, ThumbsUp]

const MoreStats = () => {
  return (
    <ProfileCard title="More Stats">
      <VStack spacing={16} align="start" className="w-full">
        {PROFILE_USER.moreStats.map((stat, index) => {
          const Icon = ICONS[index]
          return (
            <HStack key={stat.label} spacing={16} align="center" className="w-full">
              <div className="from-main-4 to-main-9 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white">
                <Icon size={18} />
              </div>
              <VStack spacing={2} align="start">
                <span className="text-main-8 text-xxs font-bold uppercase">{stat.label}</span>
                <span className="text-sm font-bold text-white">{stat.value}</span>
              </VStack>
            </HStack>
          )
        })}
      </VStack>
    </ProfileCard>
  )
}

export default MoreStats
