import type { IActiveUserProps } from '@/components/layout/ActiveUsers/mock'
import useActiveUserStore, { ActiveUserType, setActiveUserStore } from '@/stores/useActiveUserStore'

export const useActiveUser = () => {
  const { type, chatUser } = useActiveUserStore()

  const toggle = (type: ActiveUserType) => {
    setActiveUserStore({ type })
  }

  const openChat = (user: IActiveUserProps) => {
    setActiveUserStore({ chatUser: user, type: 'large' })
  }

  const closeChat = () => {
    setActiveUserStore({ chatUser: null })
  }

  return {
    type,
    toggle,
    chatUser,
    openChat,
    closeChat,
  }
}
