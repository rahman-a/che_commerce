'use client'
import * as React from 'react'
import { Search } from 'lucide-react'
import {
  MenuHam,
  Logo,
  User,
  Home as HomeIcon,
  Category as CategoryIcon,
  ColoredInstagram,
} from '@/icons'
import ShoppingCart from './Shopping-Cart'
import Sidebar from './Sidebar'
import { Sheet, SheetTrigger } from './ui/sheet'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import LinkItem from './Link-Item'
import UserDropdownMenu from './User-DropdownMenu'
import LanguageChanger from './Language-Changer'
import HeaderNavbar from './Header-Navbar'
import { useSession } from 'next-auth/react'
export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const t = useTranslations('Navigation')
  const session = useSession()
  const user = session.data?.user
  return (
    <header className='fixed w-full top-0 left-0 z-20 bg-primary h-14 md:px-5 shadow-md'>
      <div className='flex items-center justify-between rtl:flex-row-reverse h-full px-4'>
        <div className='flex items-center rtl:flex-row-reverse space-x-5 space-x-reverse md:space-x-5 rtl:md:space-x-5'>
          <div className='hidden md:block'>
            {user ? (
              <UserDropdownMenu user={user} />
            ) : (
              <Link href='/login'>
                <User className='w-6 h-6 cursor-pointer' />
              </Link>
            )}
          </div>
          <ShoppingCart />
          <div className='grid place-content-center w-7 h-7  circle bg-white md:bg-transparent'>
            <Search size={20} className='cursor-pointer' />
          </div>
          <ColoredInstagram className='w-7 h-7 sm:w-8 sm:h-8 invisible opacity-0' />
        </div>
        <HeaderNavbar />
        <div className='hidden md:flex items-center justify-between space-x-5 rtl:flex-row-reverse'>
          <LanguageChanger className='flex' />
          <div className='w-[0.1rem] h-10 my-3 bg-black'></div>
          <Link href='/'>
            <Logo className='w-16 h-16' />
          </Link>
        </div>
        <Link href='/' className='md:hidden -translate-x-10'>
          <Logo className='w-16 h-16 cursor-pointer' />
        </Link>
        <Sheet>
          <SheetTrigger className='flex rtl:flex-row-reverse items-center space-x-5 md:hidden'>
            <Link href='https://www.instagram.com '>
              <ColoredInstagram className='w-6 h-6' />
            </Link>
            <div className='grid place-content-center w-7 h-7 circle bg-white rtl:ml-2'>
              <MenuHam
                width={20}
                height={20}
                className='cursor-pointer translate-x-[0.1rem]'
              />
            </div>
          </SheetTrigger>
          <Sidebar />
        </Sheet>
      </div>
    </header>
  )
}
