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
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <UserIcon className='w-6 h-6' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div>
          <DropdownMenuLabel>
            <p className='text-secondary text-center w-full'>
              {t('welcome', {
                name: locale === 'en' ? 'Abdelaziz' : 'عبد العزيز',
              })}
            </p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LinkItem
              text={t('account_setting')}
              url='/setting'
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
