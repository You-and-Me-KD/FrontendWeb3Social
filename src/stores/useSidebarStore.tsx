import { create } from 'zustand'

export type SidebarType = 'small' | 'large'

type SidebarStore = {
  type: SidebarType
}

const store = () => ({
  type: 'open' as SidebarStore['type'],
})

const useSidebarStore = create<SidebarStore>(store)

export default useSidebarStore

export function setSidebarStore<T extends keyof SidebarStore>(x: Pick<SidebarStore, T>) {
  useSidebarStore.setState(x)
}
