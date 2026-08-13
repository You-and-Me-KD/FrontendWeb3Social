'use client'

import Image from 'next/image'
import { UserPlus, Send } from 'lucide-react'
import { Button, HStack, Separator, VStack } from '@/components/common'
import { PROFILE_USER, SOCIAL_LINKS } from './mock'
import { CircularProgress } from '@/components/ui'

const ProfileHeader = () => {
  return (
    <VStack spacing={0} align="start" className="w-full bg-main-1 rounded-2xl pb-4">
      <div className="relative mb-8 w-full">
        <div className="relative h-52 w-full rounded-2xl sm:h-72 xl:h-96">
          <Image src={PROFILE_USER.cover} alt="Profile cover" fill priority className="rounded-t-2xl object-cover" />
        </div>

        <div className="absolute inset-x-0 -bottom-6 grid grid-cols-3 items-end gap-2 px-4 xl:px-8">
          <div />

          <div className="flex justify-center">
            <CircularProgress
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEZghB-stFaphAohNqDAhEaXOWQJ9XvHKJw&s"
              value={25}
              size={124}
              strokeWidth={8}
              showLevelBadge={false}
              className="h-16 w-16 sm:h-20 sm:w-20 lg:h-[124px] lg:w-[124px] [&>svg]:h-full [&>svg]:w-full"
            />
          </div>

          <HStack pos="right" spacing={12} className="w-full">
            <Button variant="secondary" size="small" rounded="xl" className="px-2.5 sm:px-4">
              <UserPlus size={16} />
              <span className="hidden sm:inline">Add Friend</span>
            </Button>
            <Button variant="primary" size="small" rounded="xl" className="px-2.5 sm:px-4">
              <Send size={16} /> <span className="hidden sm:inline">Send Message</span>
            </Button>
          </HStack>
        </div>
      </div>

      <HStack pos="apart" align="center" spacing={16} className="w-full rounded-2xl px-4 pb-6 sm:px-6">
        <HStack spacing={16} align="center" className="flex-1">
          <VStack spacing={0} align="center">
            <span className="text-lg font-bold text-white">{PROFILE_USER.stats.posts}</span>
            <span className="text-main-8 text-xxs font-bold uppercase">Posts</span>
          </VStack>
          <Separator orientation="vertical" className="h-8" />
          <VStack spacing={0} align="center">
            <span className="text-lg font-bold text-white">{PROFILE_USER.stats.friends}</span>
            <span className="text-main-8 text-xxs font-bold uppercase">Friends</span>
          </VStack>
          <Separator orientation="vertical" className="h-8" />
          <VStack spacing={0} align="center">
            <span className="text-lg font-bold text-white">{PROFILE_USER.stats.visits}</span>
            <span className="text-main-8 text-xxs font-bold uppercase">Visits</span>
          </VStack>
          <Separator orientation="vertical" className="hidden h-8 sm:block" />
          <HStack spacing={8} align="center" className="hidden sm:flex">
            <span className="text-xl leading-none">{PROFILE_USER.countryFlag}</span>
            <span className="text-main-8 text-xxs font-bold uppercase">{PROFILE_USER.country}</span>
          </HStack>
        </HStack>

        <VStack spacing={2} align="center" className="hidden flex-1 md:flex">
          <h1 className="text-xl font-bold text-white">{PROFILE_USER.name}</h1>
          <a
            href={`https://${PROFILE_USER.website}`}
            target="_blank"
            rel="noreferrer"
            className="text-button-primary text-xs font-bold uppercase"
          >
            {PROFILE_USER.website}
          </a>
        </VStack>

        <HStack spacing={8} pos="right" className="flex-1">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className={`flex h-8 w-8 items-center justify-center rounded-lg text-white transition-transform hover:scale-105 ${social.className}`}
            >
              {social.icon}
            </a>
          ))}
        </HStack>
      </HStack>

      <VStack spacing={2} align="center" className="w-full md:hidden">
        <h1 className="text-xl font-bold text-white">{PROFILE_USER.name}</h1>
        <a
          href={`https://${PROFILE_USER.website}`}
          target="_blank"
          rel="noreferrer"
          className="text-button-primary text-xs font-bold uppercase"
        >
          {PROFILE_USER.website}
        </a>
      </VStack>
    </VStack>
  )
}

export default ProfileHeader
