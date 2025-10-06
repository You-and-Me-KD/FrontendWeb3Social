import { FriendIcon, MessageIcon, NotificationIcon, SettingIcon, ShoppingBagIcon } from '@/assets'
import { HStack } from '@/components/common'

export const Setting = () => {
  return (
    <HStack spacing={0}>
      <HStack
        spacing={0}
        className="after:bg-icon-color before:bg-icon-color relative hidden px-4.5 before:absolute before:top-1/2 before:right-0 before:h-8 before:w-[1px] before:-translate-y-1/2 before:content-[''] after:absolute after:top-1/2 after:left-0 after:h-8 after:w-[1px] after:-translate-y-1/2 after:content-[''] lg:flex"
      >
        <div className="px-3.5">
          <ShoppingBagIcon />
        </div>
        <div className="px-3.5">
          <FriendIcon />
        </div>
        <div className="px-3.5">
          <MessageIcon />
        </div>
        <div className="px-3.5">
          <NotificationIcon />
        </div>
      </HStack>
      <div className="pl-6">
        <SettingIcon />
      </div>
    </HStack>
  )
}
