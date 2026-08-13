import { HStack, VStack } from '@/components/common'
import { PROFILE_USER } from './mock'
import ProfileCard from './ProfileCard'

const ROWS = [
  { label: 'Email', value: PROFILE_USER.personalInfo.email },
  { label: 'Birthday', value: PROFILE_USER.personalInfo.birthday },
  { label: 'Occupation', value: PROFILE_USER.personalInfo.occupation },
  { label: 'Status', value: PROFILE_USER.personalInfo.status },
  { label: 'Birthplace', value: PROFILE_USER.personalInfo.birthplace },
  { label: 'Ps ID', value: PROFILE_USER.personalInfo.psId },
  { label: 'Xb ID', value: PROFILE_USER.personalInfo.xbId },
]

const PersonalInfo = () => {
  return (
    <ProfileCard title="Personal Info">
      <VStack spacing={12} align="start" className="w-full">
        {ROWS.map((row) => (
          <HStack key={row.label} spacing={16} align="start" className="w-full">
            <span className="text-main-2 w-24 shrink-0 text-sm font-medium">{row.label}</span>
            <span className="text-sm font-bold text-white">{row.value}</span>
          </HStack>
        ))}
      </VStack>
    </ProfileCard>
  )
}

export default PersonalInfo
