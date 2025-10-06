import useSidebarStore, { setSidebarStore } from '@/stores/useSidebarStore'
import { LayoutGrid } from 'lucide-react'

export const NavGrid = () => {
  const { type } = useSidebarStore()
  const handleClick = () => {
    const newType = type === 'small' ? 'large' : 'small'
    setSidebarStore({ type: newType })
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleClick()
    }
  }

  return (
    <div
      className="w-20 cursor-pointer"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Toggle sidebar size"
    >
      <LayoutGrid className="text-icon-color mx-auto transition-colors hover:text-white" />
    </div>
  )
}
