import useTranslations from '@/hooks/useTranslations'
import { Item } from './Item'
import { sidebarItems } from './const'
import { VStack } from '@/components/common'
import { CircularProgress } from '@/components/ui'
import { usePathname } from '@/i18n/navigation'

export const Sidebar = () => {
  const { t } = useTranslations('common')
  const location = usePathname()
  return (
    <nav className="bg-main-1 top-0 left-0 z-40 hidden h-full w-[var(--sidebar-width)] pt-[var(--header-height)] lg:fixed lg:block">
      <VStack align="center" justify="center" className="mt-6">
        <CircularProgress
          value={25}
          size={44}
          strokeWidth={4}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEZghB-stFaphAohNqDAhEaXOWQJ9XvHKJw&s"
        />
      </VStack>

      <VStack spacing={10} className="mt-6" align="center" justify="center">
        {sidebarItems.map((item) => (
          <Item active={location === item.href} key={item.label} {...item} label={t(item.label)} />
        ))}
      </VStack>
    </nav>
  )
}
