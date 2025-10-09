import { VStack } from '@/components/common'
import { useActiveUser } from '@/hooks'
import { cn } from '@/libs'
import { MenuIcon } from 'lucide-react'
import { ActiveItem } from './ActiveItem'
import { activeUsers } from './mock'
export const ActiveUsers = () => {
  const { type, toggle } = useActiveUser()
  const isExpanded = type === 'large'
  const widthClass = type === 'large' ? 'w-[var(--active-users-width-large)]' : 'w-[var(--active-users-width-small)]'

  return (
    <section
      className={`bg-main-1 top-0 right-0 z-40 hidden h-full pt-[var(--header-height)] transition-all duration-300 ease-in-out lg:fixed lg:block ${widthClass}`}
    >
      <VStack
        spacing={0}
        align="start"
        justify="start"
        className="no-scrollbar mt-6 h-[calc(100%-64px)] overflow-x-hidden overflow-y-scroll pb-6"
      >
        {[...activeUsers, ...activeUsers].map((user, index) => (
          <ActiveItem key={index} data={user} isExpanded={isExpanded} />
        ))}
      </VStack>
      <div
        className="bg-button-primary absolute right-0 bottom-0 left-0 z-10 flex h-16 cursor-pointer items-center justify-center"
        onClick={() => toggle(type === 'small' ? 'large' : 'small')}
      >
        <MenuIcon
          className="cursor-pointer transition-transform duration-300 ease-in-out"
          style={{ transform: type === 'large' ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
        <span className={cn('ml-2 hidden text-sm font-bold text-white', isExpanded && 'block')}>Messages / Chats</span>
      </div>
    </section>
  )
}
