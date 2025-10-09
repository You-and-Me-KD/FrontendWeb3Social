import { HStack } from '@/components/common'
import { CircularProgress } from '@/components/ui'
import { cn, dateFromNow } from '@/libs'
import { IActiveUserProps } from './mock'

interface ActiveItemProps {
  data: IActiveUserProps
  isExpanded?: boolean
}

export const ActiveItem = ({ data, isExpanded = false }: ActiveItemProps) => {
  return (
    <div className="hover:bg-main-3 flex w-full cursor-pointer items-center gap-3 px-5 py-3 transition-colors duration-200">
      <div className="flex flex-shrink-0 items-center justify-center">
        <CircularProgress value={data.progress} imageUrl={data.avatar} size={44} strokeWidth={4} />
      </div>
      <div
        className={cn(
          'h-11 flex-1 overflow-hidden transition-all duration-300 ease-in-out',
          isExpanded ? 'max-w-full opacity-100' : 'max-w-0 opacity-0',
        )}
      >
        <HStack pos="apart" align="center" spacing={4}>
          <div className="truncate text-sm font-bold text-white">{data.name}</div>
          <div className="text-main-2 truncate overflow-hidden text-xs font-medium text-ellipsis">
            {dateFromNow(data.time)}
          </div>
        </HStack>
        <div className="text-main-2 truncate overflow-hidden text-xs font-medium text-ellipsis">{data.message}</div>
      </div>
    </div>
  )
}
