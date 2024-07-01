import * as React from 'react'
import { Search } from 'lucide-react'
import { MenuHam, Logo, User } from '@/icons'
import ShoppingCart from './Shopping-Cart'
import Sidebar from './Sidebar'
import { Sheet, SheetTrigger } from './ui/sheet'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import LinkItem from './Link-Item'
import { Home as HomeIcon, Category as CategoryIcon } from '../icons'
import UserDropdownMenu from './User-DropdownMenu'
import LanguageChanger from './Language-Changer'
export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const t = useTranslations('Navigation')

  return (
    <header className='bg-primary h-14 md:px-5'>
      <div className='flex items-center justify-between rtl:flex-row-reverse h-full px-4'>
        <div className='flex items-center rtl:flex-row-reverse space-x-4'>
          <div className='hidden md:block'>
            <Link href='/login'>
              <User className='w-6 h-6 cursor-pointer' />
            </Link>
            {/* <UserDropdownMenu /> */}
          </div>
          <ShoppingCart />
          <Search size={24} className='cursor-pointer' />
        </div>
        <nav className='hidden md:flex space-x-28 rtl:space-x-0'>
          <LinkItem
            text={t('home')}
            url='/'
            className='hover:text-secondary rtl:ml-28'
          >
            <HomeIcon className='w-6 h-6' />
          </LinkItem>
          <LinkItem
            text={t('categories')}
            url='/categories'
            className='hover:text-secondary'
          >
            <CategoryIcon className='w-6 h-6' />
          </LinkItem>
        </nav>
        <div className='hidden md:flex items-center justify-between space-x-5 rtl:flex-row-reverse'>
          <LanguageChanger className='flex' />
          <div className='w-[0.1rem] h-10 my-3 bg-black'></div>
          <Link href='/'>
            <Logo className='w-16 h-16' />
          </Link>
        </div>
        <Sheet>
          <SheetTrigger className='md:hidden'>
            <MenuHam width={28} height={28} className='cursor-pointer' />
          </SheetTrigger>
          <Sidebar />
        </Sheet>
      </div>
    </header>
  )
}
