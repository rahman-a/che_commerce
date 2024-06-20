import * as React from 'react'
import { SheetContent } from '@/components/ui/sheet'
import LinkItem from './Link-Item'
import {
  Home as HomeIcon,
  Category as CategoryIcon,
  Orders as OrdersIcon,
  Cart as CartIcon,
  User as UserIcon,
} from '../icons'
import KuwaitFlag from '../images/flag_of_kw.png'
import LanguageChanger from './Language-Changer'
import Link from 'next/link'
import { ColoredInstagram, ColoredWhatsapp } from '@/icons'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import LogoutBtn from './Logout-Btn'

export interface ISidebarProps {}

export default function Sidebar(props: ISidebarProps) {
  const t = useTranslations('Navigation')
  const locale = useLocale()
  return (
    <SheetContent className='w-[225px]'>
      <div className='flex flex-col items-center justify-between h-full'>
        <div className='flex flex-col space-y-16'>
          <h3 className='text-primary text-[16px] text-center mt-8'>
            {t('welcome', {
              name: locale === 'en' ? 'Abdelaziz' : 'عبد العزيز',
            })}
          </h3>
          <nav className='space-y-8'>
            <LinkItem text={t('home')} url='/'>
              <HomeIcon className='text-primary w-6 h-6' />
            </LinkItem>
            <LinkItem text={t('categories')} url='/categories'>
              <CategoryIcon className='text-primary w-6 h-6' />
            </LinkItem>
            <LinkItem text={t('cart')} url='/cart'>
              <CartIcon className='text-primary w-6 h-6' />
            </LinkItem>
            <LinkItem text={t('orders')} url='/orders'>
              <OrdersIcon className='text-primary w-6 h-6' />
            </LinkItem>
          </nav>
        </div>
        <footer className='space-y-12'>
          <div className='mt-6'>
            <div className='flex flex-col space-y-5'>
              <LinkItem text={t('account_setting')} url='/setting'>
                <UserIcon className='text-primary w-6 h-6' />
              </LinkItem>
              <LogoutBtn />
            </div>
            {/* <div className='flex flex-col items-center justify-between'>
              <Link
                locale={locale}
                className='text-sm text-primary underline text-center'
                href='/login'
              >
                {t('login')}
              </Link>
              <span>{t('or')}</span>
              <Link
                locale={locale}
                className='text-sm text-primary underline text-center'
                href='/signup'
              >
                {t('signup')}
              </Link>
            </div> */}
          </div>
          <div className='flex flex-col items-center space-y-5'>
            <h2 className='text-lg font-bold'>{t('contact_us')}</h2>
            <div className='flex items-center justify-center space-x-16 rtl:space-x-0'>
              <Link href='/' className='rtl:!ml-16'>
                <ColoredWhatsapp className='w-8 h-8' />
              </Link>
              <Link href='/'>
                <ColoredInstagram className='w-8 h-8' />
              </Link>
            </div>
          </div>
          <div className='flex justify-center space-x-16 rtl:space-x-0'>
            <div className='flex flex-col items-center space-y-3 rtl:!ml-16'>
              <span className='text-sm font-bold'>{t('language')}</span>
              <LanguageChanger />
            </div>
            <div className='flex flex-col items-center space-y-4'>
              <span className='text-sm font-bold'>{t('currency')}</span>
              <Image src={KuwaitFlag} width={30} height={40} alt='currency' />
            </div>
          </div>
        </footer>
      </div>
    </SheetContent>
  )
}
