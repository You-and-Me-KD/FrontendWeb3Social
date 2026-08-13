'use client'

import { FC } from 'react'
import { VStack } from '@/components/common'
import {
  AboutMe,
  Interests,
  JobsEducation,
  MoreStats,
  PersonalInfo,
  ProfileCompletion,
  ProfileHeader,
  ProfileTabs,
} from './components'

const ProfilePage: FC = () => {
  return (
    <VStack spacing={16} align="start" className="w-full">
      <ProfileHeader />
      <ProfileTabs />

      <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-12">
        <VStack spacing={16} align="start" className="xl:col-span-3">
          <AboutMe />
          <PersonalInfo />
        </VStack>

        <VStack spacing={16} align="start" className="xl:col-span-6">
          <Interests />
          <JobsEducation />
        </VStack>

        <VStack spacing={16} align="start" className="xl:col-span-3">
          <ProfileCompletion />
          <MoreStats />
        </VStack>
      </div>
    </VStack>
  )
}

export default ProfilePage
