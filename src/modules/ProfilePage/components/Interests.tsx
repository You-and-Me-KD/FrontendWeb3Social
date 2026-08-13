import { VStack } from '@/components/common'
import { PROFILE_USER } from './mock'
import ProfileCard from './ProfileCard'

const Interests = () => {
  return (
    <ProfileCard title="Interests">
      {PROFILE_USER.interests.map((interest) => (
        <VStack key={interest.label} spacing={6} align="start" className="w-full">
          <span className="text-sm font-bold text-white">{interest.label}</span>
          <p className="text-main-2 text-sm leading-relaxed">{interest.value}</p>
        </VStack>
      ))}
    </ProfileCard>
  )
}

export default Interests
