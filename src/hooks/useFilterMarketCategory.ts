import useFilterMarketStore, { FilterMarketType, OrderMarketType } from '@/stores/useFilterMarketStore'

export const useFilterMarketCategory = () => {
  const { filter, order } = useFilterMarketStore()

  const handleSetFilter = (filter: FilterMarketType) => {
    useFilterMarketStore.setState({ filter })
  }
  const handleSetOrder = (order: OrderMarketType) => {
    useFilterMarketStore.setState({ order })
  }
  return { filter, order, handleSetFilter, handleSetOrder }
}
