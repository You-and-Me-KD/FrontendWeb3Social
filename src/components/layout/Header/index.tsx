import { HStack, VStack } from '@/components/common'
import { Exp } from './Exp'
import { Logo } from './Logo'
import { NavGrid } from './NavGrid'
import { NavLink } from './NavLink'
import { Search } from './Search'
import { Setting } from './Setting'

export const Header = () => {
  return (
    <VStack className="bg-header-bg fixed top-0 left-0 z-50 h-[var(--header-height)] w-full">
      <HStack align="center" className="h-full px-6" pos="apart" spacing={0}>
        <HStack spacing={0}>
          <Logo />
          <NavGrid />
        </HStack>
        <NavLink />
        <Search />
        <Exp exp={38} />
        <Setting />
      </HStack>
    </VStack>
  )
}
