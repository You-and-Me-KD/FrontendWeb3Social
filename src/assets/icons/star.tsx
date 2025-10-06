'use client'
import React, { useId } from 'react'

interface StarIconProps extends React.SVGProps<SVGSVGElement> {
  rating?: number
}

export const StarIcon = ({ rating = 1, ...props }: StarIconProps) => {
  const normalizedRating = rating > 1 ? rating / 100 : rating
  const percentage = Math.max(0, Math.min(1, normalizedRating)) * 100
  const gradientId = `starGradient-${useId()}`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      version="1.1"
      width="9"
      height="8"
      viewBox="0 0 9 8"
      {...props}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffe00d" />
          <stop offset={`${percentage}%`} stopColor="#ffe00d" />
          <stop offset={`${percentage}%`} stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#d1d5db" />
        </linearGradient>
      </defs>
      <path
        d="M4.5,0l1.482,2.515L9,3.056L6.899,5.151L7.28,8L4.5,6.78L1.719,8L2.1,5.151L0,3.056l3.017-0.541L4.5,0"
        fill={`url(#${gradientId})`}
      />
    </svg>
  )
}
