import { AnimatePresence, motion } from 'framer-motion'
import { VStack } from '@/components/common'
import { useActiveUser } from '@/hooks'
import { cn } from '@/libs'
import { MenuIcon } from 'lucide-react'
import { ActiveItem } from './ActiveItem'
import { ChatBox } from './ChatBox'
import { activeUsers } from './mock'
export const ActiveUsers = () => {
  const { type, toggle, chatUser, openChat, closeChat } = useActiveUser()
  const isExpanded = type === 'large'
  const widthClass = type === 'large' ? 'w-[var(--active-users-width-large)]' : 'w-[var(--active-users-width-small)]'

  return (
    <section
      className={`bg-main-1 top-0 right-0 z-40 hidden h-full overflow-hidden pt-[var(--header-height)] transition-all duration-300 ease-in-out lg:fixed lg:block ${widthClass}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {chatUser ? (
          <motion.div
            key="chat"
            className="h-[calc(100%-64px)]"
            initial={{ x: 32, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 32, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <ChatBox user={chatUser} onBack={closeChat} />
          </motion.div>
        ) : (
          <motion.div
            key="list"
            className="mt-6 h-[calc(100%-64px)]"
            initial={{ x: -32, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -32, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <VStack
              spacing={0}
              align="start"
              justify="start"
              className="no-scrollbar h-full overflow-x-hidden overflow-y-scroll pb-6"
            >
              {[...activeUsers, ...activeUsers].map((user, index) => (
                <ActiveItem key={index} data={user} isExpanded={isExpanded} onClick={() => openChat(user)} />
              ))}
            </VStack>
          </motion.div>
        )}
      </AnimatePresence>
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
