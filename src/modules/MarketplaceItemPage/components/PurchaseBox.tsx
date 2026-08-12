'use client'

import { useState } from 'react'
import { Avatar, Button, Checkbox, HStack, Separator, VStack } from '@/components/common'
import { FacebookIcon, StarIcon, TwitterIcon } from '@/assets/icons'
import { marketplaceItem } from './mock'

const PurchaseBox = () => {
  const { price, sales, rating, ratingMax, licenses, author, details, tags } = marketplaceItem
  const [licenseId, setLicenseId] = useState(licenses[0].id)

  return (
    <VStack spacing={24} align="start" className="bg-main-1 w-full rounded-2xl p-4 xl:p-7">
      <p className="text-3xl font-bold text-white">
        <span className="text-button-primary">$</span> {price}
      </p>

      <VStack spacing={16} align="start" className="w-full">
        {licenses.map((license) => (
          <Checkbox
            key={license.id}
            id={license.id}
            name="license"
            checked={licenseId === license.id}
            onChange={() => setLicenseId(license.id)}
            rounded="sm"
            className="items-start"
            label={
              <VStack spacing={4} align="start">
                <span className="text-sm font-bold text-white">{license.name}</span>
                <span className="text-main-2 text-xs font-medium">{license.description}</span>
              </VStack>
            }
          />
        ))}
      </VStack>

      <Button variant="primary" size="x-medium" rounded="xl" fullWidth>
        Add to Your Cart!
      </Button>

      <HStack pos="center" spacing={40} className="w-full">
        <VStack spacing={0} align="center">
          <span className="text-xl font-bold text-white">{sales}</span>
          <span className="text-main-2 text-xs font-medium">SALES</span>
        </VStack>
        <VStack spacing={4} align="center">
          <span className="text-xl font-bold text-white">
            {rating}/{ratingMax}
          </span>
          <HStack spacing={2}>
            {Array.from({ length: ratingMax }, (_, index) => (
              <StarIcon key={index} rating={Math.max(0, Math.min(1, rating - index))} />
            ))}
          </HStack>
        </VStack>
      </HStack>

      <Separator />

      <VStack spacing={16} align="start" className="w-full">
        <span className="text-sm font-bold text-white">Item Author</span>
        <HStack spacing={12} align="center">
          <div className="relative shrink-0">
            <Avatar src={author.avatar} alt={author.name} width={44} height={44} />
            <span className="text-xxs absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#7750f8] font-bold text-white">
              {author.level}
            </span>
          </div>
          <VStack spacing={0} align="start">
            <span className="text-sm font-bold text-white">{author.name}</span>
            <span className="text-main-2 text-xs font-medium">{author.itemsPublished} items published</span>
          </VStack>
        </HStack>
        <HStack spacing={6}>
          {author.badgeColors.map((color, index) => (
            <div key={index} className="h-6 w-6 rounded-md" style={{ backgroundColor: color }} />
          ))}
          <div className="bg-main-3 text-main-2 flex h-6 w-8 items-center justify-center rounded-md text-xs font-bold">
            +{author.moreBadges}
          </div>
        </HStack>
        <Button
          variant="custom"
          customVariantStyles="bg-main-3 text-white hover:bg-main-5"
          size="x-medium"
          rounded="xl"
          fullWidth
        >
          View Author&apos;s Store
        </Button>
      </VStack>

      <Separator />

      <VStack spacing={12} align="start" className="w-full">
        <span className="text-sm font-bold text-white">Item Details</span>
        {details.map((detail) => (
          <HStack key={detail.label} pos="apart" align="start" className="w-full" spacing={16}>
            <span className="text-main-2 shrink-0 text-xs font-medium">{detail.label}</span>
            <span className="text-right text-xs font-bold text-white">{detail.value}</span>
          </HStack>
        ))}
        <HStack pos="apart" align="start" className="w-full" spacing={16}>
          <span className="text-main-2 shrink-0 text-xs font-medium">Tags</span>
          <HStack pos="right" spacing={4} className="max-w-[70%]">
            {tags.map((tag) => (
              <span key={tag} className="text-button-primary text-right text-xs font-bold">
                {tag}
                {','}
              </span>
            ))}
          </HStack>
        </HStack>
      </VStack>

      <Separator />

      <VStack spacing={12} align="start" className="w-full">
        <span className="text-sm font-bold text-white">Item Share</span>
        <HStack spacing={8}>
          <button
            type="button"
            aria-label="Share on Facebook"
            className="flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-lg"
          >
            <FacebookIcon width={36} height={36} />
          </button>
          <button
            type="button"
            aria-label="Share on Twitter"
            className="flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-lg"
          >
            <TwitterIcon width={36} height={36} />
          </button>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default PurchaseBox
