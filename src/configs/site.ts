import { envConfig } from '@/utils'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  title: 'MemeMarket',
  description:
    'The MemeMarket AI powered Prediction Market is a decentralized protocol designed to unlock structured, capital-efficient trading on meme coin volatility and serves a huge gap in the market.',
  keywords: 'MemeMarket, Meme Coin, AI, Prediction Market, DeFi, Decentralized Finance',
  url: envConfig.CLIENT_URL || 'http://localhost:3000',
  ogImage: `${envConfig.CLIENT_URL + '/imgs/og-image.jpg'}`,
}
