'use client'

import { useMemo, useState } from 'react'
import moment from 'moment'
import { ArrowLeftIcon, SendIcon } from 'lucide-react'
import { Avatar, HStack, Input, Separator, VStack } from '@/components/common'
import { cn } from '@/libs'
import { getChatMessages } from './chat-mock'
import { IActiveUserProps } from './mock'

interface ChatBoxProps {
  user: IActiveUserProps
  onBack?: () => void
}

export const ChatBox = ({ user, onBack }: ChatBoxProps) => {
  const messages = useMemo(() => getChatMessages(user), [user])
  const [draft, setDraft] = useState('')

  const isOnline = /online|active/i.test(user.status)

  return (
    <div className="flex h-full flex-col">
      <HStack spacing={12} align="center" className="px-5 py-4" noWrap>
        {onBack && (
          <button onClick={onBack} className="text-main-2 cursor-pointer hover:text-white" aria-label="Back">
            <ArrowLeftIcon size={20} />
          </button>
        )}
        <div className="relative shrink-0">
          <Avatar src={user.avatar} alt={user.name} width={44} height={44} />
          <span className="text-xxs absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#7750f8] font-bold text-white">
            {user.level}
          </span>
        </div>
        <VStack spacing={4} align="start">
          <span className="text-sm font-bold text-white">{user.name}</span>
          <span
            className={cn(
              'text-xxs w-fit rounded-full px-2 py-0.5 font-bold uppercase',
              isOnline ? 'bg-button-primary text-white' : 'bg-main-3 text-main-2',
            )}
          >
            {user.status}
          </span>
        </VStack>
      </HStack>
      <Separator />
      <VStack spacing={16} className="no-scrollbar flex-1 overflow-x-hidden overflow-y-auto px-5 py-4">
        {messages.map((message, index) => {
          const isMe = message.senderId === 'me'
          const showTime = index === 0 || messages[index - 1].time !== message.time

          return (
            <div key={message.id}>
              {showTime && (
                <div className="text-main-2 mb-2 text-center text-xs">{moment(message.time).calendar()}</div>
              )}
              <HStack pos={isMe ? 'right' : 'left'} spacing={8} noWrap>
                {!isMe && <Avatar src={user.avatar} alt={user.name} width={28} height={28} className="shrink-0" />}
                <div
                  className={cn(
                    'max-w-[75%] rounded-2xl px-4 py-2 text-sm wrap-break-word text-white',
                    isMe ? 'bg-[#7750f8]' : 'bg-main-3',
                  )}
                >
                  {message.content}
                </div>
              </HStack>
            </div>
          )
        })}
      </VStack>
      <HStack spacing={8} align="center" className="px-5 py-4" noWrap>
        <Input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Write a message..."
          variant="secondary"
          inputSize="small"
          rounded="full"
          fullWidth
        />
        <button
          type="button"
          disabled={!draft.trim()}
          className="bg-button-primary flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-white disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Send message"
        >
          <SendIcon size={16} />
        </button>
      </HStack>
    </div>
  )
}
