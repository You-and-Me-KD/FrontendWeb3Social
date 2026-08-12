'use client'

import { useState } from 'react'
import { Avatar, HStack, Separator, VStack } from '@/components/common'
import { StarIcon } from '@/assets/icons'
import { cn } from '@/libs'
import { marketplaceItem } from './mock'

const TABS = [
  { id: 'description', label: 'Description' },
  { id: 'comments', label: `Comments ${marketplaceItem.comments.length}` },
  { id: 'reviews', label: `Reviews ${marketplaceItem.reviews.length}` },
] as const

type TabId = (typeof TABS)[number]['id']

const DescriptionTabs = () => {
  const [activeTab, setActiveTab] = useState<TabId>('description')
  const { description, comments, reviews } = marketplaceItem

  return (
    <div className="w-full">
      <HStack spacing={0} noWrap className="border-main-3 w-full overflow-hidden rounded-t-2xl border">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'border-main-3 flex-1 cursor-pointer border-r py-4 text-center text-sm font-bold text-white transition-colors duration-200 last:border-r-0',
              activeTab === tab.id ? 'bg-main-3' : 'hover:bg-main-3/50',
            )}
          >
            {tab.label}
          </button>
        ))}
      </HStack>

      <div className="bg-main-1 border-main-3 w-full rounded-b-2xl border border-t-0 p-4 xl:p-7">
        {activeTab === 'description' && (
          <VStack spacing={24} align="start">
            <VStack spacing={12} align="start">
              <h4 className="text-lg font-bold text-white">{description.intro.heading}</h4>
              {description.intro.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-main-2 text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </VStack>
            <VStack spacing={12} align="start">
              <h4 className="text-lg font-bold text-white">{description.features.heading}</h4>
              {description.features.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-main-2 text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </VStack>
            <VStack spacing={12} align="start">
              <h4 className="text-lg font-bold text-white">Included in the Pack:</h4>
              <VStack spacing={8} align="start">
                {description.included.map((item) => (
                  <HStack key={item} spacing={8} align="center">
                    <span className="bg-button-primary h-1.5 w-1.5 rounded-full" />
                    <span className="text-main-2 text-sm">{item}</span>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </VStack>
        )}

        {activeTab === 'comments' && (
          <VStack spacing={20} align="start" className="w-full">
            {comments.map((comment, index) => (
              <div key={index} className="w-full">
                <HStack spacing={12} align="start">
                  <Avatar src={comment.avatar} alt={comment.author} width={36} height={36} className="shrink-0" />
                  <VStack spacing={4} align="start">
                    <HStack spacing={8} align="center">
                      <span className="text-sm font-bold text-white">{comment.author}</span>
                      <span className="text-main-2 text-xs font-medium">{comment.time}</span>
                    </HStack>
                    <p className="text-main-2 text-sm">{comment.content}</p>
                  </VStack>
                </HStack>
                {index < comments.length - 1 && <Separator className="mt-5" />}
              </div>
            ))}
          </VStack>
        )}

        {activeTab === 'reviews' && (
          <VStack spacing={20} align="start" className="w-full">
            {reviews.map((review, index) => (
              <div key={index} className="w-full">
                <HStack spacing={12} align="start">
                  <Avatar src={review.avatar} alt={review.author} width={36} height={36} className="shrink-0" />
                  <VStack spacing={4} align="start">
                    <span className="text-sm font-bold text-white">{review.author}</span>
                    <HStack spacing={2}>
                      {Array.from({ length: 5 }, (_, starIndex) => (
                        <StarIcon key={starIndex} rating={Math.max(0, Math.min(1, review.rating - starIndex))} />
                      ))}
                    </HStack>
                    <p className="text-main-2 text-sm">{review.content}</p>
                  </VStack>
                </HStack>
                {index < reviews.length - 1 && <Separator className="mt-5" />}
              </div>
            ))}
          </VStack>
        )}
      </div>
    </div>
  )
}

export default DescriptionTabs
