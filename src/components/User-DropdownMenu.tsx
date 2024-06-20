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

type Props = {}

export default function UserDropdownMenu({}: Props) {
  const t = useTranslations('Navigation')
  const locale = useLocale()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserIcon className='w-6 h-6' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div>
          <DropdownMenuLabel>
            <span className='text-secondary'>
              {t('welcome', {
                name: locale === 'en' ? 'Abdelaziz' : 'عبد العزيز',
              })}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LinkItem
              text={t('account_setting')}
              url='/setting'
              className='[&>span]:text-sm'
            >
              <UserIcon className='text-primary w-6 h-6' />
            </LinkItem>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LinkItem
              text={t('orders')}
              url='/orders'
              className='[&>span]:text-sm'
            >
              <OrdersIcon className='text-primary w-6 h-6' />
            </LinkItem>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutBtn className='[&>span]:text-sm' />
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
