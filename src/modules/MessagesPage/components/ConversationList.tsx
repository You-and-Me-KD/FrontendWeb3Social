import { HStack, VStack } from '@/components/common'
import { CircularProgress } from '@/components/ui'
import { IActiveUserProps } from '@/components/layout/ActiveUsers/mock'
import { cn, dateFromNow } from '@/libs'

interface ConversationListProps {
  users: IActiveUserProps[]
  selectedIndex: number
  onSelect: (index: number) => void
  className?: string
}

const ConversationList = ({ users, selectedIndex, onSelect, className }: ConversationListProps) => {
  return (
    <VStack
      spacing={0}
      align="start"
      className={cn(
        'no-scrollbar border-main-3 h-full w-full shrink-0 overflow-x-hidden overflow-y-auto py-2 xl:w-72 xl:border-r 2xl:w-80',
        className,
      )}
    >
      {users.map((user, index) => {
        const isActive = index === selectedIndex

        return (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            className={cn(
              'hover:bg-main-3 flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left transition-colors duration-200',
              isActive && 'bg-main-3',
            )}
          >
            <div className="flex shrink-0 items-center justify-center">
              <CircularProgress
                value={user.progress}
                level={user.level}
                imageUrl={user.avatar}
                size={44}
                strokeWidth={4}
              />
            </div>
            <div className="h-11 min-w-0 flex-1 overflow-hidden">
              <HStack pos="apart" align="center" spacing={4}>
                <span className="truncate text-sm font-bold text-white">{user.name}</span>
                <span className="text-main-2 shrink-0 text-xs font-medium">{dateFromNow(user.time)}</span>
              </HStack>
              <p className="text-main-2 truncate overflow-hidden text-xs font-medium text-ellipsis">{user.message}</p>
            </div>
          </button>
        )
      })}
    </VStack>
  )
}

export default ConversationList
