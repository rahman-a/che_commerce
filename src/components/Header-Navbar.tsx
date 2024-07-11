'use client'
import React from 'react'
import { HomeIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Category as CategoryIcon } from '@/icons'
import LinkItem from './Link-Item'
import { useCurrentPage } from '@/hooks/useCurrentPage'
import { cn } from '@/lib/utils'
type Props = {}

export default function HeaderNavbar({}: Props) {
  const t = useTranslations('Navigation')
  const isCurrentPage = useCurrentPage()
  return (
    <nav className='hidden md:flex space-x-28 rtl:space-x-0'>
      <LinkItem
        text={t('home')}
        url='/'
        className={cn(
          'hover:text-secondary rtl:ml-28',
          isCurrentPage('') && 'text-secondary'
        )}
      >
        <HomeIcon className='w-6 h-6' />
      </LinkItem>
      <LinkItem
        text={t('categories')}
        url='/categories'
        className={cn(
          'hover:text-secondary',
          isCurrentPage('/categories/*') && 'text-secondary'
        )}
      >
        <CategoryIcon className='w-6 h-6' />
      </LinkItem>
    </nav>
  )
}
