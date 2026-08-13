import { HStack, VStack } from '@/components/common'
import { PROFILE_USER } from './mock'
import ProfileCard from './ProfileCard'

const ROWS: { label: string; value: string; isLink?: boolean }[] = [
  { label: 'Joined', value: PROFILE_USER.about.joined },
  { label: 'City', value: PROFILE_USER.about.city },
  { label: 'Country', value: PROFILE_USER.about.country },
  { label: 'Age', value: PROFILE_USER.about.age },
  { label: 'Web', value: PROFILE_USER.about.web, isLink: true },
]

const AboutMe = () => {
  return (
    <ProfileCard title="About Me">
      <p className="text-main-2 text-sm leading-relaxed">{PROFILE_USER.about.bio}</p>

      <VStack spacing={12} align="start" className="w-full">
        {ROWS.map((row) => (
          <HStack key={row.label} spacing={16} align="start" className="w-full">
            <span className="text-main-2 w-20 shrink-0 text-sm font-medium">{row.label}</span>
            {row.isLink ? (
              <a
                href={`https://${row.value}`}
                target="_blank"
                rel="noreferrer"
                className="text-button-primary text-sm font-bold"
              >
                {row.value}
              </a>
            ) : (
              <span className="text-sm font-bold text-white">{row.value}</span>
            )}
          </HStack>
        ))}
      </VStack>
    </ProfileCard>
  )
}

export default AboutMe
