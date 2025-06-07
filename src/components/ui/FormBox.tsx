import { cn } from '@/libs/utils'
import { FC } from 'react'

interface Props {
  className?: string
  children?: React.ReactNode
}

const FormBox: FC<Props> = ({ className, children }) => {
  return (
    <div className={cn('bg-main-1 shadow-main-1 relative w-full rounded-2xl px-6 py-10 md:py-16 xl:p-16', className)}>
      {children}
    </div>
  )
}

export default FormBox
