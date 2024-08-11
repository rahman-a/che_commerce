'use client'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { User as UserIcon, Orders as OrdersIcon } from '../icons'
import { useTranslations, useLocale } from 'next-intl'
import LinkItem from './Link-Item'
import LogoutBtn from './Logout-Btn'
import { useCurrentPage } from '@/hooks/useCurrentPage'
import { cn } from '@/lib/utils'
import { User } from 'next-auth'

type Props = {
  user: User
}

export default function UserDropdownMenu({ user }: Props) {
  const t = useTranslations('Navigation')
  const locale = useLocale()
  const isCurrentPage = useCurrentPage()
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        className={
          isCurrentPage(['/profile', '/orders']) ? 'text-highlight' : ''
        }
      >
        <UserIcon className={cn('w-6 h-6')} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div>
          <DropdownMenuLabel>
            <p className='text-primary text-center w-full'>
              {user.name}
              {/* {t('welcome', {
                name: locale === 'en' ? 'Abdelaziz' : 'عبد العزيز',
              })} */}
            </p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LinkItem
              text={t('account_setting')}
              url='/profile'
              className='[&>span]:text-sm rtl:flex-row-reverse !justify-start w-full'
            >
              <UserIcon className='text-primary w-6 h-6' />
            </LinkItem>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LinkItem
              text={t('orders')}
              url='/orders'
              className='[&>span]:text-sm rtl:flex-row-reverse !justify-start w-full'
            >
              <OrdersIcon className='text-primary w-6 h-6' />
            </LinkItem>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutBtn className='[&>span]:text-sm rtl:flex-row-reverse !justify-start w-full' />
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
