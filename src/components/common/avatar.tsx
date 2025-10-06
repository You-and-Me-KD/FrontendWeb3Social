import { cn } from '@/libs'
import Image from 'next/image'

interface AvatarProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export const Avatar = ({ src, alt, width = 20, height = 20, className }: AvatarProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn('aspect-square rounded-full object-cover object-center', className)}
    />
  )
}
