import useActiveUserStore, { ActiveUserType, setActiveUserStore } from '@/stores/useActiveUserStore'

export const useActiveUser = () => {
  const { type } = useActiveUserStore()

  const toggle = (type: ActiveUserType) => {
    setActiveUserStore({ type })
  }

  return {
    type,
    toggle,
  }
}
