import { MARKET_LIST } from './mock'
import { MarketplaceItem } from '@/components/ui/MarketplaceItem'

const MarketList = () => {
  return (
    <div className="col-span-1 md:col-span-2 xl:col-span-3">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {MARKET_LIST.map((item, index) => (
          <MarketplaceItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default MarketList
