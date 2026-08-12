import { marketplaceItem } from '@/modules/MarketplaceItemPage/components/mock'

export interface CartLineItem {
  id: string
  name: string
  category: string
  author: string
  image: string
  price: number
  license: string
  quantity: number
}

export const LICENSE_OPTIONS = [
  { value: 'regular', label: 'Regular' },
  { value: 'extended', label: 'Extended' },
]

export const INITIAL_CART_ITEMS: CartLineItem[] = [
  {
    id: 'twitch-stream-ui-pack',
    name: 'Twitch Stream UI Pack',
    category: 'Stream Packs',
    author: 'Marina Valentine',
    image: 'https://odindesignthemes.com/vikinger-dark/img/marketplace/items/02.jpg',
    price: 12,
    license: 'regular',
    quantity: 1,
  },
  {
    id: 'gaming-coin-badges-pack',
    name: 'Gaming Coin Badges Pack',
    category: 'Illustrations',
    author: 'Nick Grissom',
    image: 'https://odindesignthemes.com/vikinger-dark/img/marketplace/items/03.jpg',
    price: 6,
    license: 'regular',
    quantity: 1,
  },
  {
    id: 'pixel-diamond-gaming-magazine',
    name: marketplaceItem.name,
    category: marketplaceItem.eyebrow,
    author: marketplaceItem.author.name,
    image: marketplaceItem.image,
    price: Number(marketplaceItem.price),
    license: 'regular',
    quantity: 1,
  },
]

export const APPLIED_DISCOUNT = 5
