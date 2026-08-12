'use client'

import { FC } from 'react'
import Link from 'next/link'
import { HStack, Separator } from '@/components/common'
import { Title } from '@/components/ui/Title'
import { DescriptionTabs, Gallery, PurchaseBox } from './components'
import { marketplaceItem } from './components/mock'

const MarketplaceItemPage: FC = () => {
  return (
    <section className="w-full">
      <Title description={marketplaceItem.eyebrow} title={marketplaceItem.name}>
        <HStack align="center" spacing={8} pos="center">
          {marketplaceItem.breadcrumbs.map((crumb) => (
            <HStack key={crumb.label} align="center" spacing={8}>
              <Link href={crumb.href} className="text-sm font-bold">
                {crumb.label}
              </Link>
              <Separator className="bg-main-5 h-2.5 w-0.5" orientation="vertical" />
            </HStack>
          ))}
          <span className="text-main-2 text-sm font-bold">{marketplaceItem.name}</span>
        </HStack>
      </Title>

      <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="flex flex-col gap-4 xl:col-span-2">
          <Gallery />
          <DescriptionTabs />
        </div>
        <div className="xl:col-span-1">
          <PurchaseBox />
        </div>
      </div>
    </section>
  )
}

export default MarketplaceItemPage
