import { HStack, Tooltip, VStack } from '@/components/common'
import useTranslations from '@/hooks/useTranslations'
import { cn } from '@/libs'
import { Ellipsis } from 'lucide-react'
import React from 'react'
import { MORE_LINKS, NAV_LINKS } from './const'

interface NavLinkProps {
  href: string
  label: string
  className?: string
}

const NavLinkItem = ({ href, label, className }: NavLinkProps) => {
  return (
    <div>
      <a
        href={href}
        className={cn('hover:text-main-5 px-6 text-xs leading-20 font-bold text-white transition-colors', className)}
      >
        {label}
      </a>
    </div>
  )
}

export const NavLink = () => {
  const { t } = useTranslations('common')
  return (
    <HStack spacing={0} className="sxl:flex hidden">
      {NAV_LINKS.map((link) => (
        <NavLinkItem key={link.href} href={link.href} label={t(link.label)} />
      ))}
      <Tooltip
        content={
          <VStack className="w-30">
            {MORE_LINKS.map((link) => (
              <NavLinkItem className="px-1 leading-7" key={link.href} href={link.href} label={t(link.label)} />
            ))}
          </VStack>
        }
        side="top"
        align="start"
        delayDuration={300}
      >
        <div className="px-6">
          <Ellipsis size={14} className="hover:text-main-5 cursor-pointer text-white transition-colors" />
        </div>
      </Tooltip>
    </HStack>
  )
}
