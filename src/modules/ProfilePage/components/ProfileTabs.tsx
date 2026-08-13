'use client'

import { useRef, useState } from 'react'
import {
  Archive,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Film,
  ImageIcon,
  LayoutGrid,
  Medal,
  PlayCircle,
  Smile,
  User,
  Users,
} from 'lucide-react'
import { cn } from '@/libs'
import { HStack } from '@/components/common'

const TABS = [
  { id: 'timeline', label: 'Timeline', icon: User },
  { id: 'overview', label: 'Overview', icon: LayoutGrid },
  { id: 'about', label: 'About', icon: Smile },
  { id: 'friends', label: 'Friends', icon: Users },
  { id: 'photos', label: 'Photos', icon: ImageIcon },
  { id: 'reels', label: 'Reels', icon: Film },
  { id: 'badges', label: 'Badges', icon: Medal },
  { id: 'videos', label: 'Videos', icon: PlayCircle },
  { id: 'groups', label: 'Groups', icon: Archive },
  { id: 'events', label: 'Events', icon: Calendar },
]

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollBy = (offset: number) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <HStack spacing={8} align="center" className="bg-main-1 w-full rounded-2xl p-2">
      <button
        type="button"
        aria-label="Scroll tabs left"
        onClick={() => scrollBy(-160)}
        className="text-main-2 shrink-0 cursor-pointer p-2 transition-colors hover:text-white"
      >
        <ChevronLeft size={18} />
      </button>

      <div ref={scrollRef} className="no-scrollbar flex-1 flex gap-4 items-stretch overflow-x-auto">
        {TABS.map((tab) => {
          const Icon = tab.icon
          const isActive = tab.id === activeTab
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'group relative flex flex-1 shrink-0 flex-col items-center gap-2 px-4 py-6 transition-colors',
                'cursor-pointer',
              )}
            >
              <Icon size={20} className={cn('text-main-2 transition-colors', isActive && 'text-button-primary')} />
              <span
                className={cn(
                  'absolute bottom-0 h-0.5 w-full rounded-full bg-transparent transition-colors',
                  isActive && 'bg-button-primary',
                )}
              />
            </button>
          )
        })}
      </div>

      <button
        type="button"
        aria-label="Scroll tabs right"
        onClick={() => scrollBy(160)}
        className="text-main-2 shrink-0 cursor-pointer p-2 transition-colors hover:text-white"
      >
        <ChevronRight size={18} />
      </button>
    </HStack>
  )
}

export default ProfileTabs
