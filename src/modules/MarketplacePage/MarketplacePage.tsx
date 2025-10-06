'use client'
import { FC } from 'react'
import { Categories, LatestItems } from './components'

const MarketplacePage: FC = () => {
  return (
    <section className="w-full">
      <Categories />
      <LatestItems />
    </section>
  )
}

export default MarketplacePage
