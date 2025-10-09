import { create } from 'zustand'

export type ActiveUserType = 'hidden' | 'small' | 'large'

type ActiveUserStore = {
  type: ActiveUserType
}

const store = () => ({
  type: 'small' as ActiveUserStore['type'],
})

const useActiveUserStore = create<ActiveUserStore>(store)

export default useActiveUserStore

export function setActiveUserStore<T extends keyof ActiveUserStore>(x: Pick<ActiveUserStore, T>) {
  useActiveUserStore.setState(x)
}
