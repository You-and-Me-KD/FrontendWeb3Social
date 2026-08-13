import { Award, Star } from 'lucide-react'
import { HStack, Separator, VStack } from '@/components/common'
import { CircularProgress } from '@/components/ui'
import { PROFILE_USER } from './mock'

const ProfileCompletion = () => {
  const { completion } = PROFILE_USER

  return (
    <VStack spacing={24} align="center" className="bg-main-1 w-full rounded-2xl p-6 text-center xl:p-7">
      <CircularProgress value={completion.percentage} size={140} strokeWidth={10} showLevelBadge={false}>
        <span className="text-3xl font-bold text-white">{completion.percentage}%</span>
      </CircularProgress>

      <VStack spacing={8} align="center">
        <span className="text-sm font-bold text-white">Profile Completion</span>
        <span className="text-main-8 text-xs font-medium">{PROFILE_USER.name}</span>
      </VStack>

      <p className="text-main-2 text-sm leading-relaxed">
        Complete your profile by filling profile info fields, completing quests & unlocking badges
      </p>

      <Separator />

      <HStack pos="around" className="w-full">
        <VStack spacing={8} align="center">
          <span className="text-lg font-bold text-white">
            {completion.questsCompleted}/{completion.questsTotal}
          </span>
          <VStack spacing={0} align="center">
            <span className="text-main-8 text-xxs font-bold uppercase">Quests</span>
            <span className="text-main-8 text-xxs font-bold uppercase">Completed</span>
          </VStack>
          <div className="bg-main-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-amber-400">
            <Star size={18} fill="currentColor" />
          </div>
        </VStack>

        <VStack spacing={8} align="center">
          <span className="text-lg font-bold text-white">
            {completion.badgesUnlocked}/{completion.badgesTotal}
          </span>
          <VStack spacing={0} align="center">
            <span className="text-main-8 text-xxs font-bold uppercase">Badges</span>
            <span className="text-main-8 text-xxs font-bold uppercase">Unlocked</span>
          </VStack>
          <div className="bg-main-3 text-main-9 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
            <Award size={18} />
          </div>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default ProfileCompletion
