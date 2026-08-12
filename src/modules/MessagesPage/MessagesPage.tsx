'use client'

import { useState } from 'react'
import { HStack } from '@/components/common'
import { cn } from '@/libs'
import { ChatBox } from '@/components/layout/ActiveUsers/ChatBox'
import { activeUsers, IActiveUserProps } from '@/components/layout/ActiveUsers/mock'
import { ConversationList } from './components'

const MessagesPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const selectedUser: IActiveUserProps = activeUsers[selectedIndex]

  return (
    <section className="w-full">
      <HStack
        align="start"
        spacing={0}
        noWrap
        className="bg-main-1 h-[calc(100vh-var(--header-height)-220px)] min-h-125 w-full overflow-hidden rounded-2xl"
      >
        <ConversationList
          users={activeUsers}
          selectedIndex={selectedIndex}
          onSelect={(index) => {
            setSelectedIndex(index)
            setIsChatOpen(true)
          }}
          className={cn('xl:flex', isChatOpen ? 'hidden' : 'flex')}
        />
        <div className={cn('h-full min-w-0 flex-1 xl:block', isChatOpen ? 'block' : 'hidden')}>
          <ChatBox key={selectedIndex} user={selectedUser} onBack={() => setIsChatOpen(false)} />
        </div>
      </HStack>
    </section>
  )
}

export default MessagesPage
