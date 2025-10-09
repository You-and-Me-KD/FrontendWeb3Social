import { create } from 'zustand'

export type FilterMarketType = 'price' | 'date'
export type OrderMarketType = 'asc' | 'desc'
type FilterMarketStore = {
  filter: FilterMarketType
  order: OrderMarketType
}

const store = () => ({
  filter: 'price' as FilterMarketStore['filter'],
  order: 'asc' as FilterMarketStore['order'],
})

const useFilterMarketStore = create<FilterMarketStore>(store)
export default useFilterMarketStore

export function setFilterMarketStore<T extends keyof FilterMarketStore>(x: Pick<FilterMarketStore, T>) {
  useFilterMarketStore.setState(x)
}

export const FILTER_BY_OPTIONS = [
  { value: 'price', label: 'Price' },
  { value: 'date', label: 'Date Published' },
]

export const ORDER_BY_OPTIONS = [
  { value: 'asc', label: 'Ascending' },
  { value: 'desc', label: 'Descending' },
]
