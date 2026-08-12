import Image from 'next/image'
import { marketplaceItem } from './mock'

const Gallery = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <Image
        src={marketplaceItem.image}
        alt={marketplaceItem.name}
        width={1200}
        height={675}
        className="aspect-video w-full object-cover"
      />
      <div
        className="from-button-primary to-button-secondary absolute top-0 right-0 h-full w-16 bg-gradient-to-b opacity-90"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 40% 100%)' }}
      />
    </div>
  )
}

export default Gallery
