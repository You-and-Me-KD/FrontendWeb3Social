'use client'
import { FC } from 'react'
import { Filter, FilterPrice } from './components'
import MarketList from './components/MarketList'
const MarketpaceCategoryPage: FC = () => {
  return (
    <section className="w-full">
      <Filter />
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <FilterPrice />
        <MarketList />
      </div>
    </section>
  )
}

export default MarketpaceCategoryPage
