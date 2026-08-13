import { VStack } from '@/components/common'
import { PROFILE_USER } from './mock'
import ProfileCard from './ProfileCard'

const JobsEducation = () => {
  return (
    <ProfileCard title="Jobs & Education">
      <VStack spacing={0} align="start" className="w-full">
        {PROFILE_USER.jobs.map((job, index) => {
          const isLast = index === PROFILE_USER.jobs.length - 1
          return (
            <div key={job.title} className="relative w-full pb-8 pl-8 last:pb-0">
              {!isLast && <span className="bg-main-3 absolute top-4 left-[5px] h-full w-px" />}
              <span className="border-button-primary bg-main-1 absolute top-1 left-0 h-3 w-3 rounded-full border-2" />

              <VStack spacing={6} align="start">
                <span className="text-sm font-bold text-white">{job.title}</span>
                <span className="text-main-8 text-xxs font-bold uppercase">{job.period}</span>
                <p className="text-main-2 text-sm leading-relaxed">{job.description}</p>
              </VStack>
            </div>
          )
        })}
      </VStack>
    </ProfileCard>
  )
}

export default JobsEducation
