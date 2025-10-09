'use client'

import { cn } from '@/libs'

interface CircularProgressProps {
  level?: number
  value: number
  size?: number
  imageUrl?: string
  strokeWidth?: number
  className?: string
  indicatorClassName?: string
  trackClassName?: string
  showPercentage?: boolean
  children?: React.ReactNode
}

const CircularProgress = ({
  level = 1,
  value,
  size = 120,
  imageUrl,
  strokeWidth = 8,
  className,
  indicatorClassName,
  trackClassName,
  showPercentage = false,
  children,
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <div className={cn('relative inline-flex items-center justify-center overflow-hidden', className)}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className={cn('text-gray-200', trackClassName)}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={cn('text-button-primary transition-all duration-300', indicatorClassName)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <image
          href={imageUrl}
          x={strokeWidth}
          y={strokeWidth}
          width={size - strokeWidth * 2}
          height={size - strokeWidth * 2}
          clipPath="url(#circularClip)"
        />
        <defs>
          <clipPath id="circularClip">
            <circle cx={size / 2} cy={size / 2} r={radius - strokeWidth / 2} />
          </clipPath>
        </defs>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        {showPercentage ? <span className="text-sm font-medium text-gray-700">{Math.round(value)}%</span> : children}
      </div>
      <div className="text-xxs absolute right-0 bottom-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#7750f8] font-bold">
        {level}
      </div>
    </div>
  )
}

export { CircularProgress }
