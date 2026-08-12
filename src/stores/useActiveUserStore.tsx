import { create } from 'zustand'
import type { IActiveUserProps } from '@/components/layout/ActiveUsers/mock'

export type ActiveUserType = 'hidden' | 'small' | 'large'

type ActiveUserStore = {
  type: ActiveUserType
  chatUser: IActiveUserProps | null
}

const store = () => ({
  type: 'small' as ActiveUserStore['type'],
  chatUser: null as ActiveUserStore['chatUser'],
})

const useActiveUserStore = create<ActiveUserStore>(store)

export default useActiveUserStore

export function setActiveUserStore<T extends keyof ActiveUserStore>(x: Pick<ActiveUserStore, T>) {
  useActiveUserStore.setState(x)
}
